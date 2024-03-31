import CONFIG from "../globals/config";

class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <a class="restaurant_card" tabindex="0" href="#/detail/${
          this._restaurant.id
        }" key="${this._restaurant.id}">
          <h3 class="restaurant_card_location">${this._restaurant.city}</h3>
          <img
            src=${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}
            alt="Picture of restaurant"
            class="lazyload"
          />
          <span>
            <p class="restaurant_card_rating">Rating : ${
              this._restaurant.rating
            }</p>
            <p class="restaurant_card_name">${this._restaurant.name}</p>
            <p class="restaurant_card_description">
            ${this._restaurant.description}
            </p>
          </span>
        </a>
        `;
  }
}

customElements.define("restaurant-card", RestaurantCard);
