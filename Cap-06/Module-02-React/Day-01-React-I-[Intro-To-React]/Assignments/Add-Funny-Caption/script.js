// React -> core part of react
// ReactDOM -> browser
// retrieving the container to which you need to send your react application
const domContainer = document.getElementById("root");
// JS
// JSX ->
const elem = <div>
    <img src="https://i.imgflip.com/n3tju.jpg" width="100px" />
    <p>SORRY I'M LATE I DIDN'T WANT TO COME</p>
</div>;
// 1. I want you to create a div element with an image, and a caption inside it
// 2. any image you want, funny text below it
// 3. modify line no 7 <h1> Hello World!</h1> to get output


// JSX
console.log(elem)
// react-> reactDOM, create a root where i can inject my VDOM, the react root will point to the target element 
// REACTs DOM 
const reactRoot = ReactDOM.createRoot(domContainer);

reactRoot.render(elem)