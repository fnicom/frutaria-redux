import { reducers as frutaReducers } from "./fruta.reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    frutaReducers
});

export { reducers }