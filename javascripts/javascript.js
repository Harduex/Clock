function setDate() {
    var time = new Date();

    var seconds = time.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 180;
    document.querySelector('.seconds-container').style.transform = 'rotate(' + secondsDegrees + 'deg)';

    var mins = time.getMinutes();
    var minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 180;
    document.querySelector('.minutes-container').style.transform = 'rotate(' + minsDegrees + 'deg)';

    var hour = time.getHours();
    var hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 180;
    document.querySelector('.hours-container').style.transform = 'rotate(' + hourDegrees + 'deg)';
}
setInterval(setDate, 1000);
setDate();