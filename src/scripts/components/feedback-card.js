class FeedbackCard extends HTMLElement {
  set feedback(feedback) {
    this._feedback = feedback;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="feedback" key="${this.feedback_user}">
                <span class="feedback_name">${this._feedback.user}</span>
                <p class="feedback_text">
                " ${this._feedback.komentar} "
                </p>
            </div>
          `;
  }
}

customElements.define("feedback-card", FeedbackCard);
