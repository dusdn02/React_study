import React from 'react'
import { RecoilRoot, atom, useRecoilState } from  'recoil'

const countState = atom({
    key: 'countState',
    default: 0,
})

function App(){
    return(
        <RecoilRoot>
            <Counter></Counter>
        </RecoilRoot>
    )
}

function Counter() {
    // const [ count, setCount ] = useRecoilState(countState)

    // const addCount = () => {
    //     setCount(count + 1)
    // }

    // const subCount = () => {
    //     setCount(count - 1)
    // }

    // return (
    //     <div>
    //         <button onClick={addCount}>up</button>
    //         <button onClick={subCount}>sub</button>
    //         <p>{count}</p>
    //     </div>
    // )
    const heartState = atom({
        key: 'heartState',
        default: 0,
    });
        const [ heart, setCount ] = useRecoilState(heartState);
        const addCount = () => {
            let property = document.getElementById("heartbutton")
            if(heart%2==0){
                setCount(heart-1)
                property.style.backgroundColor = "#FDFDFD"
            }else{
                setCount(heart+1)
                property.style.backgroundColor = "#E14E4E"
            }
        } 
        return (
            <div>
                <button id="heartbutton" onClick={addCount}>❤️</button>
            </div>
        )
    
}

export default App