import "./feedback-card";

class feedbackList extends HTMLElement {
  set feedbacks(feedbacks) {
    this._feedbacks = feedbacks;

    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    const errorElement = document.createElement("div");
    errorElement.innerHTML = `Whoops, Something went wrong. `;
    errorElement.setAttribute("class", "error");
    const section = document.querySelector(".feedback_section");
    section.append(errorElement);
  }

  render() {
    this.innerHTML = "";
    this._feedbacks.forEach((feedback, index) => {
      const set =
        window.innerWidth <= 768 ? 4 : window.innerWidth <= 1024 ? 9 : 12;

      if (index + 1 <= set) {
        const feedbackCardElement = document.createElement("feedback-card");
        feedbackCardElement.feedback = feedback;
        this.appendChild(feedbackCardElement);
      }
    });
  }
}

customElements.define("feedback-list", feedbackList);
