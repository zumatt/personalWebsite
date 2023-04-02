// load the project data from a JSON file
renderProjectLinks();

function renderProjectLinks() {
    fetch('assets/projects.json')
      .then(response => response.json())
      .then(data => {
        const projectsDiv = document.getElementById('projects');
        data.forEach(project => {
          const projectDiv = document.createElement('div');
          projectDiv.classList.add('project');
  
          const title = document.createElement('h2');
          title.textContent = project.title;
          projectDiv.appendChild(title);
  
          const description = document.createElement('p');
          description.textContent = project.description;
          projectDiv.appendChild(description);
  
          const image = document.createElement('img');
          image.src = project.image;
          projectDiv.appendChild(image);
  
          // create a link to the project page
          const link = document.createElement('a');
          link.href = `project.html?id=${project.id}`;
          link.textContent = 'View project';
          projectDiv.appendChild(link);
  
          projectsDiv.appendChild(projectDiv);
        });
        
        // add a click event listener to each project link
        const projectLinks = document.querySelectorAll('.project a');
        projectLinks.forEach(link => {
          link.addEventListener('click', event => {
            console.log("CLICK!");
            event.preventDefault();
            // parse project id from query string
            const searchParams = new URLSearchParams(window.location.search);
            const projectId = searchParams.get('id');

            // find project with matching id
            const project = data.find(p => p.id === projectId);

            // display project information
            if (project) {
            const title = document.getElementById('title');
            title.textContent = project.title;

            const description = document.getElementById('description');
            description.textContent = project.description;

            const image = document.getElementById('image');
            image.src = project.image;
            } else {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Project not found';
            document.body.appendChild(errorMessage);
            };
            renderProjectPage(projectId);
          });
        });
      })
      .catch(error => {
        console.error('Error loading project data', error);
      });
  }
  
  function renderProjectPage(projectId) {
    fetch('assets/projects.json')
      .then(response => response.json())
      .then(data => {
        const project = data.find(p => p.id === projectId);
        if (project) {
          const pageTitle = document.getElementById('page-title');
          pageTitle.textContent = project.title;
  
          const pageContent = document.getElementById('page-content');
          pageContent.innerHTML = `
            <h1>${project.title}</h1>
            <p>${project.description}</p>
            <img src="${project.image}">
          `;
        } else {
          console.error(`Project with id ${projectId} not found`);
        }
      })
      .catch(error => {
        console.error('Error loading project data', error);
      });
  }