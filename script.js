function getData(event) {
    event.preventDefault()
   
    
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    let submit = document.getElementById("submit").value
 
    console.log(name, email, phone, subject, message, submit);
    alert("berhasil input data")

let projectForm = document.getElementById('projectForm');
let projectList = document.getElementById('projectList');

let projects = [];

projectForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("berhasil input data")


  let startDate = document.getElementById('startDate').value;
  let endDate = document.getElementById('endDate').value;
  let description = document.getElementById('description').value;
  let name = document.getElementById('projectName').value;
  let imageFile = document.getElementById('imageUpload').files[0];
  console.log(startDate, endDate, description);
  

  // Ambil teknologi yang dicentang
  let checkedTechs = Array.from(document.querySelectorAll('.checkbox-group input:checked')).map(cb => cb.value);

  // Validasi upload gambar
  const reader = new FileReader();
  reader.onload = function() {
    const imageUrl = reader.result;

    let newProject = {
      name,
      startDate,
      endDate,
      description,
      technologies: checkedTechs,
      imageUrl
    };

    projects.push(newProject);
    renderProjects();
    projectForm.reset();
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  }
});

// Render projects
function renderProjects() {
  projectList.innerHTML = '';

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
      <img src="${project.imageUrl}" alt="${project.name}">
      <h3>${project.name} - ${new Date(project.endDate).getFullYear()}</h3>
      <p>Durasi: ${countDuration(project.startDate, project.endDate)}</p>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.technologies.join(', ')}</p>
      <div class="card-buttons">
        <button onclick="editProject(${index})">Edit</button>
        <button onclick="deleteProject(${index})">Delete</button>
      </div>
    `;
    projectList.appendChild(card);
  });
}

// Hitung durasi
function countDuration(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate - startDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const months = Math.floor(diffDays / 30);

  return months > 0 ? `${months} bulan` : `${diffDays} hari`;
}

// Hapus project
function deleteProject(index) {
  projects.splice(index, 1);
  renderProjects();
}

// Edit project
function editProject(index) {
  const project = projects[index];
  document.getElementById('projectName').value = project.name;
  document.getElementById('startDate').value = project.startDate;
  document.getElementById('endDate').value = project.endDate;
  document.getElementById('description').value = project.description;

  // Centang teknologi
  document.querySelectorAll('.checkbox-group input').forEach(cb => {
    cb.checked = project.technologies.includes(cb.value);
  });

  // Hapus yang lama setelah submit
  deleteProject(index);
}
}
