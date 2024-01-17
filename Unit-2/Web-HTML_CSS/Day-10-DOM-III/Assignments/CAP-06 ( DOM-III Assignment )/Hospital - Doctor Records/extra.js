// Student constructor function
function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    // Function method to print top three subjects based on marks
    this.printTop3Subjects = function () {
        // Get subjects and marks as an array of objects
        const subjectsArray = Object.entries(this.marks_of_5_subjects).map(([subject, marks]) => ({ subject, marks }));

        // Sort the subjectsArray in descending order based on marks
        subjectsArray.sort((a, b) => b.marks - a.marks);

        // Print top three subjects
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3 && i < subjectsArray.length; i++) {
            console.log(`${subjectsArray[i].subject}: ${subjectsArray[i].marks}`);
        }
    };

    // Function method to print the report card
    this.printReportCard = function () {
        // Calculate percentage
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, mark) => acc + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        // Print report card
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.class}       |`);
        console.log(`| Section  - ${this.section}       |`);
        // Print marks for each subject
        Object.entries(this.marks_of_5_subjects).forEach(([subject, marks]) => {
            console.log(`| ${subject}  - ${marks}      |`);
        });
        console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
        console.log("+--------------------+");
    };
}

// Example usage:
const studentDetails = {
    name: "Huzaifa",
    roll_no: 16,
    class: "X",
    section: "A",
    marks_of_5_subjects: {
        science: 72,
        maths: 75,
        social_science: 79,
        english: 80,
        hindi: 67
    }
};

const huzaifa = new Student(
    studentDetails.name,
    studentDetails.roll_no,
    studentDetails.class,
    studentDetails.section,
    studentDetails.marks_of_5_subjects
);

// Example usage of the methods
huzaifa.printTop3Subjects();
huzaifa.printReportCard();
