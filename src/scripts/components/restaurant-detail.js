import CONFIG from "../globals/config";

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;

    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="restaurant_title">
      <h2 class="restaurant_name">${this._restaurant.name}</h2>
      <p class="restaurant_categories">${this._restaurant.categories.map(
        (category) => {
          return ` ${category.name}`;
        }
      )}</p>
    </div>
    <img
      src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}"
      alt="Picture of restaurant"
    />
    <div class="restaurant_container">
      <div class="restaurant_detail">
        <h3>Detail</h3>
        <div class="restaurant_location">
          <h4>Location</h4>
          <span>${this._restaurant.city} , ${this._restaurant.address}</span>
        </div>
        <span class="restaurant_rating">Rating : ${
          this._restaurant.rating
        } ⭐</span>
        <div class="restaurant_description">
          <h4>Description</h4>
          <p>
            ${this._restaurant.description}
          </p>
        </div>
        <div class="restaurant_menu">
          <h4>Menu</h4>
          <div class="foods">
            <span>Foods</span>
            <ul id="food">
            </ul>
          </div>
          <div class="drinks">
            <span>Drinks</span>
            <ul id="drink">
            </ul>
          </div>
        </div>
      </div>
      <div class="restaurant_reviews">
        <h3>Reviews</h3>
        <div class="review_container" tabindex="0">
        </div>
      </div>
    </div>
  `;

    this.afterRender();
  }

  afterRender() {
    this._restaurant.menus.foods.forEach((food) => {
      const markUp = `<li>${food.name}</li>`;
      document.getElementById("food").insertAdjacentHTML("beforeend", markUp);
    });

    this._restaurant.menus.drinks.forEach((drink) => {
      const markUp = `<li>${drink.name}</li>`;
      document.getElementById("drink").insertAdjacentHTML("beforeend", markUp);
    });

    this._restaurant.customerReviews.forEach((customer) => {
      const markUp = `
          <div class="review">
            <h5 class="review_name">${customer.name}</h5>
            <p class="review_comment">${customer.review}</p>
            <span class="review_date">${customer.date}</span>
          </div>
      `;
      document
        .querySelector(".review_container")
        .insertAdjacentHTML("beforeend", markUp);
    });
  }

  renderError() {
    this.innerHTML = "";
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `Whoops, Something went wrong. &#128531; `;
    errorElement.setAttribute("class", "error");
    const contentElement = document.querySelector("#content");
    contentElement.insertBefore(errorElement, contentElement.children[0]);
  }
}

customElements.define("restaurant-detail", RestaurantDetail);
