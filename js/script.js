{
    const tasks = [
        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const render = () => {
       let htmlString = "";

       for (const task of tasks) {
        htmlString += `
        <li class="list_item">
        <button class="button_done js-done">
        </button>
          ${task.content};
          <button class="button_remove js-remove"></button>
        </li>
        `
       };

       document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    
    const init = () => {
        render();
    };

    init();
}
    