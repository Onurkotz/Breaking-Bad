import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice/charactersSlice";
//import Loading from "../Loading/Loading";
//import Error from "../Error/Error";

function Home() {
  const data = useSelector((state) => state.characters.items);
  //const isLoading = useSelector((state) => state.characters.isLoading);
 // const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  console.log(data);

 // if (isLoading){

 // }

  //if (error){
//    return <Error message={error} />
//}

  return <div>Homes {data[0].name} </div>;
}

export default Home;
