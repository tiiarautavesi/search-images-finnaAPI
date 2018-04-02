import React from 'react';
import './App.css';

class ImageClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    render(){
        const {url, alt, children} = this.props;
        return (
            <div>
                <div className="image-container">
                    <img src={url} alt={alt} />
                    {children}
                </div>
            </div>
        )
    }

}

export default ImageClass;