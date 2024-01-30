let element = React.createElement("div", { id: "parent" }, [
    React.createElement("div", {
        children: 1,
        className: "child",
    }),
    React.createElement("div", {
        children: 2,
        className: "child",
    }),
    React.createElement("div", {
        children: 3,
        className: "child",
    }),
    React.createElement("div", {
        children: 4,
        className: "child",
    }),
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(element);