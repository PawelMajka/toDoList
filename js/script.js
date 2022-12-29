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
                ${task.content}
            </li>
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            //console.log(newTaskContent);

            if (newTaskContent === "") {
                return;
            };

            tasks.push({
                content: newTaskContent,  
            });

            render();
        });
    };

    init ();
}