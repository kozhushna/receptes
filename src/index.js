import recipes from './js/menu.json';
import { refs } from './refs';

import { renderRecipesMarkup } from './render_functions';

renderRecipesMarkup(recipes);

const onCartButtonClick = e => {};

refs.recipesList.addEventListener('click', onCartButtonClick);
