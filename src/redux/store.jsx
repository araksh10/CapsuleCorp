import { createStore } from "redux";
import capAddReducer from "./CapsuleAdder/capAddReducer";

const store = createStore(capAddReducer);

export default store;