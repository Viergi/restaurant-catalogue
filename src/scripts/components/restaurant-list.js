import "./restaurant-card";

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `Whoops, Something went wrong. `;
    errorElement.setAttribute("class", "error");
    const section = document.querySelector(".restaurant_section");
    section.append(errorElement);
  }

  renderFavorite(message) {
    this.innerHTML = "";
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `No restaurants have been added to your favorites list yet`;
    errorElement.setAttribute("class", "error");
    const section = document.querySelector(".restaurant_section");
    section.append(errorElement);
  }

  render() {
    this.innerHTML = "";
    this._restaurants.forEach((restaurant) => {
      const restaurantCardElement = document.createElement("restaurant-card");
      restaurantCardElement.restaurant = restaurant;
      this.appendChild(restaurantCardElement);
    });
  }
}

customElements.define("restaurant-list", RestaurantList);
