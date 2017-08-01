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

