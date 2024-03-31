/* eslint-disable no-undef */
const assert = require("assert");

Feature("Liking Restaurant");

Scenario("Showing empty liked restaurant", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.see("No restaurants have been added to your favorites list yet", ".error");
});

Scenario("Liking one restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".restaurant_card", 5);
  I.seeElement(".restaurant_card");
  const firstRestaurant = locate(".restaurant_card").first();
  const firstRestaurantName = locate(".restaurant_card_name").first();
  const firstRestaurantNameText = await I.grabTextFrom(firstRestaurantName);

  I.click(firstRestaurant);

  I.waitForElement("#favoriteButton", 5);
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".restaurant_card", 5);
  I.seeElement(".restaurant_card");
  const likedRestaurantName = await I.grabTextFrom(".restaurant_card_name");

  assert.strictEqual(firstRestaurantNameText, likedRestaurantName);
});

Scenario("Unliking one restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".restaurant_card", 5);
  I.seeElement(".restaurant_card");
  const firstRestaurant = locate(".restaurant_card").first();
  I.click(firstRestaurant);

  I.waitForElement("#favoriteButton", 5);
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");

  I.waitForElement(".restaurant_card", 5);
  const likedRestaurant = locate(".restaurant_card").first();
  I.click(likedRestaurant);

  I.waitForElement("#favoritedButton", 5);
  I.click("#favoritedButton");

  I.amOnPage("/#/favorite");
  I.see("No restaurants have been added to your favorites list yet", ".error");
});
