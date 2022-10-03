import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import ListElement from '../ListElement'

import './index.css'

class CharacterCountApp extends Component {
  state = {inputList: [], inputElement: ''}

  onChangeInput = event => {
    this.setState({inputElement: event.target.value})
  }

  onClickAddElement = () => {
    const {inputElement} = this.state
    const name = inputElement
    const count = inputElement.length
    const id = uuid()

    this.setState(prevState => ({
      inputList: [...prevState.inputList, {id, name, count}],
      inputElement: '',
    }))
  }

  render() {
    const {inputList, inputElement} = this.state

    return (
      <div className="app-container">
        <div className="two-page-container">
          <div className="yellow-page">
            <div className="yellow-page-data-container">
              <h1 className="count-heading">
                Count the Characters like a <br /> Boss...
              </h1>
            </div>
            <div className="list-container">
              {inputList.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="imageElement"
                />
              ) : (
                inputList.map(eachItem => (
                  <ListElement key={eachItem.id} ListItemData={eachItem} />
                ))
              )}
            </div>
          </div>
          <div className="dark-container">
            <h1 className="heading">Character Counter</h1>
            <form className="input-container">
              <input
                type="text"
                value={inputElement}
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
              />
              <button
                type="button"
                className="btn-element"
                onClick={this.onClickAddElement}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCountApp
