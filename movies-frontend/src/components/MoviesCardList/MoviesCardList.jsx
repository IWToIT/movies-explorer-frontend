import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  isBlockButton,
  showMovies,
  savedMovies,
  moviesFilter,
  resStatus,
  isLoadingMovies,
  location,
  onMovieLike,
  onButtonOfMore,
}) {
  return (
    <section className="movies-card-list">
      {isLoadingMovies ? (
        <Preloader />
      ) : !resStatus ? (
        <p className="movies-card-list__err-message">
          Во время запроса произошла ошибка. Подождите немного и
          попробуйте ещё раз.
        </p>
      ) : (
        <>
          {showMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.id || movie._id}
              savedMovies={savedMovies}
              onMovieLike={onMovieLike}
              isBlockButton={isBlockButton}
              location={location}
            />
          ))}
          {location.pathname === '/movies' && moviesFilter.length !== showMovies.length && (
            <button onClick={onButtonOfMore} className="movies-card-list__button">
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
