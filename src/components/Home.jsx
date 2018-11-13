import React, {Component} from 'react'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            mail: ''
        }
    }
    
    onChangeInput = e => this.setState({mail: e.target.value})

    sendMail = e => {
        e.preventDefault()
        console.log('Enviando mail!!')
    }

    render = () =>
        <div className='home-container'>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <input 
                type='text' 
                className='home-input' 
                placeholder="e-mail" 
                onChange={this.onChangeInput}
            >
            </input>
            <button className='home-button' onClick={this.sendMail}>
                Submit
            </button>
            <h3 className='home-h3'>
                INAGURATION: 2019
            </h3>
        </div>
}

export default Home