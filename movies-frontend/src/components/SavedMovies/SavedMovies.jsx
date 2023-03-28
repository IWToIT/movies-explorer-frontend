import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({  
  isBlockButton,
  showMovies,
  savedMovies,
  savedmoviesFilter,
  resStatus,
  isSavedSearch,
  onSearchSavedFilms,
  onMovieLike,
  checkboxFilter,
  location, 
}) {
  return (
    <section className="saved-movies">
      <SearchForm 
        isBlockButton={isBlockButton}
        checkboxFilter={checkboxFilter}
        onSearchSavedFilms={onSearchSavedFilms}
        location={location}
      />
      {!savedMovies.length ? (
        <p className="saved-movies__err-message">Нет сохраненных фильмов.</p>
      ) : (
        !savedmoviesFilter.length && isSavedSearch && <p className="saved-movies__err-message">Ничего не найдено.</p>
      )}
      <MoviesCardList 
        isBlockButton={isBlockButton}
        showMovies={showMovies}
        savedMovies={savedMovies}
        savedmoviesFilter={savedmoviesFilter}
        onMovieLike={onMovieLike}
        resStatus={resStatus}
        location={location}
      />
    </section>
  );
}

export default SavedMovies;
