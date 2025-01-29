import InitialState from "./InitialState";
import { CADD } from "./ActionTypes";

const nextID = (capsule) => {
    const maxId = capsule.reduce((maxId, capsule) => {Math.max(capsule.id, maxId);}, -1);
    return maxId + 1;
}

const capAddReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CADD:
            return [
                ...state,
                {
                    id: nextID(state),
                    capsuleName: action.payload,
                    capsuleDescription: action.payload,
                }
            ]
    
        default:
            return state;
    }
}

export default capAddReducer;