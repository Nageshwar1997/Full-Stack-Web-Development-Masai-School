console.log("Task - 1");

function sum(a,b) {
    setTimeout(() => {
        console.log("Task - 2",a+b);
    })
    console.log("tada...");
}

sum(10, 20);

for(let i=0;i<5;i++) {
    console.log("Task - 3",i);
}

console.log("Task - 4");