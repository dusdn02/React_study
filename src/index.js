//기본
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { RecoilRoot} from 'recoil'
// import './index.css';
// import App from './App';
// import Animals from './recoilTest/Animals'
// import Atom from './recoilTest/AtomFamily'
// import Selector from './recoilTest/Selector'
// import ShowcaseLayout from './ReactGridLayout/ShowcaseLayout'
// // import chart from './chart/chart.json'
// import reportWebVitals from './reportWebVitals';

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <ShowcaseLayout />
//     </RecoilRoot>
//   </React.StrictMode>,
//   rootElement
// );

//리액트 그리드 레이아웃
import React from 'react'
import ReactDOM from 'react-dom'
import ShowcaseLayout from './LayoutInChart/ShowcaseLayout'

class ExampleLayout extends React.Component {
    constructor(props){
        super(props)
        this.state = {layout: []}
        this.onLayoutChange = this.onLayoutChange.bind(this)
    }

    onLayoutChange(layout){
        this.setState({layout: layout})
    }

    // stringifyLayout() {
    //     return this.state.layout.map(function(l){
    //         return (
    //             <div className='layoutItem' key={l.i}>
    //                 <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
    //             </div>
    //         )
    //     })
    // }

    render(){
        return (
            <div>
                {/* <div clasName='layoutJSON'> */}
                    {/* Displayed as <code>[x, y, w, h]</code> */}
                    {/* <div className='colums'>{this.stringifyLayout()}</div> */}
                {/* </div> */}
                <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
            </div>
        )
    }
}

const contentDiv = document.getElementById('root')
const gridProps = window.gridProps || {}
ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv)

//chart
// import React from 'react'
// import ReactDOM from 'react-dom'

// import App from './chart/App'

// ReactDOM.render(<App />, document.getElementById('root'))