import React, { Component } from 'react';

import data from './events.json';

class Three  extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=1 only on page 1
                                                if (people.id === 3) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Presenter: {people.presenter}</li>
                  <li>Room: {people.room}</li>
                  
                  <li>Birthday info: {people.summary}</li>
                     Date: {people.date}<br></br>
                     Time: {people.time}
                </ul>
                                                        )
                                                }
                                        })
                                }
                        </div>
                )
        }
}

export default Three;


