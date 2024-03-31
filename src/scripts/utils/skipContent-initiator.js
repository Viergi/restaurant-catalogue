const skipToContentInitiator = {
  init(content) {
    const skipToContent = document.querySelector(".skip_to_content");
    skipToContent.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        content.scrollIntoView();
        skipToContent.blur();
      }
    });
  },
};

export default skipToContentInitiator;
