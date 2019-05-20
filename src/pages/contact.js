import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  handleInputChange = ev => {
    const { target } = ev
    const { value, name } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    // const { name } = this.state
    // console.log(`Thank you ${name} for contacting us!!`)
  }

  render() {
    const { name, email, message } = this.state
    return (
      <Layout>
        <SEO title="Contact" keywords={[`Angela Ayd Photography`, `contact`]} />
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'slategrey',
            fontSize: '0.8rem',
            textTransform: 'uppercase'
          }}>Get A Quote</p>
          <h1>Contact Us</h1>
          <p style={{
            color: 'slategrey'
          }}>Lorem ipsum dolor amet celiac synth microdosing health goth raclette +1 master cleanse kogi. PBR&amp;B typewriter mixtape gastropub tbh cronut bushwick lo-fi whatever thundercats messenger bag taxidermy cardigan.</p>
          <form 
            id="messageForm" 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
            onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Name *"
              style={{
                flex: '1 1 45%',
                border: 'none',
                borderBottom: '1px dashed grey',
                margin: '5px'
              }}
              value={name}
              onChange={this.handleInputChange}
            />
            <input 
              type="text" 
              id="email"
              name="email" 
              placeholder="Email *"
              style={{
                flex: '1 1 45%',
                border: 'none',
                borderBottom: '1px dashed grey',
                margin: '5px'
              }}
              value={email}
              onChange={this.handleInputChange}
            />
            <textarea
              id="message"
              name="message" 
              form="messageForm"
              placeholder="Message *"
              rows="4"
              cols="50"
              style={{
                flex: '1 0 100%',
                border: 'none',
                borderBottom: '1px dashed grey',
                margin: '5px'
              }}
              value={message}
              onChange={this.handleInputChange}
            ></textarea>
            <button 
              type="submit"
              style={{
                border: 'none',
                backgroundColor: 'slategrey',
                color: 'white',
                padding: '5px 20px',
                margin: '10px'
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Contact