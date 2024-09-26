let header = document.querySelector('header');
let menu = document.querySelector('#manu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};



 




var typingEfftect = new Typed(".typedText", { 
    strings: ["Graphic Designer.","Web designer.","Web Developer.","Digital Marketer."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});



//Dark mode


const darkmode = document.querySelector('#darkmode');

// Function to toggle dark mode
const toggleDarkMode = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem('darkmode', 'enabled'); 
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem('darkmode', 'disabled'); 
    }
};

// Add event listener to the button
darkmode.onclick = toggleDarkMode;

// Check localStorage on page load
const currentMode = localStorage.getItem('darkmode');
if (currentMode === 'enabled') {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
}


//scrooll Animacion

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});


sr.reveal(".social_icon", {});
sr.reveal(".featured-name", {delay: 200 });
sr.reveal(".hello", {delay: 200 });
sr.reveal(".featured-text-info", {delay: 200 });
sr.reveal(".featured-image", {delay: 200 });
sr.reveal(".heading", {delay: 200 });
sr.reveal(".services-content", {delay: 200 });

//about animacion

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-container", {delay:200 });
srLeft.reveal(".Contact-form", {delay:200 });

//skills Animacion

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".work-grid", {delay:200 });
srRight.reveal(".skill", {delay:200 });


//Work//


document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            workItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});





