function changeBackColor() {
    var containerMain = document.getElementById("containerMain");
    var container4 = document.getElementById("container4");
    var container3 = document.getElementById("container3");
    var container2 = document.getElementById("container2");
    var container1 = document.getElementById("container1");

    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return "rgb(" + red + ","+green+","+blue+")"
    }

    containerMain.style.backgroundColor = getRandomColor();
    container4.style.backgroundColor = getRandomColor();
    container3.style.backgroundColor = getRandomColor();
    container2.style.backgroundColor = getRandomColor();
    container1.style.backgroundColor = getRandomColor();
}