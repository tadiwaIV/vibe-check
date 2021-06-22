import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  HiItems(items) {
    console.log(items)
  }

  render () {
    let items = [
      { id: 0, value: 'Plettenberg Bay' },
      { id: 1, value: 'Port Elizabeth' },
      { id: 2, value: 'Johannesburg' },
      { id: 3, value: 'Cape Town' },
      { id: 4, value: 'Kruger National Park' }
    ]

    return (
      <div>
        <Search items={items} placeholder='Pick your language' />

        <Search items={items}
                className="pick-city"
                placeholder=''
                maxSelected={1}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root'))
export default TestComponent;
