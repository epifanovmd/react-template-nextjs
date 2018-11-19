import React, { Component } from 'react';

interface IMapStateToProps {
    count: number;
}

interface IMapDispatchToProps {
    increment(): void;
    decrement(): void;
    reset(): void;
}

class Counter extends Component<IMapStateToProps & IMapDispatchToProps> {

    render() {
        const {count} = this.props;
        return (
            <div>
                <h1>Count: <span>{count}</span></h1>
                <button onClick={this.props.decrement}>-1</button>
                <button onClick={this.props.increment}>+1</button>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter
