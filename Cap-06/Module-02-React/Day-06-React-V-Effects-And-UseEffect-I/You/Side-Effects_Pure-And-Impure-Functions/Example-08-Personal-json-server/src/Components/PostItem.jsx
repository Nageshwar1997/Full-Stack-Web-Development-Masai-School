const PostItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, completed } = props;
  return (
    <div style={{ border: "1px solid black", margin: "20px", padding: "10px" }}>
      <p>
        <strong>ID: </strong>
        {id}
      </p>
      <p>
        <strong>Title : </strong>
        {title}
      </p>
      <p>
        <strong>Completed : </strong>
        <span style={{ color: completed ? "green" : "red" }}>
          {completed ? "Yes" : "No"}
        </span>
      </p>
    </div>
  );
};

export default PostItem;
