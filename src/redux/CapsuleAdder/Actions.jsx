import { CADD } from './ActionTypes';

export const cadd = (capsuleName, capsuleDescription) => {
    return {
        type: CADD,
        payload: {
            capsuleName,
            capsuleDescription
        }
    }
}