var content = document.getElementById("content");
var postBackground = document.getElementById("postBackground");
var postButton = document.getElementById("post");


function setBackground() {
    postBackground.style.backgroundImage = "url(" + event.target.src + ")";
}

function removeBackground() {
    postBackground.style.backgroundImage = "none"
}

function chooseBackgroundColor() {
    postBackground.style.backgroundColor = event.target.value;
}

function changeColor() {
    postBackground.style.color = event.target.value;
}

function changeStyle() {
    var parentListItem = event.target.parentNode;
    var type = event.target.name;
    console.log(postBackground.style.textDecoration);

    if (type === "bold") {
        if (postBackground.style.fontWeight === "bold") {
            postBackground.style.fontWeight = "normal"
            parentListItem.style.backgroundColor = "white"
        }
        else {
            postBackground.style.fontWeight = "bold"
            parentListItem.style.backgroundColor = "rgb(222, 222, 222)"
        }
    }

    if (type === "underline") {
        if (postBackground.style.textDecoration === "underline") {
            postBackground.style.textDecoration = "none"
            parentListItem.style.backgroundColor = "white"
        }
        else {
            postBackground.style.textDecoration = "underline"
            parentListItem.style.backgroundColor = "rgb(222, 222, 222)"
        }
    }

    if (type === "italic") {
        if (postBackground.style.fontStyle === "italic") {
            postBackground.style.fontStyle = "normal"
            parentListItem.style.backgroundColor = "white"
        }
        else {
            postBackground.style.fontStyle = "italic"
            parentListItem.style.backgroundColor = "rgb(222, 222, 222)"
        }
    }

    var typeByID = event.target.id;

    if (typeByID === "textTransform") {
        if (postBackground.style.textTransform === "uppercase") {
            postBackground.style.textTransform = "none"
            event.target.style.backgroundColor = "white"
        }
        else {
            postBackground.style.textTransform = "uppercase"
            event.target.style.backgroundColor = "rgb(222, 222, 222)"
        }
    }

    var typeByClass = event.target.tagName;

    if (typeByClass === "I") {
        if (postBackground.style.textAlign === "center") {
            postBackground.style.textAlign = "left";
            parentListItem.style.backgroundColor = "white"
        }
        else {
            postBackground.style.textAlign = "center";
            parentListItem.style.backgroundColor = "rgb(222, 222, 222)"
        }
    }
}

function increaseFont() {
    var currentFontSize = window.getComputedStyle(postBackground).fontSize;
    console.log("currentFontSize", currentFontSize);
    var current = parseInt(currentFontSize);
    var updatedFontSize = current + 2;
    console.log("updatedFontSize", updatedFontSize);
    postBackground.style.fontSize = updatedFontSize + 'px', 'important';
    // postBackground.style.setProperty('font-size', updatedFontSize + 'px', 'important');
    // console.log("updatedFontSize", updatedFontSize);
}

function decreaseFont() {
    var currentFontSize = window.getComputedStyle(postBackground).fontSize;
    console.log("currentFontSize", currentFontSize);
    var current = parseInt(currentFontSize);
    var updatedFontSize = current - 2;
    console.log("updatedFontSize", updatedFontSize);
    postBackground.style.fontSize = updatedFontSize + 'px', 'important';
    // postBackground.style.setProperty('font-size', updatedFontSize + 'px', 'important');
    // console.log("updatedFontSize", updatedFontSize);
}

function clearText() {
    postBackground.value = "";
}

function allowPost() {
    if (postBackground.value === "") {
        postButton.style.backgroundColor = "#e4e6eb";
        postButton.style.color = "#c5c5c5"
    } else {
        postButton.style.backgroundColor = "#0866ff";
        postButton.style.color = "#fff";
    }
}

var createPostHeading = document.getElementById("createPost");
var backgroundStyles = document.getElementById("backgroundStyles");
var textStyles = document.getElementById("textStyles");
var feedback = document.getElementById("feedback");
// var postButton (definined on top)
var friends = document.getElementById("friends");
var postTime = document.getElementById("post-time");

function post() { 
    if(postBackground.value === "") {
        createPostHeading.style.display = "block";
        backgroundStyles.style.display = "flex";
        textStyles.style.display = "flex";
        postButton.style.display = "block";
        friends.style.display = "flex";
        postTime.style.document = "none";
    }
    else {
        createPostHeading.style.display = "none";
        backgroundStyles.style.display = "none";
        textStyles.style.display = "none";
        postButton.style.display = "none";
        feedback.style.display = "flex";
        friends.style.display = "none";
        postTime.style.display = "flex";
        postBackground.setAttribute('readonly', true);
    }
}

var like = document.getElementById("like");

function likePost() {
    var typeByClass = event.target.id;

    if(typeByClass === "like") {
        if(like.style.color === "blue") {
            like.style.color = "rgb(113, 113, 113)";
        }
        else {
            like.style.color = "blue"
        }
    }
}
