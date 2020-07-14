import React from 'react'
import './signup.css';

export default function signup() {
    return (
        <div  >
            <h1>Sign up page</h1>
            <form className="container">
                <label>Username</label>
                <input type="text"  />
                <label>Email</label>
                <input type="text"  />
                <label>Password</label>
                <input type="password"  />
            </form>
        </div>
    )
}
