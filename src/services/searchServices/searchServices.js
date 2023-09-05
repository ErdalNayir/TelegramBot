import { get } from "./requests.js";

export const getSearchResults = (searchString) => get(searchString);
