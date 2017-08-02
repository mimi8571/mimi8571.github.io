var modal = document.getElementById('modalBox');    //get modal/popup container
var open = document.getElementsByClassName("project_modal");	//get container to open modal
var close = document.getElementsByClassName("close_modal")[0];    //get button to close modal

//open modal
open.onclick = function() {
    modal.style.display = "block";
}

//close modal by X-button
close.onclick = function() {
    modal.style.display = "none";
}

//close modal by clicking outside window
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//close modal by escape key
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modalClose();
    }
});



/*
//Click X to close modal box
function modalClose() {
    if (location.hash == '#modalBox') {
        location.hash = '';
    }
}

//Escape key to exit
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modalClose();
    }
});

//Does not close if click on modal container
var modal = document.querySelector('#modalBox');
modal.addEventListener('click', function(e) {
    modalClose();
}, false);

modal.children[0].addEventListener('click', function(e) {
    e.stopPropagation();
}, false);
*/
