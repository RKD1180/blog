import {
  GETALLBLOG,
  SEARCHWITHAUTHOR,
  SEARCHWITHCATEGORY,
  SEARCTEXT,
} from "./actionType";

export const getAllBlogs = () => {
  return {
    type: GETALLBLOG,
  };
};
export const searchWithCategory = (category) => {
  return {
    type: SEARCHWITHCATEGORY,
    payload: category,
  };
};
export const searchWithAuthor = (author) => {
  return {
    type: SEARCHWITHAUTHOR,
    payload: author,
  };
};

export const searchText = (searchText) => {
  return {
    type: SEARCTEXT,
    payload: searchText,
  };
};
