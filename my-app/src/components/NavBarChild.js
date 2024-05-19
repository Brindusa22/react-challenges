import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <form>
            <label htmlFor = "username">Username:</label>
            <input placeholder="username" id="username"/>
        
            <label htmlFor = "password">Password:</label>
            <input placeholder="password" id="password"/>
            <button  onClick={props.handleClick}>Submit</button>
        </form>
        ) : (
            <button onClick={props.handleClick}>Log in</button>
        )}
    </div>
  )
}

export default NavBarChild