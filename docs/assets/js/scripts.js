$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

function closeNav() {
    $("#sidebar").removeClass("active");
};

var typed3 = new Typed(document.getElementsByClassName('#typed'), {
    strings: ['Data scientist','Chercheur', 'Enseignant', 'Cuisinier' ,'Photographe', 'Basketeur'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1500,
    smartBackspace: true, 
    loop: true
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var waypoint = new Waypoint({
    element: document.getElementById('Competences'),
    handler: function (direction) {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });

    },
    offset: '80%'
})

