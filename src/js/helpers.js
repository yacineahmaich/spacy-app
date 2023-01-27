import { REQ_TIMEOUT_SEC } from './config';

const timeout = function () {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(`Request take long time! check your connection`);
    }, REQ_TIMEOUT_SEC * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout()]);

    // reach requests limit from the API
    if (!res.ok && res.status === 402)
      throw new Error(
        `We reach the limit of requests today ! Please try again later`
      );

    if (!res.ok && res.status === 404)
      throw new Error(`Recipe Not Found  ! Please try again`);

    if (!res.ok) throw new Error(`Something went wrong ! Please try again`);

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const getRecipeId = function () {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  return params.recipe_id;
};
