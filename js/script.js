{
    const tasks = [
        {
            content: "nagraj lekcję",
            done: false,
        },
        {
            content: "odrób zadanie",
            done: true,
        },
        {
            content: "nie poddawaj się !!!",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li
                ${task.done ? "class=\"tasks__content--done\"" : ""} js-task
            >
            <button class="tasks__button tasks__button--toogleDone js-toggleDone"> ✔ </button>
            <button class="tasks__button tasks__button--remuve js-remove">🗑</button>
                ${task.content}
            </li>
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        });
    };

    const addNewTask = (newTaskContent) => {
        
        tasks.push({
            content: newTaskContent,  
        });

        render();
    };

    const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            //console.log(newTaskContent);
            if (newTaskContent === "") {
                return;
            };

            addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init ();
}