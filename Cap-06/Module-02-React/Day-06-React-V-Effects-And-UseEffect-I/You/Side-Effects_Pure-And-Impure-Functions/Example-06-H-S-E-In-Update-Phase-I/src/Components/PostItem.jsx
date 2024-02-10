const PostItem = (props) => {
  const { id, title, body } = props;
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
        <strong>Body : </strong>
        {body}
      </p>
    </div>
  );
};

export default PostItem;
