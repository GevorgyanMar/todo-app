import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../todos/todoHeader/header.css'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      setText('');
    }
  }

  return (
    <header className="header">
      <h5>Welcome!</h5>
      <p>To get started, add some items to your list:</p>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}

export default Header;
