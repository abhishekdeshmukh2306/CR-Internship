
const templateSection = document.getElementById('templates');
const sectionsSection = document.getElementById('sections');
const previewSection = document.getElementById('preview');
const downloadSection = document.getElementById('download');
const resumeForm = document.getElementById('resume-form');
const previewArea = document.getElementById('resume-preview');
const downloadButton = document.getElementById('download-button');
const downloadLinks = document.getElementById('download-links');


templates.forEach(template => {
  const templateCard = createTemplateCard(template);
  templateSection.appendChild(templateCard);
});


function createTemplateCard(template) {
  const card = document.createElement('div');
  card.classList.add('template-card');
  
  return card;
}


previewButton.addEventListener('click', () => {
  const resumeData = getResumeData();

  previewArea.innerHTML = renderResumePreview(resumeData);
  showSection(previewSection);
});


downloadButton.addEventListener('click', () => {
  const resumeData = getResumeData();

  generatePDF(resumeData, (pdfFile) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(pdfFile);
    link.download = 'resume.pdf';
    link.click();
  });
});

function getResumeData() {
  const formData = new FormData(resumeForm);
  const resumeData = {};
  for (const [key, value] of formData.entries()) {
    resumeData[key] = value;
  }
  return resumeData;
}


function renderResumePreview(resumeData) {
  
}


function generatePDF(resumeData, callback) {

}


const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    showSection(targetSection);
  });
});


function showSection(section) {
  sections.forEach(section => section.classList.remove('active'));
  section.classList.add('active');
}




previewButton.addEventListener('click', () => {
    const resumeData = getResumeData();
    previewArea.innerHTML = 'Generating preview...'; 
    previewArea.classList.add('loading'); 
  
 
    const previewContent = renderResumePreview(resumeData);
  
    setTimeout(() => { 
      previewArea.innerHTML = previewContent;
      previewArea.classList.remove('loading'); 
      showSection(previewSection);
    }, 1000); 
  });
  
  
  downloadButton.addEventListener('click', () => {
    const resumeData = getResumeData();
    downloadLinks.innerHTML = 'Generating PDF...'; 
  
    generatePDF(resumeData, (pdfFile) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfFile);
      link.download = 'resume.pdf';
      link.click();
  
      downloadLinks.innerHTML = 'PDF generated successfully!'; 
      setTimeout(() => { 
        downloadLinks.innerHTML = '';
      }, 3000);
    });
  });
  



previewButton.addEventListener('click', () => {
  const resumeData = getResumeData();
  previewArea.innerHTML = 'Generating preview...'; 
  previewArea.classList.add('loading'); 

 
  const previewContent = renderResumePreview(resumeData);

  setTimeout(() => { 
    previewArea.innerHTML = previewContent;
    previewArea.classList.remove('loading'); 
    showSection(previewSection);
  }, 1000); 
});


downloadButton.addEventListener('click', () => {
  const resumeData = getResumeData();
  downloadLinks.innerHTML = 'Generating PDF...'; 

  generatePDF(resumeData, (pdfFile) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(pdfFile);
    link.download = 'resume.pdf';
    link.click();

    downloadLinks.innerHTML = 'PDF generated successfully!'; 
    setTimeout(() => { 
      downloadLinks.innerHTML = '';
    }, 3000);
  });
});

