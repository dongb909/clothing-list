import React from 'react';
import Axios from 'axios';
import ClothingList from './ClothingList.jsx'

//always a class because normally is where you store the state and thus make the reqs/reses
//it's 'extends' NOT 'from'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // clothes = clothes;  NOO
      clothes = []
    }
  }
  render () {
    return (
      <div>
        <ul>
          <ClothingList />
        </ul>
        
      </div>
       

    );
  }
}



//it's NOT 
// /  render (

//   )
//it's render () {return ( jlkfdsfj )}