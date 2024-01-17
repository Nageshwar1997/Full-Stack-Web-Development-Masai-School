/* // fill in javascript code here

let myForm = document.querySelector("form");
let tbody = document.querySelector("tbody");

let employeeRecord = [];

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(myForm.name.value);

  let employee = {
    name: myForm.name.value,
    employeeID: myForm.employeeID.value,
    department: myForm.department.value,
    experience: myForm.exp.value,
    email: myForm.email.value,
    mobileNo: myForm.mbl.value,
  };

  employeeRecord.push(employee);

  tbody.innerHTML = null;
  //   console.log(employeeRecord);

  employeeRecord.forEach((employeeElement, index) => {
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");
    let td_emp_id = document.createElement("td");
    let td_dept = document.createElement("td");
    let td_exp = document.createElement("td");
    let td_email = document.createElement("td");
    let td_mob_no = document.createElement("td");
    let td_role = document.createElement("td");
    let td_deleteBTN = document.createElement("button");

    td_name.innerText = employeeElement.name;
    td_emp_id.innerText = employeeElement.employeeID;
    td_dept.innerText = employeeElement.department;
    td_exp.innerText = employeeElement.experience;
    td_email.innerText = employeeElement.email;
    td_mob_no.innerText = employeeElement.mobileNo;
    td_deleteBTN.innerText = "Delete";
    if (td_exp.innerText > 5) {
      td_role.innerText = "Senior";
    } else if (td_exp.innerText >= 2 && td_exp.innerText <= 5) {
      td_role.innerText = "Junior";
    } else if (td_exp.innerText <= 1 && td_exp.innerText > 0) {
      td_role.innerText = "Trainee";
    } else {
      td_role.innerText = "";
    }

    td_deleteBTN.addEventListener("click", () => {
      let removingIndex = employeeRecord.findIndex(
        (el) => el.employeeID == employeeElement.employeeID
      );
      if (removingIndex != -1) {
        employeeRecord.splice(removingIndex, 1);
      }
      tr.remove();
    });

    // Appending
    tr.append(
      td_name,
      td_emp_id,
      td_dept,
      td_exp,
      td_email,
      td_mob_no,
      td_role,
      td_deleteBTN
    );
    tbody.append(tr);
  });
});
*/


let myForm = document.querySelector("form");

let employeeRecords = [];
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name");
  let employeeID = document.getElementById("employeeID");
  let department = document.getElementById("department");
  let experience = document.getElementById("exp");
  let email = document.getElementById("email");
  let mobileNo = document.getElementById("mbl");

  let employee = {
    name: name.value,
    employeeID: employeeID.value,
    department: department.value,
    experience: experience.value,
    email: email.value,
    mobileNo: mobileNo.value
  }
  // console.log(employee);
  employeeRecords.push(employee);
  // console.log(employeeRecords);
  localStorage.setItem("employeeRecords", JSON.stringify(employeeRecords));
});