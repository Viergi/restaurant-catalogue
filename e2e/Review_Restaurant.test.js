/* eslint-disable no-undef */
const assert = require("assert");

Feature("Review a Restaurant");

Scenario("Comment a restaurant", async ({ I }) => {
  I.amOnPage("/");

  I.waitForElement(".restaurant_card", 5);
  I.seeElement(".restaurant_card");
  const firstRestaurant = locate(".restaurant_card").first();

  I.click(firstRestaurant);
  I.waitForElement(".comment_container");

  const name = "Testing";
  const comment = "Testing E2E";

  I.fillField(`#name`, name);
  I.fillField(`#comment`, comment);

  I.click("#submit-review");

  I.seeElement(".review_name");
  I.seeElement(".review_comment");

  const lastReviewerName = locate(".review_name").last();
  const lastReviewerComment = locate(".review_comment").last();

  const lastReviewerNameText = await I.grabTextFrom(lastReviewerName);
  const lastReviewerCommentText = await I.grabTextFrom(lastReviewerComment);

  assert.strictEqual(lastReviewerNameText, name);
  assert.strictEqual(lastReviewerCommentText, comment);
});
