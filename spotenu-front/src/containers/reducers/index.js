import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import credentials from "./credentials"
import { allBands } from "./band";
import { musicalGenres } from './musicalGenres';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    user: credentials,
    allBands,
    musicalGenres
  });