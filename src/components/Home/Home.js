import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice/charactersSlice";

function Home() {
  const data = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  console.log(data);

  return <div>Homeasdf assdhdfdda</div>;
}

export default Home;
