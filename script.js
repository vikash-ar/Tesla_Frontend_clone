// for navbar 

const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}

document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}




// for scrolling the page
/*
document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelector('section')];

    const destinationIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
    if(destinationIndex >= 0 && destinationIndex < sections.length){
        window.scroll(0, sections[destinationIndex].offsetTop);
    }

    sections.forEach((section, index) => {
        if(window.pageYOffset === section.offsetTop){
            document.lastCentered = index;
        }
    })

    document.lastScrollPosition = window.pageYOffset;
})
*/



// another scrolling page code
/*
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
var height = viewport().height;

$(document).on('wheel', function(e) {
    e.preventDefault();
    $('html, body').stop(true).animate({
      scrollTop: (e.originalEvent.deltaY > 0 ? '+=' : '-=') + $(window).height() + 'px'
    });
});
*/