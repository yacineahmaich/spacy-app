import * as model from './model';
import PaginationView from './views/PaginationView';
import RecipesView from './views/RecipesView';

if (module.hot) {
  module.hot.accept();
}

const getRecipesController = async function () {
  try {
    RecipesView.renderSpinner();
    await model.getRecipes();
    RecipesView.render(model.state.recipes);
    PaginationView.render(model.state.pagination);
  } catch (err) {
    console.error(err.message);
  }
};

const paginationController = async function (goto) {
  try {
    RecipesView.renderSpinner();
    PaginationView.render(model.state.pagination);
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    model.state.pagination.current = goto;
    await model.getRecipes();
    RecipesView.render(model.state.recipes);
  } catch (err) {
    console.error(err.message);
  }
};

const init = () => {
  getRecipesController();
  PaginationView.addHandler(paginationController);
};
init();
