import React, { Component} from 'react'

const Problematic = () => {
    throw (new Error('버그가 나타났다!'))
    return(
        <div>

        </div>
    )
}

class Counter extends Component{
    state = {
        number: 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number+1
        })
    }

    handeleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                { this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handeleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter