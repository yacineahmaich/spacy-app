import { REQ_TIMEOUT_SEC } from './config';

const timeout = function () {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(`Request take long time! check your connection 🚨`);
    }, REQ_TIMEOUT_SEC * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout()]);

    if (!res.ok) throw new Error(`Somthing went wrong :( ${res.status}`);

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
