import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";

function App() {
  const { isLoading, error, data, refetch } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(isLoading, error, data);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
