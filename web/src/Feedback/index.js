import React, { Component } from 'react'

class Feedback extends Component {
    submitForm(e) {
        e.preventDefault()

    fetch(process.env.REACT_APP_API_URL + '/message', {
      method: 'POST',
            body: new FormData(e.target)
    })
        .then(res => res.json())
        .then(res => alert(res.message))
        .catch(err => console.error(err))
  }

  render () {
    return (
      <form onSubmit={this.submitForm}>
        <h1>Форма обратной связи</h1>
        <div><input type='text' placeholder='Ваше имя' name='name'/></div>
        <div><input type='phone'placeholder='Ваш телефон' name='phone'/></div>
        <button type='submit'>Связаться</button>
      </form>
    )
  }
}

export default Feedback
