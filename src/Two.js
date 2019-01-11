import React, { Component } from 'react';

import data from './events.json';

class Two extends Component {
        render () {
                return (
                        <div>
                                {
                                        data.map(function(people) {
                                                // assuming if you want people with
                                                // id=2 only on page 2
                                                if (people.id === 2) {
                                                        return (
                                                                <ul>
                  <li>Name: {people.name}</li>
                  <li>Presenter: {people.presenter}</li>
                  <li>Room: {people.room}</li>
                  
                  <li>Summary: {people.summary}</li>
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

export default Two;



