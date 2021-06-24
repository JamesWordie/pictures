import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  // image takes a second to load and hence need eventlistener to wait before calculating
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // gets the height of the image after the image has loaded
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.small}
             alt={ description}
             ref={this.imageRef}
        />
      </div>
    )
  }
}

export default ImageCard;
