<<<<<<< HEAD
import React, { Component } from 'react';
import PhoneForm from './component/PhoneForm'
import PhoneInfoList from './component/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ],
    keyword: ''
  }
  handleChange = (e) =>{
    this.setState({
      keyword: e.target.value,
    })
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const {information} = this.state
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) =>{
    const {information} = this.state
    this.setState({
      information: information.map(
        info => id === info.id
        ? {...info, ...data }
        : info
      )
    })
  }
  render() {
    const {information, keyword} = this.state
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    )
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input 
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
=======
import React, { Component } from 'react'

class App extends Component{
  state = {
    count:0
  }

  countUp = ()=>{
    this.setState({
      count: this.state.count +1
    })
  }

  render(){
    return <div className="App">
      <div>{this.state.count}</div>
      <button onClick={this.countUp}>count up!</button>
    </div>
  }
}
export default App
>>>>>>> a830db46c163ddee63b3477b0d85bf7b4790af57
