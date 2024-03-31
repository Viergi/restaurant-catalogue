import { afterEach, describe } from "@jest/globals";
import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-favorite-idb";
import { itActsAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";

describe("Favorite Restaurant Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      }
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
