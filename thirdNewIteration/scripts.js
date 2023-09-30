// Function to fetch and display projects on the homepage
function displayProjects() {
    const projectList = document.getElementById('project-list');
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `projects.html#${project.id}`;
                link.textContent = project.name;
                listItem.appendChild(link);
                projectList.appendChild(listItem);
            });

            // Call the function to dynamically create project pages
            createProjectPages(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to create project detail pages dynamically
function createProjectPages(projects) {
    projects.forEach(project => {
        const projectPage = document.createElement('html');
        projectPage.innerHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="styles.css">
                <title>${project.name} Details</title>
            </head>
            <body>
                <h1>${project.name}</h1>
                <p>${project.description}</p>
                <img src="images/${project.image}" alt="${project.name} Image">
                <a href="index.html">Back to Homepage</a>
            </body>
            </html>
        `;

        // Save the dynamically created HTML page as a .html file
        const projectPageBlob = new Blob([projectPage.outerHTML], { type: 'text/html' });
        const projectPageURL = URL.createObjectURL(projectPageBlob);

        // Create a link to download the HTML page
        const downloadLink = document.createElement('a');
        downloadLink.href = projectPageURL;
        downloadLink.download = `${project.id}.html`;
        downloadLink.textContent = `Download ${project.name} Page`;

        // Add the download link to the project list on the homepage
        const listItem = document.querySelector(`a[href="projects.html#${project.id}"]`).parentNode;
        listItem.appendChild(downloadLink);
    });
}

// Call the function to display projects on the homepage
displayProjects();
