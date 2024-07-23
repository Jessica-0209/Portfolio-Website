// Sample project data
// Sample project data
const projects = [
    { title: "B-Lock: A Blockchain-based Evault", description: "Develop a secure, decentralized, and tamper-proof digital vault for storing and managing documents." },
    { title: "Ecommerce Website", description: "Developed an Ecommerce website using XAMPP on a local server. For the frontend, we used HTML and CSS." }
];

// Technical skills
const technicalSkills = [
    "Data Structures", "Java", "Python", "SQL", "C", "HTML", "CSS", "JavaScript", "React Js", "Node Js"
];

// Soft skills
const softSkills = [
    "Communication", "Teamwork", "Problem-Solving", "Adaptability", "Crtical Thinking"
];

// Create project items
function createProjectItems() {
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {  // Ensure the grid exists before attempting to add items
        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectGrid.appendChild(projectItem);
        });
    }
}

// Create technical skill items
function createSkillItems() {
    const technicalSkillsContainer = document.querySelector('.technical-skills');
    technicalSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <h3>${skill}</h3>
        `;
        technicalSkillsContainer.appendChild(skillItem);
    });

    const softSkillsContainer = document.querySelector('.soft-skills');
    softSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <h3>${skill}</h3>
        `;
        softSkillsContainer.appendChild(skillItem);
    });
}
// Handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message!');
    event.target.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createProjectItems();
    createSkillItems();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
});
