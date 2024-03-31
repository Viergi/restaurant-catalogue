import RestaurantSource from "../../data/restaruant-source";
import FavoriteRestaurantIdb from "../../data/restaurant-favorite-idb";
import UrlParser from "../../routes/url-parser";
import CommentInitiator from "../../utils/comment-initiator";
import FavoriteInitiator from "../../utils/favorite-button-presenter";
import skipToContentInitiator from "../../utils/skipContent-initiator";

const Detail = {
  async render() {
    return `
        <restaurant-detail>
          <loading-skeleton mode="2"></loading-skeleton>
        </restaurant-detail>
        <div class="favorite_container"></div>
        <form class="comment_container" >
          <div>
            <label for="name">Nama</label>
            <input id="name" autocomplete="off" placeholder="John etc." />
          </div>
          <div>
            <label for="comment">Comment</label>
            <textarea id="comment" placeholder="Comment here"></textarea>
          </div>
          <button id="submit-review" type="submit">Comment</button>
        </form>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainerElement =
      document.querySelector("restaurant-detail");
    const favoriteContainerElement = document.querySelector(
      ".favorite_container"
    );

    skipToContentInitiator.init(restaurantContainerElement);

    CommentInitiator.init({
      form: document.querySelector(".comment_container"),
      id: url.id,
    });

    const renderRestaurant = (data) => {
      restaurantContainerElement.restaurant = data;
      FavoriteInitiator.init({
        favoriteButtonContainer: favoriteContainerElement,
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: data.id,
          name: data.name,
          description: data.description,
          pictureId: data.pictureId,
          city: data.city,
          rating: data.rating,
        },
      });
    };
    const fallbackrestaurant = (message) => {
      restaurantContainerElement.renderError(message);
    };

    try {
      const dataRestaurant = await RestaurantSource.detailRestaurant(url.id);
      renderRestaurant(dataRestaurant);
    } catch (message) {
      fallbackrestaurant(message);
    }
  },
};

export default Detail;
