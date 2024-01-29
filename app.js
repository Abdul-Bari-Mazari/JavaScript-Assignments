function changeImage(newSrc) {
    var img = document.getElementById('calculatorMainImage'); // Get the image element by its ID
    
    img.style.transition = "all 0.3s ease"; // Set a smooth transition effect for all style changes over 0.3 seconds

    img.style.opacity = 0; // Set the image opacity to 0, making it invisible with a smooth transition

    setTimeout(function () { // Wait for a brief moment to allow the transition effect to be applied
        img.src = newSrc; // Change the image source to the new source provided
        img.style.opacity = 1; // Set the image opacity back to 1, making it visible again with a smooth transition
    }, 100); // Wait for 100 milliseconds (0.1 seconds) before changing the image source and restoring its visibility
}

function changeColorImage(newSrc) {
    var img = document.getElementById('colorMainImage'); // Get the image element by its ID
    
    img.style.transition = "all 0.3s ease"; // Set a smooth transition effect for all style changes over 0.3 seconds

    img.style.opacity = 0; // Set the image opacity to 0, making it invisible with a smooth transition

    setTimeout(function () { // Wait for a brief moment to allow the transition effect to be applied
        img.src = newSrc; // Change the image source to the new source provided
        img.style.opacity = 1; // Set the image opacity back to 1, making it visible again with a smooth transition
    }, 100); // Wait for 100 milliseconds (0.1 seconds) before changing the image source and restoring its visibility
}


