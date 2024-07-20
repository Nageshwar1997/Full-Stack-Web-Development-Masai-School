const PostItem = ( props ) => {
  // eslint-disable-next-line react/prop-types
  const { id, userId, title, body } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{userId}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};

export default PostItem;
