function clock() {
    const hoursArrow = document.querySelector('.hours__hour');
    const minutesArrow = document.querySelector('.minutes__minute');
    const secondsArrow = document.querySelector('.seconds__second');

    const deg = 6;

    setInterval(() => {
        const day = new Date();

        const hours = day.getHours() * 30;
        const minutes = day.getMinutes() * deg;
        const seconds = day.getSeconds() * deg;

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`

    }, 0);
}

clock();