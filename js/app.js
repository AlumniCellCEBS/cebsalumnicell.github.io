const alumniData = [
    { name: "Dr. Ananya Sharma", batch: "2020", field: "Chemical Sciences", role: "Postdoctoral Researcher" },
    { name: "Rohan Verma", batch: "2021", field: "Physical Sciences", role: "Data Scientist" },
    { name: "Priya Nair", batch: "2022", field: "Mathematical Sciences", role: "PhD Scholar" }
];

const grid = document.getElementById('directoryGrid');
const searchInput = document.getElementById('searchInput');

// Array of your custom pin colors to make the board look vibrant
const pinColors = ['pin--coral', 'pin--sky', 'pin--teal', 'pin--violet', 'pin--marigold'];

function renderDirectory(data) {
    grid.innerHTML = ''; 
    data.forEach((person, index) => {
        // Pick a color in sequence for each person
        const colorClass = pinColors[index % pinColors.length];
        
        const card = document.createElement('div');
        // Apply your custom 'pin' class and the color class
        card.className = `pin ${colorClass}`;
        card.innerHTML = `
            <h3>${person.name}</h3>
            <p style="font-weight: 600; color: var(--ink); margin-bottom: 4px;">Class of ${person.batch}</p>
            <p>${person.field}</p>
            <p style="font-size: 0.8rem; margin-top: 10px;">Role: ${person.role}</p>
        `;
        grid.appendChild(card);
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = alumniData.filter(person => 
        person.name.toLowerCase().includes(query) || person.field.toLowerCase().includes(query)
    );
    renderDirectory(filtered);
});

renderDirectory(alumniData);
