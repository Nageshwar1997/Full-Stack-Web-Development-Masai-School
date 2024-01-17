let myForm = document.querySelector("form");
let tbody = document.querySelector("tbody");

let data = JSON.parse(localStorage.getItem("userData"));
if (data == null) {
  data = [];
}
data.forEach((element, index) => {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("button");



  td1.innerText = element.task;
  td2.innerText = element.priority;
  td3.innerText = "Favourite";

  if (element.priority == "High") {
    td2.style.backgroundColor = "red";
  }
  else {
    td2.style.backgroundColor = "green";
  }
  tr.append(td1, td2, td3);
  tbody.append(tr);
});

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(myForm.task.value);
  // console.log(myForm.priority.value);

  let formData = {
    task: myForm.task.value,
    priority: myForm.priority.value,
  };

  data.push(formData);
  // console.log(data);

  localStorage.setItem("userData", JSON.stringify(data))

  tbody.innerHTML = null; // it will prevent the previous data to show again and again (it will clear things is present previously)

  data.map((element, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("button");


    td1.innerText = element.task;
    td2.innerText = element.priority;
    td3.innerText = "Favourite";

    if (element.priority == "High") {
      td2.style.backgroundColor = "red";
    }
    else {
      td2.style.backgroundColor = "green";
    }
    tr.append(td1, td2, td3);
    tbody.append(tr);
  });
});
