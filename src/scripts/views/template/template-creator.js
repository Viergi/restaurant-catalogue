const createLikeButtonTemplate = () => `
    <button class="favorite" id="favoriteButton" aria-label="like this restaurant">
        Add to Favorite
    </button>
`;

const createUnlikeButtonTemplate = () => `
    <button class="favorite" id="favoritedButton" aria-label="unlike this restaurant">
        Delete from Favorite
    </button>
`;

export { createLikeButtonTemplate, createUnlikeButtonTemplate };
