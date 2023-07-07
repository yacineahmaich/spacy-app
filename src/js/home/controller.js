import * as model from './model';
import ModalView from './views/ModalView';
import PaginationView from './views/PaginationView';
import QuickSearchView from './views/QuickSearchView';
import RecipesView from './views/RecipesView';
import SearchView from './views/SearchView';
import FoundedRecipesView from './views/FoundedRecipesView';
import BookmarksView from '../views/BookmarksView';

// Parcel HMR
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
    RecipesView.renderFeedback(err.message);
    PaginationView.clear();
  }
};

const paginationController = async function (goto) {
  try {
    RecipesView.renderSpinner();
    model.state.pagination.current = goto;
    PaginationView.render(model.state.pagination);
    PaginationView.disablePagination();
    window.scrollTo({ left: 0, top: 0 });
    await model.getSearchResults();
    await model.getRecipes();
    RecipesView.render(model.state.recipes);
    PaginationView.enablePagination();
  } catch (err) {
    RecipesView.renderFeedback(err.message);
    PaginationView.clear();
  }
};

const SearchRecipesController = async function (query) {
  try {
    // close the modal
    ModalView.closeModal();

    if (model.state.search.query === query) return;

    model.state.search.query = query;
    model.state.pagination.current = 1;
    FoundedRecipesView.clear();
    RecipesView.renderSpinner();
    await model.getSearchResults();

    if (model.state.recipes.length === 0) {
      RecipesView.renderFeedback(
        `No results matching "${model.state.search.query}" ! Please try again`
      );
      // remove pagination if user did search of existing recipe before
      PaginationView.clear();
      return;
    }

    FoundedRecipesView.render(model.state.search.totalResults);
    RecipesView.render(model.state.recipes);
    PaginationView.render(model.state.pagination);
  } catch (err) {
    RecipesView.renderFeedback(err.message);
    PaginationView.clear();
  }
};

const ShowQuickSearchMenuController = function () {
  ModalView.showModal();
};

const init = () => {
  // Load Bookmarked recipes from storage
  const { bookmarks } = model.state;
  BookmarksView.render({ bookmarks });

  getRecipesController();
  PaginationView.addHandler(paginationController);
  SearchView.addHandler(SearchRecipesController);
  QuickSearchView.addHandler(SearchRecipesController);
  QuickSearchView.addShowMenuHandler(ShowQuickSearchMenuController);
};
init();
