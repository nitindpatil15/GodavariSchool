// ulhas Patil Popup
// Get the modal, button, and close button elements
var modal = document.getElementById("myModal");
var btn = document.getElementById("showModalBtn");
var span = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('no-scroll'); // Add no-scroll class to body
}

// When the user clicks on the close button (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
    }
}

// Varsha Patil popup

// Get the modal, button, and close button elements
var mymodal = document.getElementById("Modal");
var btn1 = document.getElementById("varsha");
var span1 = document.getElementById("closeBtn");

// When the user clicks the button, open the modal
btn1.onclick = function() {
    mymodal.style.display = "block";
    document.body.classList.add('no-scroll'); // Add no-scroll class to body
}

// When the user clicks on the close button (x), close the modal
span1.onclick = function() {
    mymodal.style.display = "none";
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        mymodal.style.display = "none";
        document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
    }
}

// Nilima popup

// Get the modal, button, and close button elements
var newmodal = document.getElementById("newModal");
var btn2 = document.getElementById("nilima");
var span2 = document.getElementById("close");

// When the user clicks the button, open the modal
btn2.onclick = function() {
    newmodal.style.display = "block";
    document.body.classList.add('no-scroll'); // Add no-scroll class to body
}

// When the user clicks on the close button (x), close the modal
span2.onclick = function() {
    newmodal.style.display = "none";
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == newmodal) {
        newmodal.style.display = "none";
        document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
    }
}
