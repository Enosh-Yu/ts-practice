import React from "react";
import { Link } from "react-router-dom";
import { Query, useQuery } from "react-apollo";
import { HOME } from "./queries";

interface Data {
  people: Array<{ name: string }>;
}
const Home = () => {
  const { loading, error, data } = useQuery<Data>(HOME);
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link to={"/greetings/2"}>Greetings</Link>
      </div>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>{data && data.people.map((v, k) => <span key={k}>{v.name}</span>)}</>
      )}
    </>
  );
};

export default Home;
