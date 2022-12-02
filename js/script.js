{
    const tasks = [
        {
            content: "nagrać lekcię",
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
            htmlString += 
            <li {...done ? "style=\"text-decoration: line-through\"" : "" }>
            ${task.content}
            </li>
            }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    
    const init = () => {
        render();
        const form = document.querySelector(".js-form")

        form.addEventListener("submit" = () => {
            Event.preventDefault();
            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if(newTaskContent === "") {
                return;
            }

            tasks.push({
                content: newTaskContent,
            });

            render();
        })

    };

    init();
}