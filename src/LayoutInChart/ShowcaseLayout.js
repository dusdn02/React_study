import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Responsive, WidthProvider} from 'react-grid-layout'
import App from './App'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

export default class ShowcaseLayout extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            currentBreakpoint: 'lg',
            compactType: 'vertical',
            mounted: false,
            layouts: {lg: props.initialLayout}
        }

        this.onBreakpointChange = this.onBreakpointChange.bind(this)
        this.onCompactTypeChange = this.onCompactTypeChange.bind(this)
        this.onLayoutChange = this.onLayoutChange.bind(this)
        this.onNewLayout = this.onNewLayout.bind(this)
    }

    conmponentDidMount(){
        this.setState({mounted: true})
    }

    generateDOM(){
        return _.map(this.state.layouts.lg, function(l, i){
            return(
                <div key={i} className={l.static ? 'static': ''}>
                    <App />
                </div>
            )
        })
    }

    onBreakpointChange(breakpoint){
        this.setState({
            currentBreakpoint: breakpoint
        })
    }

    onCompactTypeChange(){
        const { compactType: oldCompactType } = this.state
        const compactType =
            oldCompactType === 'horizontal'
            ? 'vertical'
            : oldCompactType === "vertical"
                ? null
                : 'horizontal'
        this.setState({ compactType })
    }

    onLayoutChange(layout, layouts){
        this.props.onLayoutChange(layout, layouts)
    }

    onNewLayout(){
        this.setState({
            layouts: {lg: generateLayout() }
        })
    }
    
    render(){
        return(
            <div>
                <div>
                    Current Breakpoint: {this.state.currentBreakpoint}({
                        this.props.cols[this.state.currentBreakpoint]
                    }{' '}
                    columns)
                </div>
                <div>
                    Compaction type:{' '}
                    {_.capitalize(this.state.compactType) || 'No Compaction'}
                </div>
                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={this.state.layouts}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    measureBeforeMount={false}
                    useCssTransforms={this.state.mounted}
                    compactType={this.state.compactType}
                    preventCollision={!this.state.compactType}
                >
                    {this.generateDOM()}
                </ResponsiveReactGridLayout>
            </div>
        )
    }
}

ShowcaseLayout.propTypes = {
    onLayoutChange: PropTypes.func.isRequired
}

ShowcaseLayout.defaultProps = {
    className: 'layout',
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: generateLayout()
}

function generateLayout(){
    return _.map(_.range(0, 25), function(item, i){
        var y = Math.ceil(Math.random() * 4) +1
        if(i===0){
            return{
                x:(_.random(0, 5)*2)%12,
                y:Math.floor(i/6)*y,
                w:8,
                h:14,
                i:i.toString()
            }
        }//차트
        else{
            return{
                x:(_.random(0, 5)*2)%12,
                y:Math.floor(i/6)*y,
                w:2,
                h:y,
                i:i.toString()
            }
    }
    })
}