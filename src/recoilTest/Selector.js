import  React from 'react'
import {
    RecoilRoot,
    atomFamily,
    atom,
    selector,
    useRecoilState,
    useRecoilValue
} from 'recoil'
import './selectorStyles.css'

const BOX_NUM = 25

const COLORS = {
    RED: 'red',
    BLUE: 'blue',
    WHITE: 'white'
}

const boxState = atomFamily({
    key: 'boxState',
    default: COLORS.WHITE
})

const colorState = atom({
    key: 'colorState',
    default: COLORS.RED
})

const colorCounterState = selector({
    key: 'colorCounterState',
    get: ({ get })=>{
        let counter = { [COLORS.RED]: 0, [COLORS.BLUE]: 0, [COLORS.WHITE]: 0}
        for(let i =0; i< BOX_NUM; i++){
            const box = get(boxState(i))
            counter[box] = counter[box] +1
        }
        return counter
    },
    set: ({ set }) => {
        for(let i =0; i<BOX_NUM; i++){
            set(boxState(i), COLORS.WHITE)
        }
    }
})

const Box = ({ id })=>{
    const [box, setBox] = useRecoilState(boxState(id))
    const color = useRecoilValue(colorState)
    const setColor = () =>{
        setBox(color)
    }
    return <div className='box' style={{ background: box}} onClick={setColor} />
}

const Grid = () =>{
    let boxes = []
    for(let i =0; i< BOX_NUM; i++){
        boxes.push(<Box key={i} className='box' id={i} />)
    }
    return (
        <>
        <h2>Press on boxes to color:</h2>
        <div className='grid'>{boxes}</div>
        </>
    )
}

const ColorPicker = () => {
    const [color, setColor] = useRecoilState(colorState)
    return(
        <div>
            Select ColorPicker
            <button
                className={color === COLORS.RED ? 'selected' : ''}
                onClick={() => setColor(COLORS.RED)}
            >
                Red
            </button>
            <button
                className={color === COLORS.BLUE ? 'selected' : ''}
                onClick={() => setColor(COLORS.BLUE)}
            >
                BLUE
            </button>
            <button
                className={color === COLORS.WHITE ? 'selected' : ''}
                onClick={() => setColor(COLORS.WHITE)}
            >
                White
            </button>
        </div>
    )
}

const Stats = () => {
    const [colorCounter, setColorCounter] = useRecoilState(colorCounterState)

    return(
        <>
            <div className='stats'>
                <div>White: {colorCounter[COLORS.WHITE]}</div>
                <div>Red: {colorCounter[COLORS.RED]}</div>
                <div>Blue: {colorCounter[COLORS.BLUE]}</div>
            </div>
            <div>
                <button onClick={setColorCounter}>Reset</button>
            </div>
        </>
    )
}

export default function App() {
    return (
        <div className='App'>
            <RecoilRoot>
                <ColorPicker />
                <Grid />
                <Stats />
            </RecoilRoot>
        </div>
    )
}