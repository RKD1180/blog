
import { GETALLBLOG, SEARCHWITHCATEGORY, SEARCTEXT } from "./actionType";
import initialState from "./initialState";
import { SEARCHWITHAUTHOR } from "./actionType";

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHWITHCATEGORY:
      return state.filter(
        (blog) =>
          blog.category.toLocaleLowerCase() ===
          action.payload.toLocaleLowerCase()
      );
    case SEARCHWITHAUTHOR:
      console.log(action.payload);
      return state.filter(
        (blog) =>
          blog.author.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
      );

    case GETALLBLOG:
      return (state = initialState);

    case SEARCTEXT:
      return state.filter((blog) => {
        return blog.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase());
      });

    default:
      return state;
  }
};

export default blogReducer;
