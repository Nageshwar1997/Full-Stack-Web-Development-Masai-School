const DataDisplay = (data) => {
  const { userId, id, title, body } = data.data;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{userId}</td>
      <td>{body}</td>
    </tr>
  );
};

export default DataDisplay;
