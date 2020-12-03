import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

function App (props) {
  // state = {
  //   Person: [
  //     {
  //       name: "dheeraj"
  //     },
  //     {
  //       name: "manisha"
  //     }
  //   ]
  // };
  const [personState, setPersonState] = useState(
    {
        Person: [
          {
            name: "dheeraj"
          },
          {
            name: "manisha"
          }
        ],
        userName : 'dheeraj'
    }
  );

  const [otherState, setOtherState] = useState(
    {
      value  : 'other Stat val'
    }
  );


  function changeNameHandler () {
    setPersonState({
      Person: [
        {
          name: "dheeraj1"
        },
        {
          name: "manisha"
        }
      ] 
    });
    setOtherState({
      value : 'change in other state'
    }); 
  }

  function changeUserNameHandler(event) {
    setPersonState({
      Person: [
        {
          name: "dheeraj1"
        },
        {
          name: "manisha"
        }
      ],
      userName : event.target.value 
    });
  }

    return (
      <div className="App">
        Hi I am learning react
        <Person></Person>
        <Person>With Projected content</Person>
        {personState.Person[0].name}
        <button onClick={changeNameHandler}>change name</button>
        <p>Other State : {otherState.value}</p>
        <h2>Assignement</h2>
        <UserOutput userName={personState.userName} ></UserOutput>
        <UserInput onUserNameChange={changeUserNameHandler} ></UserInput>
      </div>
    );

    //return React.createElement('div', {className : 'App'}, 'Hi I am learing react with comps');
}

export default App;
