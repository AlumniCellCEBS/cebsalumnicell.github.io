// 1. Dummy Data (No Firebase)
const alumniData = [
    { name: "Dr. Ananya Sharma", batch: "2020", field: "Chemical Sciences", role: "Postdoctoral Researcher" },
    { name: "Rohan Verma", batch: "2021", field: "Physical Sciences", role: "Data Scientist" },
    { name: "Priya Nair", batch: "2022", field: "Mathematical Sciences", role: "PhD Scholar" },
    { name: "Aarav Mehta", batch: "2020", field: "Biological Sciences", role: "Biotech Consultant" },
    { name: "Sneha Kulkarni", batch: "2023", field: "Chemical Sciences", role: "Research Associate" }
];

const grid = document.getElementById('directoryGrid');
const searchInput = document.getElementById('searchInput');

// Match these exactly to the classes in your CSS
const pinColors = ['pin--coral', 'pin--sky', 'pin--teal', 'pin--violet', 'pin--marigold'];

// 2. Render Function
function renderDirectory(data) {
    grid.innerHTML = ''; 
    
    if (data.length === 0) {
        grid.innerHTML = '<p style="color: var(--ink-faint); grid-column: 1 / -1;">No alumni found matching your search.</p>';
        return;
    }

    data.forEach((person, index) => {
        const colorClass = pinColors[index % pinColors.length];
        const card = document.createElement('div');
        
        card.className = `pin ${colorClass}`;
        card.innerHTML = `
            <h3>${person.name}</h3>
            <p style="font-weight: 600; color: var(--ink); margin-bottom: 4px;">Class of ${person.batch}</p>
            <p>${person.field}</p>
            <p style="font-size: 0.82rem; margin-top: 12px; font-weight: 600;">${person.role}</p>
        `;
        grid.appendChild(card);
    });
}

// 3. Search Logic
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = alumniData.filter(person => 
        person.name.toLowerCase().includes(query) || 
        person.field.toLowerCase().includes(query)
    );
    renderDirectory(filtered);
});

// 4. Initial Load
renderDirectory(alumniData);
