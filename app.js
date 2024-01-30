function changeImage(newSrc) {
    var img = document.getElementById('calculatorImage');
    img.style.transition = "all 0.3s ease";
    img.style.opacity = 0;

    setTimeout(function () {
        img.src = newSrc;
        img.style.opacity = 1;
    }, 100);
}

function changeColorImage(newSrc) {
    var img = document.getElementById('colorImage');
    img.style.transition = "all 0.3s ease";
    img.style.opacity = 0;

    setTimeout(function () {
        img.src = newSrc;
        img.style.opacity = 1;
    }, 100);
}

function changeRamadanImage(newSrc) {
    var img = document.getElementById("ramadanImage");
    img.style.transition = "all 0.3s ease";
    img.style.opacity = 0

    setTimeout(function () {
        img.src = newSrc;
        img.style.opacity = 1
    }, 100)
}


function changePassImage(newSrc) {
    var img = document.getElementById("passwordImage");
    img.style.transition = "all 0.3s ease";
    img.style.opacity = 0

    setTimeout(function() {
        img.src = newSrc;
        img.style.opacity = 1;
    }, 100)
}

function changeAgeImage(newSrc) {
    var img = document.getElementById("ageImage");
    img.style.transition = "all 0.3s ease";
    img.style.opacity = 0

    setTimeout(function() {
        img.src = newSrc;
        img.style.opacity = 1;
    }, 100)
}

function changeFbImage(newSrc) {
    var img = document.getElementById("fbImage");
    img.style.transition = "all 0.3s ease";
    img.style.opacity = 0

    setTimeout(function() {
        img.src = newSrc;
        img.style.opacity = 1;
    }, 100)
}