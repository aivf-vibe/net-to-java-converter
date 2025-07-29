

// DOM Elements
const githubForm = document.getElementById('githubForm');
const githubUrl = document.getElementById('githubUrl');
const loadingModal = document.getElementById('loadingModal');
const resultModal = document.getElementById('resultModal');
const resultDetails = document.getElementById('resultDetails');
const viewRepoBtn = document.getElementById('viewRepoBtn');
const closeBtn = document.querySelector('.close');

// Form submission handler
githubForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const url = githubUrl.value.trim();
    
    if (!isValidGitHubUrl(url)) {
        alert('Please enter a valid GitHub repository URL');
        return;
    }
    
    // Show loading modal
    loadingModal.style.display = 'block';
    
    try {
        // Simulate conversion process
        const result = await convertDotNetToJava(url);
        
        // Hide loading modal
        loadingModal.style.display = 'none';
        
        // Show result modal
        showResultModal(result);
        
    } catch (error) {
        loadingModal.style.display = 'none';
        alert('Conversion failed: ' + error.message);
    }
});

// Validate GitHub URL
function isValidGitHubUrl(url) {
    const githubPattern = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-_.]+$/;
    return githubPattern.test(url);
}

// Actual conversion process using backend API
async function convertDotNetToJava(githubUrl) {
    try {
        const response = await fetch('/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ github_url: githubUrl })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }
        
        return {
            originalRepo: data.original_repo,
            newRepo: data.new_repo,
            repoName: data.repo_name,
            filesConverted: data.files_converted,
            linesOfCode: data.lines_of_code,
            frameworks: data.frameworks,
            status: data.status
        };
    } catch (error) {
        throw new Error('Conversion failed: ' + error.message);
    }
}

// Extract repository name from GitHub URL
function extractRepoName(url) {
    const parts = url.split('/');
    return parts[parts.length - 1];
}

// Show result modal with conversion details
function showResultModal(result) {
    resultDetails.innerHTML = `
        <div class="result-info">
            <p><strong>Original Repository:</strong> ${result.originalRepo}</p>
            <p><strong>New Repository:</strong> <a href="${result.newRepo}" target="_blank">${result.newRepo}</a></p>
            <p><strong>Files Converted:</strong> ${result.filesConverted}</p>
            <p><strong>Lines of Code:</strong> ${result.linesOfCode.toLocaleString()}</p>
            <p><strong>Java Frameworks Used:</strong> ${result.frameworks.join(', ')}</p>
        </div>
    `;
    
    resultModal.style.display = 'block';
    
    // Set up view repository button
    viewRepoBtn.onclick = () => {
        window.open(result.newRepo, '_blank');
    };
}

// Close modals
closeBtn.onclick = () => {
    resultModal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === loadingModal) {
        loadingModal.style.display = 'none';
    }
    if (event.target === resultModal) {
        resultModal.style.display = 'none';
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += Math.random() * 10;
            if (width > 100) width = 100;
            progressFill.style.width = width + '%';
        }
    }, 200);
}

// Add some additional styling for result modal
const additionalStyles = `
    .result-info {
        text-align: left;
        margin: 1rem 0;
    }
    
    .result-info p {
        margin: 0.5rem 0;
        font-size: 0.9rem;
    }
    
    .result-info a {
        color: #2563eb;
        text-decoration: none;
    }
    
    .result-info a:hover {
        text-decoration: underline;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Add form validation feedback
githubUrl.addEventListener('input', (e) => {
    const url = e.target.value;
    if (url && !isValidGitHubUrl(url)) {
        e.target.style.borderColor = '#ef4444';
    } else {
        e.target.style.borderColor = '';
    }
});


