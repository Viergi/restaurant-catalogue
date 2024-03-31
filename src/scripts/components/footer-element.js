class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Cara mudah mengeksplor restoran</p>
      <p>Copyright &copy; 2024 - TasteTopia</p>
    </footer>
  `;
  }
}

customElements.define("footer-element", FooterElement);
