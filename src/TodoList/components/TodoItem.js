import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component{
    render(){
        const { text, checked, id, color, onToggle, onRemove } = this.props;

        console.log("id="+id)

        return(
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation()
                    onRemove(id)}
                }>&times;</div>
                <div style={{color}} className={`todo-text ${checked ? 'checked' : ''}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}

export default TodoItem