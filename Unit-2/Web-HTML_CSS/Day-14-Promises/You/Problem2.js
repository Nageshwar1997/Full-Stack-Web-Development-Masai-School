// ** Problem Statement:

//     You manage an array of student objects, each with a name and a set of scores. Your task is to process this data asynchronously using nested callbacks.

// ** Tasks:

// 1. ** Create an Array of Students:**
// Each student should have a name and an array of scores.
let students = [
    { name: "Nageshwar", score: [100, 100, 100] },
    { name: "Manjusha", score: [85, 95, 98] },
    { name: "Dhanashree", score: [95, 85, 98] },
];

// 2. ** First Callback - Retrieve Student:**
// Simulate a database call to retrieve a student based on a name.
// Use `setTimeout` to mimic an asynchronous operation.
function retrieveStudent(studentName, cb) {
    const student = students.find((student) => student.name === studentName);
    // Simulate async operation
    setTimeout(() => {
        cb(student);
    }, 500);
}

// 3. ** Second Callback - Process Scores:**
// After retrieving the student, process their scores (e.g., calculate the average).
// This should also be done asynchronously, simulating a complex calculation.
function processScores(student, cb) {
    // Simulate async operation
    setTimeout(() => {
        let total = student.score.reduce((sum, score) => sum + score, 0);
        let average = total / student.score.length;
        cb(average);
    }, 500);
}

// 4. ** Third Callback - Filter Based on Criteria:**
// Once the scores are processed, filter students based on a condition (e.g., average score above a certain threshold).
function filterStudents(averageThreshold, cb) {
    // Simulate async operation
    setTimeout(() => {
        const filteredStudents = students.filter((student) => {
            return calculateAverage(student) > averageThreshold;
        });
        cb(filteredStudents);
    }, 500);
}

// Helper function to calculate the average score of a student
function calculateAverage(student) {
    let total = student.score.reduce((sum, score) => sum + score, 0);
    return total / student.score.length;
}

let studentName = "Nageshwar";

retrieveStudent(studentName, (student) => {
    processScores(student, (average) => {
        filterStudents(average, (filteredStudents) => {
            console.log(filteredStudents);
        });
    });
});
