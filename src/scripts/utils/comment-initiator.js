import RestaurantSource from "../data/restaruant-source";

const CommentInitiator = {
  init({ form, id }) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.elements["name"].value;
      const comment = form.elements["comment"].value;
      if (name == "" || comment == "") {
        alert("Nama atau comment tidak boleh kosong");
        return;
      }
      this._postReview({ name, comment, id });
    });
  },

  async _postReview({ name, comment, id }) {
    const response = await RestaurantSource.addReviewRestaurant({
      id,
      name,
      review: comment,
    });
    if (response.message == "success") {
      location.reload();
    }
  },
};

export default CommentInitiator;
