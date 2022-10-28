const inputTask = document.querySelector('#newtask input');
const addTaskBtn = document.querySelector('#push');
const taskLists = document.querySelector('#tasks');

addTaskBtn.addEventListener("click", () =>{
    if(inputTask.value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        taskLists.innerHTML += 
        `<div class="task">
                <span id="taskname">
                    ${inputTask.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i> DELETE
                </button>
            </div>
        `;
        let taskListsAll = document.querySelectorAll(".delete");
        for(var i = 0; i < taskListsAll.length; i++){
            taskListsAll[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        inputTask.value = "";
    }
})