import axios from "axios";
import MovieScore from "components/MovieScore";
import MovieStars from "components/MovieStars";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie, Score } from "types/movie";

import { BASE_URL } from "utils/requests";
import "./styles.css";

type Props ={
    movieId: string;
}

function MovieScores( { movieId } : Props) {

    const [movie, setMovie] = useState<Movie>();
    const [scores, setScores] = useState<Score[]>();

    useEffect(() => {

        axios.get(`${BASE_URL}/scores/${movieId}`)
            .then(response => {
                setScores(response.data);
            }
        )

        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            }
        )


    },[movieId])
    
    console.log(scores);

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <MovieScore count={movie? movie.count : 0 } score={movie ? movie.score : 0}/>
                <p></p>
                <p></p>

                {
                    scores?.map(score => (
                        <div className="dsmovie-score-container">
                            <MovieStars score={score.score} />
                            <p className="dsmovie-score-count">{score.email}</p>
                        </div>
                    ))
                }
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Voltar</button>
                </Link>
            </div >
        </div >        
    );
}

export default MovieScores;