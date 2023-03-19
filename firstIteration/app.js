const databaseId = 'YOUR_DATABASE_ID';
const apiUrl = `https://api.airtable.com/v0/${databaseId}/Projects`;

fetch(apiUrl, {
	headers: {
		Authorization: 'Bearer YOUR_API_KEY'
	}
})
	.then(response => response.json())
	.then(data => {
		const projectsTable = document.getElementById('projects-table');

		data.records.forEach(project => {
			const projectFields = project.fields;

			const projectBox = document.createElement('tr');
			projectBox.innerHTML = `
				<td><img src="${projectFields.Image[0].url}" alt="${projectFields.Title}" /></td>
				<td>
					<h2>${projectFields.Title}</h2>
					<p>${projectFields.Description}</p>
				</td>
				<td>
					<ul>
						${projectFields.Tags.map(tag => `<li>${tag}</li>`).join('')}
					</ul>
				</td>
			`;

			projectsTable.appendChild(projectBox);
		});
	})
	.catch(error => console.log(error));