import React, { Component } from 'react'
import './App.css'

import Formulaire from './components/Formulaire' 
import Message from './components/Message'  

class App extends Component {

  state = {
    messages:{},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`messgage-${Date.now()}`] = message
    this.setState({message})
  }

  render () {

    const messages = Object.keys(this.state.messages).map(key=>(<Message message={this.state.messages[key].message} pseudo={this.state.messages[key].pseudo}></Message>))

    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <Message></Message>
          </div>
        </div>
        <Formulaire length={140} pseudo={this.state.pseudo} addMessage={this.addMessage}></Formulaire>
      </div>
      
    )
  }
}

export default App
