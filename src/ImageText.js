import React from 'react';

class ImageText extends React.Component {
    constructor (props) {
        super(props);
        this.state = {src:"", text:""};
    }
    render() {
        return (
          <span>
            {this.props.text}
            <img src={this.props.src} width={this.props.width} height={this.props.height} alt={this.props.alt}/>
             </span>
     );
            }
}

export default ImageText;
