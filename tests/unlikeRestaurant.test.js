/* eslint-disable object-curly-newline */
import { afterEach, beforeEach, describe, expect, it } from "@jest/globals";
import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-favorite-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="favorite_container"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the Restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the Restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked Restaurant from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error when user click unlike widget if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Hapus dulu restaurant dari daftar restaurant yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai restaurant
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
