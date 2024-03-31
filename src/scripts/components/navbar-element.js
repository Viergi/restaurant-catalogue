class NavbarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <h1>TasteTopia</h1>
      <button id="hamburger">☰</button>
      <ul class="drawer">
        <li><a href="#/">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li>
          <a
            href="https://www.linkedin.com/in/viergi-159344273/"
            target="_blank"
            >About Us</a
          >
        </li>
      </ul>
    </nav>
  `;
  }
}

customElements.define("navbar-element", NavbarElement);
