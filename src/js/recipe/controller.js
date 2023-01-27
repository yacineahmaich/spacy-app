import * as model from './model';
import { getRecipeId } from '../helpers';

import TitleView from './views/TitleView';
import RecipeImgView from './views/RecipeImgView';
import RecordsView from './views/RecordsView';
import StatisticsView from './views/StatisticsView';
import SummaryView from './views/SummaryView';
import IngredientsView from './views/IngredientsView';
import StepsView from './views/StepsView';
import SimilarRecipesView from './views/SimilarRecipesView';
import SourceView from './views/SourceView';
import PageView from './views/PageView';

if (module.hot) {
  module.hot.accept();
}

const RecipeController = async function (id) {
  try {
    await model.getRecipe(id);
    const {
      title,
      image,
      records,
      statistics,
      summary,
      ingredients,
      steps,
      source,
    } = model.state.recipe;

    TitleView.render(title);
    RecipeImgView.render(image);
    RecordsView.render(records);
    StatisticsView.render(statistics);
    SummaryView.render(summary);
    IngredientsView.render(ingredients);
    StepsView.render(steps);
    SimilarRecipesView.render(model.state.similar);
    SourceView.render(source);
  } catch (err) {
    PageView.notFound(err.message);
  }
};

const init = () => {
  const recipeId = getRecipeId();

  RecipeController(recipeId);
};
init();
