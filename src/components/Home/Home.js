import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice/charactersSlice";
import Masonry from "react-masonry-css";
import "./style.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function Home() {
  const data = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((character) => (
          <div key={character.char_id}>
            <img
              alt={character.name}
              src={character.img}
              className="character"
            />
            <h4>{character.name}</h4>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
