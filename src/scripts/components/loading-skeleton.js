class LoadingSkeleton extends HTMLElement {
  connectedCallback() {
    const mode = this.getAttribute("mode");
    if (mode == "1") {
      this.firstModePageLoader();
    } else if (mode == "2") {
      this.secondModePageLoader();
    }
  }

  firstModePageLoader() {
    this.innerHTML = `
    <div class="loader-container">
     <div class="loader-box"></div>
     <div class="loader-box"></div>
     <div class="loader-box"></div>
     <div class="loader-box"></div>
    </div>
    `;
  }

  secondModePageLoader() {
    this.innerHTML = `
    <div class="loader-container">
        <div class="loader-title"></div>
        <div class="loader-image"></div>
        <div class="loader-description"></div>
    </div>`;
  }
}

customElements.define("loading-skeleton", LoadingSkeleton);
