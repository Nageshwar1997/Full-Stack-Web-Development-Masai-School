

async function getData(apiUrl) {
  try {
    let resp = await fetch(apiUrl);
    let data = await resp.json();
    let totalPages = resp.headers.get("X-Total-Count");
    return {
      data: data,
      totalPages: totalPages,
    };
  } catch (error) {
    throw new Error(error);
  }
}
function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNextBtn = () => {
    setPage((prev) => prev + 1);
  };
  const handlePreviousBtn = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const fetchAndUpdateData = async () => {
    try {
      let { finalData, totalPages } = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      setPosts(finalData);
      setTotalPages(totalPages);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <div>
        <h1>Posts</h1>
        <button onClick={handlePreviousBtn} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextBtn} disabled={page === 10}>
          Next
        </button>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => {
              return <PostItem key={item.id} {...item} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
