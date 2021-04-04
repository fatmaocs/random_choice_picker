const textarea = document.getElementById("choice_txt");

const choices_area = document.querySelector(".choices");

const choice = document.querySelector(".choice");


textarea.addEventListener("keyup", (e) => {

    create_choices(e.target.value);

    if (e.key === "Enter") {

        setTimeout(() => {

            e.target.value = '';

        }, 10)

        randomSelect();

    }


});

function create_choices(input) {

    const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim());

    choices_area.innerHTML = '';

    choices.forEach(choice => {

        const span = document.createElement('span');
        span.classList.add("choice");
        span.innerText = choice;
        choices_area.appendChild(span);

    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {

        const random_choice = pick_random_choice();

        highlight_choice(random_choice);

        setTimeout(() => {

            unhighligth_choice(random_choice);

        }, 100);

    }, 100);


    setTimeout(() => {

        clearInterval(interval);

        setTimeout(() => {

            const random = pick_random_choice();
            highlight_choice(random);
            console.log(random);


        }, 100);

    }, times * 100);

}

function pick_random_choice() {

    const choices = document.querySelectorAll(".choice");
    return choices[Math.floor(Math.random() * choices.length)];

}

function highlight_choice(random_choice) {

    random_choice.classList.add("highlight");
}

function unhighligth_choice(random_choice) {
    random_choice.classList.remove("highlight");

}