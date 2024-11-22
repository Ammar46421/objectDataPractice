// Array to store student data
let students = [];

// Function to add a student
function addStudent() {
    const name = document.getElementById('studentName').value;
    const fatherName = document.getElementById('fatherName').value;
    const age = document.getElementById('age').value;
    const studentClass = document.getElementById('class').value;

    // Check if all fields are filled
    if (!name || !fatherName || !age || !studentClass) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a student object
    const student = {
        id: Date.now(),
        name: name,
        fatherName: fatherName,
        age: parseInt(age), // Converting age to number
        class: studentClass
    };

    // Add the student object to the array
    students.push(student);

    // Clear input fields
    document.getElementById('studentName').value = "";
    document.getElementById('fatherName').value = "";
    document.getElementById('age').value = "";
    document.getElementById('class').value = "";

    // Render the updated student list
    renderStudents();
}

// Function to render students
function renderStudents() {
    const studentContainer = document.getElementById('studentContainer');
    studentContainer.innerHTML = ""; // Clear previous entries

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student-item';
        studentDiv.innerHTML = `
            <strong>Name:</strong> ${student.name}<br>
            <strong>Father's Name:</strong> ${student.fatherName}<br>
            <strong>Age:</strong> ${student.age}<br>
            <strong>Class:</strong> ${student.class}<br>
        `;
        studentContainer.appendChild(studentDiv);
    });
}


// function generateRandomSixDigit() {
//     // Generate a random number between 100000 and 999999
//     let randomSixDigit = Math.floor(Math.random() * 900000) + 100000;
//     return randomSixDigit;
// }

// let randomNumber = generateRandomSixDigit();
// console.log(randomNumber);