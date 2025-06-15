import { useState, forwardRef, useImperativeHandle } from 'react'

const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: 'rgb(0, 123, 255)',
    color: 'white',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    height: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
  };


  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button style={buttonStyle} onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
      </div>
    </div>
  )
})

export default Togglable