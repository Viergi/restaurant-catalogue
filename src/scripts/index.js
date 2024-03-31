/* eslint-disable import/no-extraneous-dependencies */
import "regenerator-runtime"; /* for async await transpile */
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "../styles/main.scss";

import "./components/navbar-element";
import "./components/loading-skeleton";
import "./components/restaurant-list";
import "./components/feedback-list";
import "./components/restaurant-detail";
import "./components/footer-element";

import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.getElementById("hamburger"),
  drawer: document.querySelector(".drawer"),
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
