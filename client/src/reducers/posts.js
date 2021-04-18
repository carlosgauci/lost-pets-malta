const postReducer = (posts = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;

    case "CREATE_POST":
      return [...posts, action.payload];

    case "UPDATE_POST":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return posts;
  }
};

export default postReducer;
