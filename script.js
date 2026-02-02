// Utility function to parse CSV data
function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
        const values = [];
        let inQuotes = false;
        let currentValue = '';
        
        for (let char of line) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(currentValue.trim());
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        values.push(currentValue.trim());
        
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index] || '';
        });
        return obj;
    });
}

// Load data from Google Sheets
async function loadDataFromSheet(url) {
    try {
        const response = await fetch(url);
        const csvText = await response.text();
        return parseCSV(csvText);
    } catch (error) {
        console.error('Error loading data:', error);
        return [];
    }
}

// Format date for display
function formatDate(dateStr) {
    if (!dateStr || dateStr.toLowerCase() === 'present') return 'Present';
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const parts = dateStr.split(' ');
    if (parts.length === 2) {
        return `${parts[0]} ${parts[1]}`;
    }
    return dateStr;
}

// Update last updated time
function updateLastUpdated() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('last-updated').textContent = 
        now.toLocaleDateString('en-US', options);
}

// Populate Profile Section
function populateProfile(profileData) {
    if (profileData.length > 0) {
        const profile = profileData[0];
        
        // Update hero section
        document.getElementById('hero-name').textContent = 
            `${profile['First Name']} ${profile['Last Name']}`;
        document.getElementById('hero-role').textContent = profile['Current Role'];
        document.getElementById('hero-summary').textContent = profile['Summary'];
        
        // Update about section
        document.getElementById('summary-text').textContent = profile['Summary'];
        document.getElementById('phone-number').textContent = profile['Phone'];
        document.getElementById('email-address').textContent = profile['Email'];
        document.getElementById('contact-email').textContent = profile['Email'];
        document.getElementById('contact-phone').textContent = profile['Phone'];
        
        // Update links
        const linkedinLink = document.getElementById('linkedin-link');
        const githubLink = document.getElementById('github-link');
        const portfolioLink = document.getElementById('portfolio-link');
        const emailLink = document.getElementById('email-link');
        const contactLinkedin = document.getElementById('contact-linkedin');
        
        if (profile['LinkedIn']) {
            linkedinLink.href = profile['LinkedIn'];
            contactLinkedin.href = profile['LinkedIn'];
        }
        
        if (profile['GitHub']) {
            githubLink.href = profile['GitHub'];
        }
        
        if (profile['Portfolio']) {
            portfolioLink.href = profile['Portfolio'];
        }
        
        if (profile['Email']) {
            emailLink.href = `mailto:${profile['Email']}`;
        }
    }
}

// Populate Skills Section
function populateSkills(skillsData) {
    const skillsContainer = document.getElementById('skills-container');
    
    // Group skills by category
    const skillsByCategory = {};
    
    skillsData.forEach(skill => {
        const category = skill['Category'];
        const skills = skill['Skills'].split(',').map(s => s.trim());
        
        if (!skillsByCategory[category]) {
            skillsByCategory[category] = [];
        }
        
        skillsByCategory[category].push(...skills);
    });
    
    // Create skill categories
    Object.entries(skillsByCategory).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        
        const skillTagsDiv = document.createElement('div');
        skillTagsDiv.className = 'skill-tags';
        
        skills.forEach(skill => {
            if (skill) {
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill;
                skillTagsDiv.appendChild(skillTag);
            }
        });
        
        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(skillTagsDiv);
        skillsContainer.appendChild(categoryDiv);
    });
}

// Populate Experience Section
function populateExperience(experienceData) {
    const experienceContainer = document.getElementById('experience-container');
    
    experienceData.forEach((exp, index) => {
        const experienceItem = document.createElement('div');
        experienceItem.className = `experience-item ${index % 2 === 0 ? 'left' : 'right'}`;
        
        const experienceContent = document.createElement('div');
        experienceContent.className = 'experience-content';
        
        const role = document.createElement('h3');
        role.textContent = exp['Role'];
        
        const company = document.createElement('p');
        company.className = 'company';
        company.textContent = `${exp['Company']} | ${exp['Location']}`;
        
        const duration = document.createElement('span');
        duration.className = 'duration';
        duration.textContent = `${formatDate(exp['Start Date'])} - ${formatDate(exp['End Date'])}`;
        
        const responsibilities = document.createElement('p');
        responsibilities.textContent = exp['Responsibilities'];
        
        const environment = document.createElement('p');
        environment.innerHTML = `<strong>Technologies:</strong> ${exp['Environment']}`;
        environment.style.marginTop = '1rem';
        environment.style.color = '#666';
        
        experienceContent.appendChild(role);
        experienceContent.appendChild(company);
        experienceContent.appendChild(duration);
        experienceContent.appendChild(responsibilities);
        experienceContent.appendChild(environment);
        experienceItem.appendChild(experienceContent);
        
        experienceContainer.appendChild(experienceItem);
    });
}

// Populate Education Section
function populateEducation(educationData) {
    const educationContainer = document.getElementById('education-container');
    
    educationData.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        
        const degree = document.createElement('h3');
        degree.textContent = edu['Degree'];
        
        const university = document.createElement('p');
        university.className = 'university';
        university.textContent = `${edu['University']}, ${edu['Location']}`;
        
        const duration = document.createElement('p');
        duration.textContent = `${formatDate(edu['Start Date'])} - ${formatDate(edu['End Date'])}`;
        
        const gpa = document.createElement('p');
        gpa.innerHTML = `<strong>GPA:</strong> ${edu['GPA']}`;
        
        const activities = document.createElement('p');
        activities.innerHTML = `<strong>Activities:</strong> ${edu['Activities']}`;
        
        const achievements = document.createElement('p');
        achievements.innerHTML = `<strong>Achievements:</strong> ${edu['Achievements']}`;
        
        educationItem.appendChild(degree);
        educationItem.appendChild(university);
        educationItem.appendChild(duration);
        educationItem.appendChild(gpa);
        educationItem.appendChild(activities);
        educationItem.appendChild(achievements);
        
        educationContainer.appendChild(educationItem);
    });
}

// Main initialization function
async function initializePortfolio() {
    try {
        console.log('Loading portfolio data from Google Sheets...');
        
        // Load all data in parallel
        const [profileData, skillsData, experienceData, educationData] = await Promise.all([
            loadDataFromSheet(PROFILE_URL),
            loadDataFromSheet(SKILLS_URL),
            loadDataFromSheet(EXPERIENCE_URL),
            loadDataFromSheet(EDUCATION_URL)
        ]);
        
        // Populate sections
        populateProfile(profileData);
        populateSkills(skillsData);
        populateExperience(experienceData);
        populateEducation(educationData);
        
        // Update last updated time
        updateLastUpdated();
        
        // Update current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        console.log('Portfolio data loaded successfully!');
        
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        alert('Error loading portfolio data. Please try refreshing the page.');
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
    
    // Initialize portfolio
    initializePortfolio();
    
    // Auto-refresh every 5 minutes (optional)
    // setInterval(initializePortfolio, 5 * 60 * 1000);
});