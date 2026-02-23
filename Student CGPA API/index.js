const express = require("express");
const app = express();

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

app.get("/", (req, res) => {
  res.status(200).send("server is running");
})

// Return all students.

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// Return the student with the highest CGPA.

app.get("/students/topper", (req, res) => {

  if (students.length === 0) {
    return res.status(404).json({ message: "No student found" });
  }

  let top = 0;
  let idx = 0;
  for (let i = 0; i < students.length; i++) {
    let cgpa = students[i].cgpa
    if (cgpa > top) {
      top = cgpa;
      idx = i;
    }
  };

  res.status(200).json(students[idx]);

});

// Return average CGPA of all students.

app.get("/students/average", (req, res) => {

  if (students.length === 0) {
    return res.status(404).json({ message: "No student found" });
  }

  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].cgpa;
  }
  let average = sum / students.length;

  res.status(200).json({
    averageCGPA: Number(average)
  });

});

// Return total number of students.

app.get("/students/count", (req, res) =>{
  if (students.length === 0) {
    return res.status(404).json({ message: "No student found" });
  }

  let totalStudent = students.length

  res.status(200).json({
    totalStudents : Number(totalStudent)
  });
});

// Return student by ID.

app.get("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const student = students.find(u => u.id === studentId);

  if(!student) {
    return res.status(404).json({message:"student not found" });
  }

  res.status(200).json(student);
});

app.get("/students/branch/:branchName", (req,res) =>{
  const branchName = req.params.branchName.toLowerCase();
  const branchs = students.filter(b => b.branch.toLowerCase() === branchName);

  if(!branchs){
    return res.status(404).json({message: "branch not found"});
  };

  res.status(200).json(branchs);

});

app.listen(3000, () => {
  console.log("server is runnig on port 3000");
});