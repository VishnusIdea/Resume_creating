function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const about = document.getElementById('about').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const contactDetails = document.getElementById('contactDetails').value;
    const personalSkills = document.getElementById('personalSkills').value;
    const professionalSkills = document.getElementById('professionalSkills').value;
    const experience = document.getElementById('experience').value;
    const summary = document.getElementById('summary').value;

    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0]; // Get the selected file

    // Check if a file is selected
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function () {
            const photoUrl = reader.result;

            const resumeOutput = document.getElementById('resumeOutput');
            const downloadBtn = document.getElementById('downloadBtn');

            const resumeContent = `
                <h3 class='h3'><center>${fullName}</center></h3>
                <h2 class='h2'><center>${about}</center></h2>
                <img src="${photoUrl}" alt="Photo" class='img'>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: <br>${address}</p>
                <p>ContactDetails: <br>${contactDetails}</p>
                <p>PersonalSkill: <br>${personalSkills}</p>
                <p>ProfessionalSkills: <br>${professionalSkills}</p>
                <p>Experience: <br>${experience}</p>
                <p>Summary: <br>${summary}</p>
            `;

            resumeOutput.innerHTML = resumeContent;
            downloadBtn.style.display = 'block';

            
          
        };

       
        reader.readAsDataURL(photoFile);
    } else {
        alert("Please select a photo before generating the resume.");
    }
}

function downloadResume() {

const resumeOutput = document.getElementById('resumeOutput').outerHTML;

const printWindow = window.open('', '_blank');
printWindow.document.open();
printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Management System</title>
    <link href="index.css" stylesheet="stylesheet">
    <style>
    body {
        font-family: Arial, sans-serif;
        color: #333;
    }
    
    .container {
        max-width: 800px;
        margin: 20px auto;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    .label {
        margin-bottom: 8px;
        color: rgb(83, 255, 255);
    
    }
    
    input,
    textarea {
        margin-bottom: 16px;
        padding: 8px;
        font-size: 16px;
    }
    
    button {
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        color: rgb(0, 0, 0);
        background-color: rgb(83, 255, 255);
    }
    
    
    
    .container {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        opacity: 0; /* Initial opacity set to 0 for animation */
        animation: fadeIn 1s forwards; /* Animation duration is 1 second */
    
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    h3 {
        text-align: center;
        color: #000000;
        font-size: larger;
    }
    .for{
        color: #000000;
        font-size: larger;
    }
    
    /* Add more styles as needed for your form elements and other elements */
    .img{
        margin-top: -85px;
      width: 120px;
      height: 152px;
    }
    
    .label{
        text-align: center;
        color: #b40000;
        width: 40px;
    
    }
    
    </style>
    <script src="https://rawgit.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>


    </head>
    <body>
    <br />
    <br />
    <br />
    ${resumeOutput}
    </body>
    </html>
`);
printWindow.document.close();

printWindow.print();

}
