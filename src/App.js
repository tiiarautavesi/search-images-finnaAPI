import React, {
  Component
} from 'react';
import './App.css';
import FetchData from './fetch-data.js';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      title: "Kirjoita hakusana",
    };
  }

  changeTitle(title) {
    this.setState({title});
    console.log(title);
  }
  
  
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> 
            Etsi kuvia Helsingistä
          </h1> 
        </header> 
        
        <FetchData changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        
        <footer>
          Toteutettu <a href="https://www.finna.fi/">https://www.finna.fi/</a> API:n avulla
        </footer>

      </div>
    );
  }
}

export default App;