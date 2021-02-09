import React, {Component} from 'react'

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props){
        super(props)
        console.log('constructor')
    }

    componentWillMount(){
        console.log('componentWillMount (deprecated)')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('sholdComponentUpdate')
        if(nextState.number % 5 === 0) return false
        return true
    }

    componentWillUpdate(nexProps, nexState){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')
    }

    handleIncrease = () => {
        const { number } = this.state
        this.setState({
            number: number + 1
        })
    }

    handeleDecrease = () => {
        this.setState(
            ({number}) => ({
            number: number - 1
        })
        )
    }

    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handeleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter