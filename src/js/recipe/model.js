import { API_KEY, API_URL, REC_PER_PAGE } from '../config';
import { getJSON } from '../helpers';
import striptags from 'striptags';

export const state = {
  recipe: {},
  similar: [],
};

const getIngredientImageUrl = function (imgName) {
  return `https://spoonacular.com/cdn/ingredients_100x100/${imgName}`;
};
const getRecipeImageUrl = function (id, imgType) {
  return `https://spoonacular.com/recipeImages/${id}-556x370.${imgType}`;
};

export const getRecipe = async function (id) {
  try {
    const [recipeData, similarRecipes] = await Promise.all([
      getJSON(`${API_URL}${id}/information?apiKey=${API_KEY}`),
      getJSON(`${API_URL}${id}/similar?apiKey=${API_KEY}&number=4`),
    ]);

    state.recipe = {
      title: recipeData.title,
      image: recipeData.image,
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
    console.log(similarRecipes);
  } catch (err) {
    console.error(err.message);
  }
};
