import {
  API_KEY,
  API_URL,
  RECOMMANDED_RECIPES_PAGES,
  REC_PER_PAGE,
} from '../config';
import { getJSON } from '../helpers';

export const state = {
  recipes: [],
  bookmarks: [],
  search: {
    query: '',
    totalResults: 0,
  },
  pagination: {
    num_pages: 0,
    current: 1,
  },
};

export const getRecipes = async function () {
  try {
    if (state.search.query) return;

    const url = `${API_URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`;

    const data = await getJSON(url);
    state.recipes = data.results;
    state.pagination.num_pages = RECOMMANDED_RECIPES_PAGES;
  } catch (err) {
    throw err;
  }
};

export const getSearchResults = async function () {
  try {
    if (!state.search.query) return;

    const offset = (state.pagination.current - 1) * REC_PER_PAGE;
    const url = `${API_URL}complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&offset=${offset}&query=${state.search.query}`;

    const data = await getJSON(url);

    state.recipes = data.results;
    state.search.totalResults = data.totalResults;
    state.pagination.num_pages = Math.ceil(data.totalResults / REC_PER_PAGE);
  } catch (err) {
    throw err;
  }
};

const init = () => {
  const storage = JSON.parse(localStorage.getItem('bookmarks'));

  if (!storage) return;

  state.bookmarks = storage;
};
init();
