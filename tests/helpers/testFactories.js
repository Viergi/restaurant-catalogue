/* eslint-disable import/prefer-default-export */

import FavoriteInitiator from "../../src/scripts/utils/favorite-button-presenter";
import FavoriteRestaurantIdb from "../../src/scripts/data/restaurant-favorite-idb";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteInitiator.init({
    favoriteButtonContainer: document.querySelector(".favorite_container"),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
