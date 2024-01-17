// fill in javascript code here

let myForm = document.querySelector("form");
let tbody = document.querySelector("tbody");

let doctorsRecords = [];
myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let record = {
    name: myForm.name.value,
    docID: myForm.docID.value,
    specialization: myForm.dept.value,
    experience: myForm.exp.value,
    email: myForm.email.value,
    mobNo: myForm.mbl.value,
  };
  doctorsRecords.push(record);
  myForm.reset(); // it will reset the input data after pushing
  // console.log(doctorsRecords);

  tbody.innerHTML = null;
  doctorsRecords.forEach((doctor, index) => {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdID = document.createElement("td");
    let tdSpln = document.createElement("td");
    let tdExp = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdMbl = document.createElement("td");
    let tdRole = document.createElement("td");
    let tdDelete = document.createElement("button");

    tdName.innerText = doctor.name;
    tdID.innerText = doctor.docID;
    tdSpln.innerText = doctor.specialization;
    tdExp.innerText = doctor.experience;
    tdEmail.innerText = doctor.email;
    tdMbl.innerText = doctor.mobNo;
    tdDelete.innerText = "X";
    tdDelete.style.backgroundColor = "red";

    if (tdExp.innerText > 5) {
      tdRole.innerText = "Senior";
    }
    else if (tdExp.innerText >= 2 && tdExp.innerText <= 5) {
      tdRole.innerText = "Junior";
    }
    else if (tdExp.innerText <= 1 && tdExp.innerText >= 1) {
      tdRole.innerText = "Trainee";
    }
    else {
      tdRole.innerText = "";
    }

    tdDelete.addEventListener("click", () => {
      // Find the index of the current record in the doctorsRecords array
      const index = doctorsRecords.findIndex((record) => record.docID === doctor.docID);

      // Remove the record from the array
      if (index !== -1) {
        doctorsRecords.splice(index, 1);
      }

      // Remove the corresponding table row from the DOM
      tr.remove();
    });

    tr.append(tdName, tdID, tdSpln, tdExp, tdEmail, tdMbl, tdRole, tdDelete);
    tbody.append(tr);
  });
});
