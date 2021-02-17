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
// import Counter from './recoilTest/Counter'
// import TodoList from './TodoList/App'
// import NameSelector from './recoilTest/NameSelector'
// import reportWebVitals from './reportWebVitals';
// import TodoListTemplate from './TodoList/components/TodoListTemplate';

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   </React.StrictMode>,
//   rootElement
// );

//리액트 그리드 레이아웃
// import React from 'react'
// import ReactDOM from 'react-dom'
// import ShowcaseLayout from './LayoutInChart/ShowcaseLayout'

// class ExampleLayout extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {layout: []}
//         this.onLayoutChange = this.onLayoutChange.bind(this)
//     }

//     onLayoutChange(layout){
//         this.setState({layout: layout})
//     }

//     // stringifyLayout() {
//     //     return this.state.layout.map(function(l){
//     //         return (
//     //             <div className='layoutItem' key={l.i}>
//     //                 <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
//     //             </div>
//     //         )
//     //     })
//     // }

//     render(){
//         return (
//             <div>
//                 {/* <div clasName='layoutJSON'> */}
//                     {/* Displayed as <code>[x, y, w, h]</code> */}
//                     {/* <div className='colums'>{this.stringifyLayout()}</div> */}
//                 {/* </div> */}
//                 <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
//             </div>
//         )
//     }
// }

// const contentDiv = document.getElementById('root')
// const gridProps = window.gridProps || {}
// ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv)

//chart
// import React from 'react'
// import ReactDOM from 'react-dom'

// import App from './chart/App'

// ReactDOM.render(<App />, document.getElementById('root'))

//리덕스
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './reduxTest/App'
// import './index.css'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducers from './reduxTest/modules'

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

//주소록
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import  { createStore } from 'redux'
import reducers from './modules'
import { Provider } from 'react-redux'
import './index.css'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)