import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressiveImage extends Component {
  static defaultProps = {
    alt: "",
  };

  constructor(props) {
    super(props);
    // initially set loading to true and current src of image to placeholder image
    this.state = {
      loading: true,
      currentSrc: props.placeholder,
    };
  }

  componentDidMount() {
    const { src } = this.props;
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () =>
      // When image is loaded replace the image's src and set loading to false
      this.setState({ currentSrc: src, loading: false });
  }

  render() {
    const { currentSrc, loading } = this.state;
    const { alt } = this.props;
    return (
      <img
        src={currentSrc}
        className="ProgressiveImage"
        style={{
          opacity: loading ? 0.5 : 1,
          transition: "opacity .15s linear",
        }}
        alt={alt}
        loading="eager"
      />
    );
  }
}

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProgressiveImage;
