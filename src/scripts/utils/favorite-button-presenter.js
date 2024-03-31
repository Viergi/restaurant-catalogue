import {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
} from "../views/template/template-creator";

const FavoriteInitiator = {
  async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaruant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaruant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createLikeButtonTemplate();
    const favoriteButton = document.querySelector("#favoriteButton");
    favoriteButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createUnlikeButtonTemplate();
    const favoriteButton = document.querySelector("#favoritedButton");
    favoriteButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteInitiator;
