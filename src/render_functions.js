import { refs } from './refs.js';

const createMarkupRecipes = recipes => {
  return recipes
    .map(
      ({ id, name, description, image, price, ingredients }) =>
        `<li class="recipes-list__item">
    <article class="card">
      <img src="${image}" alt="${name}" />
      <div class="card__content">
        <h2 class="card__title">${name}</h2>
        <p class="card__price">${price}</p>
        <p class="card__description">${description}</p>
      </div>
      <ul class="tag-list">
      ${ingredients
        .map(ingredient => `<li class="tag-list__item">${ingredient}</li>`)
        .join('')}
      
      </ul>
      <button type="button">Add to cart</button>
    </article>
  </li>
`
    )
    .join('');
};

export const renderRecipesMarkup = recipes => {
  refs.recipesList.insertAdjacentHTML(
    'beforeend',
    createMarkupRecipes(recipes)
  );
};
