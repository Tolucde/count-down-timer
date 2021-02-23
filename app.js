const dayel = document.querySelector(".day");
const minel = document.querySelector(".min");
const hrel = document.querySelector(" .hour");
const secel = document.querySelector(" .sec");
const flips = document.querySelectorAll(".flip");



function countdown() {
    const future = new Date();

    const yeard = future.getFullYear();
    const monthd = future.getMonth();
    const dayd = future.getDay();
    const dated = future.getDate();

    const futureDate = new Date(yeard, monthd, dated + 25, 10, 30, 0)
    const t = futureDate - new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    dayel.innerText = days;
    hrel.innerText = hours;
    minel.innerText = minutes;
    secel.innerText = seconds;


};

/*function flipCard(countdown) {
    flips.forEach(flip => {
        flip.style.transform = "rotateX(180deg) translateY(-100%)";
    });
};*/

setInterval(countdown, 1000);