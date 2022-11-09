import { useEffect, useState } from "react";
//import { rollupVersion } from "vite";
import RepoDisplay from "./RepoDisplay";



 function Repos() {
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
      //console.log(allRepos);
      setRepos(allRepos);
      setLoading(false);
    };
    getRepos();
  }, []);
  if (loading) {
    return <h3>Loading...</h3>;
  }

 
  const pages = repos.length;
  const PER_PAGE = 6;
  //const nextPage = (page - 1) * PER_PAGE;
  const nextPage = (page * PER_PAGE) - PER_PAGE;

  return (
    <div className="app">
      <h1>My Project</h1>
      <p>Github repositories that i've built</p>
      <div className="repos-container">
      {repos.slice((page - 1) * PER_PAGE, page * PER_PAGE).map((repo) => {
          return (
           <RepoDisplay 
           key={repo.id}
           {...repo}/>
          );
        })}
      </div>
      <p className="paginate">
        {" "}
        Pages: {page} of {pages/PER_PAGE}
      </p>
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}export default Repos