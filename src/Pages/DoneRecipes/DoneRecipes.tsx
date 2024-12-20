import { useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';
import { useDoneRecipes, Recipe } from '../../Hooks/useDoneRecipes';
import styles from './DoneRecipes.module.css';

function DoneRecipes() {
  const { setHeaderTitle, setUrl } = useContext(AppContext);
  useEffect(() => {
    setHeaderTitle('Done Recipes');
    setUrl(window.location.pathname);
  }, []);

  const {
    copyInfo,
    handleShareClickDone,
    filterRecipes,
    filteredRecipes,
    handleRecipeClick,
  } = useDoneRecipes();

  return (
    <section className={ styles.donePage }>
      <div className={ styles.topBtnsDiv }>
        <button
          className={ styles.topBtns }
          data-testid="filter-by-all-btn"
          onClick={ () => filterRecipes('all') }
        >
          All
        </button>
        <button
          className={ styles.topBtns }
          data-testid="filter-by-meal-btn"
          onClick={ () => filterRecipes('meal') }
        >
          Meals
        </button>
        <button
          className={ styles.topBtns }
          data-testid="filter-by-drink-btn"
          onClick={ () => filterRecipes('drink') }
        >
          Drinks
        </button>
      </div>
      <div className={ styles.doneRecipes }>
        {filteredRecipes.map((recipe: Recipe, index:number) => (
          <div
            className={ styles.doneCards }
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <button
              onClick={ () => handleRecipeClick(recipe.type, recipe.id) }
              role="link"
              tabIndex={ 0 }
              style={ { border: 'none', background: 'transparent' } }
            >
              <img
                className={ styles.image }
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
                width={ 200 }
              />
            </button>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.nationality}
              {' '}
              -
              {' '}
              {recipe.category}
              {' '}
              {recipe.type === 'drink' && <span>{recipe.alcoholicOrNot}</span>}
            </p>
            <button
              onClick={ () => handleRecipeClick(recipe.type, recipe.id) }
              role="link"
              tabIndex={ 0 }
              style={ { border: 'none', background: 'transparent' } }
            >
              <p data-testid={ `${index}-horizontal-name` }>
                {recipe.name}
              </p>
            </button>
            <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
            <div className={ styles.tags }>
              {recipe.tags.map((tag, tagIndex) => (
                <span key={ tagIndex } data-testid={ `${index}-${tag}-horizontal-tag` }>
                  {tag}
                  {recipe.tags.length > 1 && ','}
                </span>
              ))}
            </div>
            <button
              className={ styles.shareBtn }
              onClick={ () => handleShareClickDone(recipe.type, recipe.id) }
            >
              <img
                src="src/images/shareIcon.svg"
                alt="Share Icon"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            {copyInfo.message && (
              recipe.id === copyInfo.id && <div>{copyInfo.message}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoneRecipes;
