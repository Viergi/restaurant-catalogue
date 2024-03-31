import FavoriteRestaurantIdb from "../../data/restaurant-favorite-idb";
import skipToContentInitiator from "../../utils/skipContent-initiator";

const Favorite = {
  async render() {
    return `
      <section class="restaurant_section" id="restaurant">
        <h2>Favorite Restaurants</h2>
        <restaurant-list>
          <loading-skeleton mode="1"></loading-skeleton>
        </restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurantSectionElement = document.querySelector(
      ".restaurant_section"
    );

    skipToContentInitiator.init(restaurantSectionElement);

    const restaurantCardELement = document.querySelector("restaurant-list");
    const dataRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const renderRestaurant = (data) => {
      restaurantCardELement.restaurants = data;
    };
    const fallbackRestaurant = () => {
      restaurantCardELement.renderFavorite();
    };

    if (dataRestaurant.length > 0) {
      renderRestaurant(dataRestaurant);
    } else {
      fallbackRestaurant();
    }
  },
};

export default Favorite;
