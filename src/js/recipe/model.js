import { API_KEY, API_URL } from '../config';
import { getJSON } from '../helpers';
import striptags from 'striptags';

export const state = {
  recipe: {},
  similar: [],
  bookmarks: [],
};

const getIngredientImageUrl = function (imgName) {
  return `https://spoonacular.com/cdn/ingredients_100x100/${imgName}`;
};
const getRecipeImageUrl = function (id, imgType) {
  return `https://spoonacular.com/recipeImages/${id}-636x393.${imgType}`;
};

export const getRecipe = async function (id) {
  try {
    const [recipeData, similarRecipes] = await Promise.all([
      getJSON(`${API_URL}${id}/information?apiKey=${API_KEY}`),
      getJSON(`${API_URL}${id}/similar?apiKey=${API_KEY}&number=4`),
    ]);
    state.recipe = {
      bookmarked: !!state.bookmarks.find(rec => rec.id === recipeData.id),
      id: recipeData.id,
      title: recipeData.title,
      image: getRecipeImageUrl(recipeData.id, recipeData.imageType),
      records: {
        likes: recipeData.aggregateLikes,
        healthScore: recipeData.healthScore,
        servings: recipeData.servings,
        price: recipeData.pricePerServing,
      },
      statistics: {
        ingredientsCount: recipeData.extendedIngredients.length,
        estimatedTime: recipeData.readyInMinutes,
        stepsCount: recipeData.analyzedInstructions[0]?.steps?.length ?? '???',
      },
      summary: {
        text: striptags(recipeData.summary),
        credit:
          recipeData.author ?? recipeData.creditsText ?? recipeData.sourceName,
        link: recipeData.sourceUrl,
      },
      ingredients: recipeData.extendedIngredients.map(ing => {
        return {
          text: ing.original,
          image: getIngredientImageUrl(ing.image),
        };
      }),
      steps: recipeData.analyzedInstructions[0]?.steps ?? [],
      source: recipeData.sourceUrl,
    };
    state.similar = similarRecipes.map(recipe => {
      return {
        url: `/recipe.html?recipe_id=${recipe.id}`,
        title: recipe.title,
        image: getRecipeImageUrl(recipe.id, recipe.imageType),
      };
    });
  } catch (err) {
    throw err;
  }
};

export const persistBookmarks = function () {
  const storage = JSON.stringify(state.bookmarks);
  localStorage.setItem('bookmarks', storage);
};

export const addToBookmarks = function () {
  state.bookmarks.push({ ...state.recipe, bookmarked: true });
  state.recipe.bookmarked = true;

  persistBookmarks();
};
export const removeFromBookmarks = function () {
  state.bookmarks = state.bookmarks.filter(
    recipe => recipe.id !== state.recipe.id
  );
  state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = () => {
  const storage = JSON.parse(localStorage.getItem('bookmarks'));
  if (!storage) return;
  state.bookmarks = storage;
};
init();
