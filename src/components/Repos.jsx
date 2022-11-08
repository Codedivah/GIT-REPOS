import { useEffect, useState } from "react";


export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const getRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/bolajiayodeji/repos"
      );
      const allRepos = await response.json();
      console.log(allRepos);
      setRepos(allRepos);
      setLoading(false);
    };
    getRepos();
  }, []);
  if (loading) {
    return <h3>Loading...</h3>;
  }

 
  const pages = repos.length;
  const PER_PAGE = 5;
  const nextPage = (page - 1) * PER_PAGE;
  //const nextPage = (page * PER_PAGE) - PER_PAGE;

  return (
    <div className="App">
      <h1>My Projects</h1>
      <p>GitHub repositories that I've built.</p>
      <ul>
        {repos.slice((page - 1) * PER_PAGE, page * PER_PAGE).map((repo) => {
          return (
            <li key={repo.id}>
              <p>{repo.name}</p>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
              <p>{repo.forks_count}</p>
              <p>{repo.stargazers_count}</p>
            </li>
          );
        })}
      </ul>
      <p>
        {" "}
        Pages: {page} of {pages/PER_PAGE}
      </p>
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
