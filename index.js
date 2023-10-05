
let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#listContainer");

function addTask(task)
{
    if(task == ''){
        alert("You must write something")
    }
    else
    {
        let listItem = document.createElement("li");
        listItem.innerHTML = task;
        list.appendChild(listItem);
        let deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "\u00d7";
        listItem.appendChild(deleteIcon);
    }

}

inputBox.addEventListener("keyup", function(event){
    if(event.key == "Enter")
    {
        addTask(inputBox.value);
        inputBox.value = "";
        saveTasksData();
    }
} );

list.addEventListener("click", function(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked"); // toggle = change class
        saveTasksData();
    }
    else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
        saveTasksData();
    }
});

//function to save and display the tasks so the browser won't delete them after closing or refreshing of the page
function saveTasksData() 
{
    localStorage.setItem("tasksData", list.innerHTML);
}
function displayTasksData()
{
    list.innerHTML = localStorage.getItem("tasksData");
}

//showing the data:
displayTasksData();

