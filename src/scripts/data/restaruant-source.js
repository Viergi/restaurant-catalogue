import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewRestaurant({ id, name, review }) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, review }),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, requestOptions);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
