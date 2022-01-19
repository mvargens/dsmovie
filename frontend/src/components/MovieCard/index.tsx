import MovieScore from 'components/MovieScore';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';

//tipo interno
type Props = {
    movie: Movie;
}

//função recebe movie do tipo Props (Movie)
function MovieCard( { movie } : Props){

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <Link to={`/scores/${movie.id}`}>
                    <MovieScore count={movie.count} score={movie.score}/>
                </Link>
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
                
            </div>
        </div>
    );
}

export default MovieCard;
