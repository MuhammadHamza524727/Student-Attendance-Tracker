var studentNames = [];
var absentStudents = [];
var presentCount = 0;

var studentFees = 200000;
var password = 1234;

var UserPassword = Number(
  prompt("---  Fast University Karachi  --- \n Enter Password!")
);
if (password === UserPassword) {
  var task1 = Number(
    prompt("Enter 1 or 2 \n 1:Students Details \n 2:Teachers Details")
  );
  if (task1 === 1) {
    var task2 = Number(
      prompt(
        " 1: Students Fees Details \n 2: Students attendance System \n 3: Results "
      )
    );
    if (task2 === 1) {
      alert(studentFees);
    } else if (task2 === 2) {
      let numberOfStudents = parseInt(
        prompt("Enter the number of students in the class:")
      );
      if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
        alert("Please enter a valid number of students.");
      }

      for (var i = 0; i < numberOfStudents; i++) {
        var studentName = prompt(`Enter the name of student ${i + 1} :`);
        studentNames.push(studentName);

        var attendanceStatus = prompt(
          `Is ${studentName} Present or Absent?`
        ).toLowerCase();

        if (attendanceStatus === "present") {
          presentCount++;
        } else if (attendanceStatus === "absent") {
          absentStudents.push(studentName);
        } else {
          alert("Invalid input. Please enter 'Present' or 'Absent'.");
          i--;
        }
      }

      alert(`Total students present: ${presentCount}`);
      if (absentStudents.length > 0) {
        alert(`Absent students: ${absentStudents.join(", ")}`);
      } else {
        alert("No students are absent.");
      }

      alert(
        ` Present-Students = ${presentCount} \n Absent-Student = ${absentStudents}`
      );
    } else if (task2 === 3) {
      alert("Comming Soon as Possible, Thanks!");
    }
  } else if (task1 === 2) {
    Number(prompt("1: Teachers Name/Detail \n 2: Teachers attendance System"));
  } else {
    alert("Please Enter Correct Number!");
  }
} else {
  alert(
    "Wrong Password!\n Please Enter Correct Password other wise System Click your Picture!"
  );
}
