import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { useSelector } from "react-redux";

function Detail() {
  const { char_id } = useParams();

  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div className="main">
          <h1>{char.name.toUpperCase()}</h1>
          <p>
            Nickname: <b>{char.nickname}</b>
          </p>
          <img className="pic" alt={char.name} src={char.img} />
          <p>
            Birthday: <b>{char.birthday}</b>
          </p>
          <p>
            Occupation: <b>{char.occupation.join(", ")}</b>
          </p>
          <p>
            Status: <b>{char.status}</b>
          </p>
          <p>
            Category: <b>{char.category}</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
