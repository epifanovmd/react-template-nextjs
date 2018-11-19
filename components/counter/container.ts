import { connect } from "react-redux";
import { Dispatch } from "redux";
import Counter from './index'
import { decrementCount, incrementCount, resetCount } from "../../store/actions/actionCounter";

interface IMapDispatchToProps {
    increment(): void;
    decrement(): void;
    reset(): void;
}

export interface  IAppState {
    count: number;
}
function mapStateToProps(state: IAppState) {
    const {count} = state;
    return {count};
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>): IMapDispatchToProps {
    return {
        increment: () => { dispatch(incrementCount()) },
        decrement: () => { dispatch(decrementCount()) },
        reset: () => { dispatch(resetCount()) },
    }
}

// tslint:disable-next-line:variable-name
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);