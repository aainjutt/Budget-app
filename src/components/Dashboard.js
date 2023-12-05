import React from 'react';
import { Link } from 'react-router-dom';
import wave from '../assets/wave.svg';

import home from '../assets/home.png';
import './Dashboard.css';


function Dashboard() {
  return (
    <div>
      <nav>
        {/* Add a link to the Dashboard */}
        <Link aria-label="Go to home" aria-current="page" className="active" href="/projects/react-router-budget-app/">
          <img src={home} alt="" height="30" className='img'/>
          <span>HomeBudget</span>
        </Link>
        <form method="post" action="/projects/react-router-budget-app/logout">
          <button type="submit" className="btn-3">
            <span>Delete User</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </form>
      </nav>
      <main>
        <div className="dashboard">
            <h1>Welcome back, <span className="accent">aain134@gmail.com</span>
            </h1>
            <div className="grid-sm">
                <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <div className="form-wrapper">
                    <h2 className="h3">Create budget</h2>
                    <form method="post" action="/projects/react-router-budget-app/?index" className="grid-sm">
                        <div className="grid-xs"><label for="newBudget">Budget Name</label>
                        <input type="text" name="newBudget" id="newBudget" placeholder="e.g., Groceries" required=""/>
                        </div>
                        <div className="grid-xs">
                            <label for="newBudgetAmount">Amount</label>
                        <input type="number" step="0.01" name="newBudgetAmount" id="newBudgetAmount" placeholder="e.g., $350" required="" inputmode="decimal"/>
                        </div>
                        <input type="hidden" name="_action" value="createBudget"/>
                        <button type="submit" className="btn btn--dark">
                            <span>Create budget</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20">
                                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z"></path><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd">
                                    </path>
                                    </svg>
                                    </button>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </main>
                                    <img src={wave}  className='img-2'/>
    </div>
  );
}

export default Dashboard;
