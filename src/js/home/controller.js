import * as model from './model';
import PaginationView from './views/PaginationView';
import RecipesView from './views/RecipesView';
import SearchView from './views/SearchView';

if (module.hot) {
  module.hot.accept();
}

const getRecipesController = async function () {
  try {
    RecipesView.renderSpinner();
    await model.getRecipes();
    RecipesView.render(model.state.recipes);
  } catch (err) {
    console.error(err.message);
  }
};

const paginationController = async function (goto) {
  try {
    RecipesView.renderSpinner();
    model.state.pagination.current = goto;
    PaginationView.render(model.state.pagination);
    window.scrollTo({ left: 0, top: 0 });
    // await model.getRecipes();
    await model.getSearchResults();
    RecipesView.render(model.state.recipes);
  } catch (err) {
    console.error(err);
  }
};

const SearchRecipesController = async function (query) {
  try {
    model.state.search.query = query;
    model.state.pagination.current = 1;
    RecipesView.renderSpinner();
    await model.getSearchResults();
    RecipesView.render(model.state.recipes);
    PaginationView.render(model.state.pagination);
  } catch (err) {
    console.error(err);
  }
};

const init = () => {
  // getRecipesController();
  PaginationView.addHandler(paginationController);
  SearchView.addHandler(SearchRecipesController);
};
init();
