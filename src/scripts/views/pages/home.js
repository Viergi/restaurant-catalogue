import RestaurantSource from "../../data/restaruant-source";
import skipToContentInitiator from "../../utils/skipContent-initiator";

const Home = {
  async render() {
    return `
        <section class="hero_section">
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="/images/heros/hero-image_1-small.jpg"
              class="lazyload"
            />
            <img
              src="/images/heros/hero-image_1-large.jpg"
              alt="image of a chef making food"
              class="lazyload"
            />
          </picture>
          <h2>Menelusuri Dunia Kuliner yang Memikat dan Menyentuh Selera!</h2>
          <p>
            Mari kita jelajahi bersama ragam cita rasa yang menggugah selera dan temukan pengalaman makanan yang tak terlupakan
          </p>
        </section>
        <section class="restaurant_section" id="restaurant">
          <h2>Explore Restaurant</h2>
          <restaurant-list>
            <loading-skeleton mode="1"></loading-skeleton>
          </restaurant-list>
        </section>
        <section class="feedback_section">
          <h2>Feedback</h2>
          <feedback-list>
            <loading-skeleton mode="1"></loading-skeleton>
          </feedback-list>
        </section>
          `;
  },

  async afterRender() {
    const restaurantSectionElement = document.querySelector(
      ".restaurant_section"
    );

    skipToContentInitiator.init(restaurantSectionElement);

    const restaurantCardELement = document.querySelector("restaurant-list");
    const feedbackCardELement = document.querySelector("feedback-list");
    const restaurantList = async () => {
      try {
        const data = await RestaurantSource.listRestaurant();
        renderRestaurant(data);
      } catch (message) {
        fallbackRestaurant(message);
      }
    };

    const feedbackList = async () => {
      try {
        const responseFeedback = await fetch("./data/DATAFEEDBACK.json");
        const data = await responseFeedback.json();
        renderFeedback(data.feedbacks);
      } catch (message) {
        fallbackFeedback(message);
      }
    };

    const renderRestaurant = (data) => {
      restaurantCardELement.restaurants = data;
    };
    const fallbackRestaurant = (message) => {
      restaurantCardELement.renderError(message);
    };
    const renderFeedback = (data) => {
      feedbackCardELement.feedbacks = data;
    };
    const fallbackFeedback = (message) => {
      feedbackCardELement.renderError(message);
    };
    restaurantList();
    feedbackList();
  },
};

export default Home;
