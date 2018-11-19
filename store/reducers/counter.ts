import { Action } from "redux";
import { IAppState } from "../../components/counter/container";

const exampleInitialState: IAppState = {
    count: 0
};

export const counterReduser = (state = exampleInitialState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case 'DECREMENT':
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case 'RESET':
            return Object.assign({}, state, {
                count: exampleInitialState.count
            });
        default:
            return state
    }
};