import { incBonus, incByAmt} from "../actions/index.js";

export function bonusReducerFunc(state = { points: 0 }, action){
    switch(action.type){
        case incByAmt:
            if(action.payload >= 100){
                return { points: Math.round(state.points + action.payload/100)};
            }
            return state;
        case incBonus:
            return { points: state.points + 1 };

        default:
            return state;
    }
}
