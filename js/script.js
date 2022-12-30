{
    let tasks = [];
    let hideDoneTasks = false;

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    }

    const bindEvents =() => {
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
    }

    const renderButtons = () => {
      const buttonsElement = document.querySelector(".js-buttons");

        if (!tasks.length) {
            buttonsElement.innerHTML = "";
            return;
        };

        buttonsElement.innerHTML = `
        <button class="Task__done js-Task__done">
        ${hideDoneTasks ? "Pokaż" : "Ukryj"} skończone zadania</button>
        <button class="Task__done--remove js-Task__done--markAll"
        ${tasks.every((task) => task.done) ? " disabled" : ""}>
        Oznacz wszystkie jako ukończone</button>`;
      };

        const Task__done = () => {
          tasks = tasks.map((task) => ({
            ...task, done: true
          }));
          
        render();
        };

        const Task__doneRemove = () => {
          Task__doneRemove = !removeButtons;
          render();
        };
    

    const bindButtonsEvents = () => {

      const Task__doneButton = document.querySelector(".js-Task__done")

      if(Task__doneButton) {
        Task__doneButton.addEventListener("click", Task__done)
      }

    };

    const Task__doneRemoveButton = document.querySelector(".js-Task__done--markAll")

    if(Task__doneRemoveButton) {
      Task__doneRemoveButton.addEventListener("click", Task__doneRemove)
    };

  

    const renderTasks = () => {
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
};

const render = () => {
        renderTasks();
        renderButtons();
        bindEvents();
        bindButtonsEvents();
}

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
    