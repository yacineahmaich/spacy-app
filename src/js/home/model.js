import { API_KEY, API_URL, REC_PER_PAGE } from '../config';
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
    const url = `${API_URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&sort=random`;

    const data = await getJSON(url);
    state.recipes = data.results;
  } catch (err) {
    throw err;
  }
};

export const getSearchResults = async function () {
  try {
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
