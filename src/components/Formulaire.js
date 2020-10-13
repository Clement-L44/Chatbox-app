import React, { Component } from 'react'

class Formulaire extends Component {

    state = {
        message: '',
        length: this.props.length

    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo,
            message : this.state.message
        }
        addMessage(message)

        //reset

        this.setState({message:'', length})
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("Submit")
    }

    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message, length})
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea value={this.message} onChange={this.handleChange} required maxLength={this.props.length}></textarea>
                <div className='info'>
                    {this.state.length}
                </div>
                <button type='submit'>
                    Envoyer!
                </button>
            </form>
        )
    }
}

export default Formulaire