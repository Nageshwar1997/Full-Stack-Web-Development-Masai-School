let myForm = document.getElementById("form");
let tbody = document.querySelector("tbody"); //(Singular)
// let taskInp = document.getElementById("task");

let data = [];
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = {
    task: myForm.task.value,
    priority: myForm.priority.value,
  };

  data.push(formData);

  tbody.innerHTML = null;

  data.forEach((element, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = element.task;
    td2.innerText = element.priority;
    if (element.priority == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }
    tr.append(td1, td2);
    tbody.append(tr);
  });
});
