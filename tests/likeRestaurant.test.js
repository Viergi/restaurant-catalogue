// eslint-disable-next-line object-curly-newline
import { beforeEach, describe, expect, it } from "@jest/globals";
import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-favorite-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="favorite_container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    const Restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(Restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a Restaurant when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
