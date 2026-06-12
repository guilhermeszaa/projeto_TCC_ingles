const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

let selectedDays = [];

const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    // Dias do mês anterior
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Dias do mês atual
    for (let i = 1; i <= lastDateofMonth; i++) {

        let isSelected = selectedDays.includes(i) ? "active" : "";

        liTag += `<li class="${isSelected}">${i}</li>`;
    }

    // Dias do próximo mês
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} de ${currYear}`;

    daysTag.innerHTML = liTag;

    document.querySelectorAll(".days li:not(.inactive)").forEach(day => {

        day.addEventListener("click", () => {

            const dayNumber = parseInt(day.textContent);

            if (selectedDays.includes(dayNumber)) {
                selectedDays = selectedDays.filter(d => d !== dayNumber);
            } else {
                selectedDays.push(dayNumber);
            }

            renderCalendar();
        });
    });
};

renderCalendar();

prevNextIcon.forEach(icon => {

    icon.addEventListener("click", () => {

        currMonth = icon.id === "prev" ?
            currMonth - 1 :
            currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, 1);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }

        renderCalendar();
    });

});
