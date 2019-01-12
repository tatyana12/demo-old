import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import data from './events.json';
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Five from "./Five";
import Four from "./Four";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";

const Index = () => <h2></h2>;
const AppRouter = () => (
  <Router>
    <div>
        <center><Link to="/">

             <button type="button" className="button">

             Events  information(2018)</button>

         </Link></center>

     <div className="row">
     <div className="column">
      <div>
           <Link to="/one/">
              <button type="button" className="button">
               1
              </button>

         </Link>
      </div>
      
      <div>
             <Link to="/two/">
             <img src={"./funnyanimal.gif"} />
             </Link>
      </div>

      <div>
            <Link to="/three/">
                <button type="button"  className="button">
                 3
              </button>

          </Link>
      </div>
      <div>
            <Link to="/four/">
                     <button type="button"  className="button">
                 4
              </button>
            </Link>
      </div>

      <div>
            <Link to="/five/">
                       <button type="button"  className="button">
                       5
              </button>
           </Link>
      </div>
      <div>
             <Link to="/six/">

               <button  type="button"  className="button">
               6
              </button>

          </Link>
      </div>

      <div>
            <Link to="/seven/">
             <button type="button"  className="button">
               7
              </button>


         </Link>
      </div>
      <div>

            <Link to="/eight/">
               <button type="button"  className="button">
               8
              </button>


          </Link>
      </div>
      <div>
            <Link to="/nine/">

                 <button type="button"  className="button">
                 9
              </button>



         </Link>
      </div>
     
      </div>
      <div className="column">
        <Route path="/" exact component={Index} />
          <div className="content">
            <Route path="/one/" component={One} />
          </div>
          <div className="content">
            <Route path="/two/" component={Two} />
          </div>
          <div className="content">
            <Route path="/three/" component={Three} />
          </div>
          <div className="content">
            <Route path="/four/" component={Four} />
          </div>
          <div className="content">
            <Route path="/five/" component={Five} />
          </div>
          <div className="content">
            <Route path="/six/" component={Six} />
          </div>
          <div className="content">
            <Route path="/seven/" component={Seven} />
          </div>
          <div className="content">
            <Route path="/eight/" component={Eight} />
          </div>
          <div className="content">
            <Route path="/nine/" component={Nine} />
          </div>
          <div className="content">
            <Route path="/ten/" component={Ten} />
          </div>

      </div>
      </div>


    </div>
  </Router>
);

export default AppRouter;

class App extends Component {
  render() {
    return (
      <div className="App">

            { data.map(function(people){
                return <li>{people.id} - {people.name}</li>
             }



              )}

        <header className="App-header">

         
        </header>
      </div>
    );
  }
}


