const PostItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, userId, completed } = props;
  return (
    <>
      <td>{id}</td>
      <td>{userId}</td>
      <td>{title}</td>
      <td style={{ color: completed ? "green" : "red" }}>
        {completed ? "Yes" : "No"}
      </td>
    </>
  );
};

export default PostItem;
