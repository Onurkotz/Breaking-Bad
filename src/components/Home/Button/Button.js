import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../../redux/charactersSlice/charactersSlice";

function Button() {
  const nextPage = useSelector((state) => state.characters.page);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchCharacters(nextPage))}>
        Next Page ({nextPage})
      </button>
    </div>
  );
}

export default Button;
