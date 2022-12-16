{
    const tasks = [];
    let hideDoneTasks = false;

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    }

    const renderButtons = () => {

    };

    const bindButtonEvents = () => {

    };

    const render = () => {
       let htmlString = "";

       for (const task of tasks) {
        htmlString += `
        <li 
        class="list_item">
        <button 
        class="button_done js-done">
        ${task.done ? "&#10004;" : ""}
        </button>
        <span class="${task.done ? "list_item_done" : ""}">
          ${task.content}
          </span>
          <button 
          class="button_remove js-remove">&#128465</button>
        </li>
        `;
       }

       document.querySelector(".js-tasks").innerHTML = htmlString;

       const removeButtons = document.querySelectorAll(".js-remove");

       removeButtons.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
          tasks.splice(index, 1);
          render();
         });
       })
    

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
        toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(index);
            render();
        })
    })

};

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
          });

          render();
    }
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
          event.preventDefault();

          const newTaskContent = document.querySelector(".js-newTask").value.trim();

          if(newTaskContent === "") {
            return;
          }

          addNewTask(newTaskContent);
        });
    };

    init();
}
    