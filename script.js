// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect for the introduction
function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animate skills progress bars
function animateSkills() {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        const progress = skill.getAttribute('data-progress');
        skill.style.width = progress;
    });
}

// Toggle project details
function toggleProjectDetails() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const title = project.querySelector('h3');
        const details = project.querySelector('.project-details');
        title.addEventListener('click', () => {
            details.classList.toggle('show');
        });
    });
}

// Initialize animations when the page loads
window.addEventListener('load', () => {
    const introText = "Greetings, welcome to my page. My name is Daksh Kaul, and I am an aspiring software developer/writer/musician specializing in back-end development.";
    const introElement = document.getElementById('intro-text');
    typeWriter(introElement, introText, 50);

    animateSkills();
    toggleProjectDetails();
});

// Intersection Observer for section animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

