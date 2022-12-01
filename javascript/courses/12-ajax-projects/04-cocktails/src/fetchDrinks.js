import { showLoading } from './toggleLoading.js';

const fetchDrinks = async (url) => {
  showLoading();

  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
