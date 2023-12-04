import React from 'react';
import './Form.css'
import illustration from '../assets/illustration.jpg'
function Form() {
  return (
    <main>
        <div className="intro">
        <div>
            <h1>Take Control <br/>of <span className="accent">Your Money</span>
            </h1>
            <p>Personal budgeting is the secret to financial <br/> freedom. Start your journey today.</p>
            <form method="post" action="/projects/react-router-budget-app/?index">
                <input type="text" name="userName" required="" placeholder="What is your name?" aria-label="Your Name" autocomplete="given-name"/>
                    <input type="hidden" name="_action" value="newUser"/>
                    <button type="submit" className="btn "><span>Create Account</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20"><path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path></svg>
                    </button>
                    </form>
            </div>
            <img src={illustration} alt="Person with money" width="600"/>
            </div>
    </main>
  )
}

export default Form