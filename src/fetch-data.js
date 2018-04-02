import React, {
  Component
} from 'react';
import './App.css';
import ImageClass from './image-module.js'

var searchWord = ""; 
var image = "";

class FetchData extends Component {

  constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            images: []
        }
    }
  
  handleChange(e) {
    searchWord = e.target.value;
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  
  emptyField(e) {
    e.target.value = "";
  }
  
  getImages(searchWord) {
    
    console.log(searchWord);
    fetch('https://api.finna.fi/v1/search?lookfor=&filter[]=~format%3A"0%2FImage%2F"&filter[]=~topic_facet%3A"' + searchWord + '"&type=AllFields')
    .then(response => response.json())  
    .then(parsedJSON => parsedJSON.records.map(image => (
        {
          title: `${image.title}`,
          url: 'https://finna.fi' + `${image.images}`,
          id: `${image.id}`
        }
      )))
      .then(images => this.setState({
          images,
          isLoading: false
      }))
      .then(console.log(this.state))
      .catch(error => console.log('parsing failed', error))
    
    //console.log(this.state.images)
  }

  render() {
    
    const {isLoading, images} = this.state;
    
    return ( 
    
      <div>
        <h1>
          Kirjoita hakusana
        </h1>
      
        <input value={this.props.title} onChange={this.handleChange.bind(this)} onClick={this.emptyField}/>
          
        <div className="btn btn-sm btn-danger" onClick={(e) => {this.getImages(searchWord);}}>
          Etsi
        </div>

        <div className="images">
            
              {
                  images.length > 0 ? images.map(image => {
                      const {title, url, id} = image;
                      console.log('ready');

                      return <ImageClass url={url} alt={id} key={id}>
                        <h4>{title}</h4>
                      </ImageClass>
            
                        
                  }) : null
              }
              
        </div>

      </div>
    );
  }
}

export default FetchData;
