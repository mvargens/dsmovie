import MovieScores from "components/MovieScores";
import { useParams } from "react-router-dom";

function Form() {

    const params = useParams();


    return (
       <MovieScores movieId={`${params.movieId}`}/>
    );
}

export default Form;