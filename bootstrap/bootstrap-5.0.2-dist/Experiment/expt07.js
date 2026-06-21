const students = [
    { name: "Raghav", course: "Computer Science", marks: 85 },
    { name: "Pralav", course: "Computer Science", marks: 92 },
    { name: "Rachit", course: "Computer Science", marks: 78 }
];

function createStudentCard(student) {
    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h3");
    name.textContent = student.name;

    const course = document.createElement("p");
    course.textContent = `Course: ${student.course}`;

    const marks = document.createElement("p");
    marks.textContent = `Marks: ${student.marks}`;

    card.appendChild(name);
    card.appendChild(course);
    card.appendChild(marks);
    return card;
}

function renderStudents() {
    const app = document.getElementById("app");

    students.forEach((student) => {
        const card = createStudentCard(student);
        app.appendChild(card);
    });
}

renderStudents();