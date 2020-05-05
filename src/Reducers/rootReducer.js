import {teamsReducer} from "./apiReducer";
import {gameReducer} from "./currentGameReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({teams : teamsReducer, game : gameReducer});

export default rootReducer;
