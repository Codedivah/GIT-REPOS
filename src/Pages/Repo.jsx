import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineFork } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Loader from "../components/Loader";

const Repo = () => {
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const getParams = async () => {
      const response = await fetch(
        `https://api.github.com/repos/bolajiayodeji/${params.name}`
      );
      const data = await response.json();
      setRepo(data);
      setLoading(false);
    };
    getParams();
  }, []);

  if (loading) {
    return <Loader/>
  }

  const {
    full_name,
    visibility,
    html_url,
    created_at,
    updated_at,
    stargazers_count,
    forks_count,
    language,
  } = repo;

  const convertDate = (date) => {
    const [weekDay, month, day, year] = new Date(date)
      .toDateString()
      .split(" ");
    return `${weekDay}, ${month}, ${day}, ${year}`;
  };

  return (
    <div>
      <h1 className="name">{full_name}</h1>
      <span className="label">{visibility}</span>

      <p>Created on {convertDate(created_at)}</p>
      <p>Updated on {convertDate(updated_at)}</p>
      <p>{language}</p>

      <div>
        <span>
          <AiOutlineStar />
        </span>
        <p>{stargazers_count}</p>
      </div>
      <div className="fork">
        <span>
          <AiOutlineFork />
        </span>
        <p>{forks_count}</p>
      </div>
      <p>
        <a href={html_url} target="-blank">
          View More
        </a>
      </p>
    </div>
  );
};

export default Repo;
