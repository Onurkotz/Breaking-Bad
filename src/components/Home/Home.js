import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice/charactersSlice";
import Masonry from "react-masonry-css";
import "./style.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

function Home() {
  const data = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  console.log(data);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>BREAKING BAD CHARACTERS</h1>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((character) => (
          <div key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <img
                alt={character.name}
                src={character.img}
                className="character"
              />
              <h4>{character.name}</h4>
            </Link>
          </div>
        ))}
      </Masonry>

      <div style={{ textAlign: "center", padding: 10 }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && <Button />}
        {!hasNextPage && <div>There is no data to be shown.</div>}
      </div>
    </div>
  );
}

export default Home;
