// GitHub username
const username = 'aysedeniz09'; // replace with your GitHub username

// API URL
const apiUrl = `https://api.github.com/users/${username}/repos`;

// Function to fetch repositories
async function fetchRepositories() {
    try {
        // Fetch the repositories without using an authorization header
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const repos = await response.json();
        const repoContainer = document.getElementById('repo-container');

        if (!repoContainer) {
            console.error('Container element not found');
            return;
        }

        repoContainer.innerHTML = ''; // Clear any existing content

        // Define language colors
        const languageColors = {
            "JavaScript": "#f1e05a",
            "Python": "#3572A5",
            "HTML": "#e34c26",
            "CSS": "#563d7c",
            "Jupyter Notebook": "#DA5B0B",
            "R": "#198CE7"
        };

        repos.forEach(repo => {
            const languageColor = languageColors[repo.language] || '#cccccc';

            // Create repository card
            const repoCard = document.createElement('div');
            repoCard.classList.add('repository-card');

            // Set inner HTML for each repository card
            repoCard.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <div class="repo-info">
                    ${repo.language ? `<span class="repo-language" style="color: ${languageColor};">&#9679;</span> ${repo.language}` : ''}
                </div>
                <div class="badges">
                    <span class="badge">⭐ ${repo.stargazers_count || 0}</span>
                    <span class="badge">🍴 ${repo.forks_count || 0}</span>
                    <span class="badge">🚨 ${repo.open_issues_count || 0}</span>
                </div>
            `;

            // Append the repository card to the container
            repoContainer.appendChild(repoCard);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// Initialize fetching of repositories
fetchRepositories();
