import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies({
  isBlockButton,
  allMovieslist,
  showMovies,
  moviesFilter,
  savedMovies,
  resStatus,
  isLoadingMovies,
  location,
  formValues,
  onSearchFilms,
  onMovieLike,
  onButtonOfMore,
  checkboxFilter,
}) {
  return (
    <section className="movies">
      <SearchForm
        isBlockButton={isBlockButton}
        checkboxFilter={checkboxFilter}
        formValues={formValues}
        onSearchFilms={onSearchFilms}
        location={location}
      />
      <p className="movies__err-message">
        {!allMovieslist.length
          ? 'Нет результатов.'
          : !moviesFilter.length && 'Ничего не найдено.'}
      </p>
      <MoviesCardList
        isBlockButton={isBlockButton}
        showMovies={showMovies}
        onButtonOfMore={onButtonOfMore}
        onMovieLike={onMovieLike}
        resStatus={resStatus}
        isLoadingMovies={isLoadingMovies}
        moviesFilter={moviesFilter}
        savedMovies={savedMovies}
        location={location}
      />
    </section>
  );
}

export default Movies;
