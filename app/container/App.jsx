import React from 'react';
import {connect} from 'react-redux';
import {cacheDrawing, setText} from 'actions';

import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import ImageCanvas from 'components/ImageCanvas';

const App = React.createClass({
  updateDrawnImage(data) {
    if (this.props.drawing === data) return;
    this.props.onCacheDrawing(data);
  },

  render() {
    const selectedUrl = this.props.selected && this.props.selected.url;
    const {text, fontSize, contrast, size} = this.props;
    return (
      <div className="Container">
        <LeftSidebar />
        <div className="Main">
          <h4 className="Main-subtitle">Canvas</h4>
          <ImageCanvas
            image={selectedUrl}
            text={text}
            fontSize={fontSize}
            contrast={contrast}
            size={size}
            onRedraw={this.updateDrawnImage}
            onTextChange={this.props.onTextChange} />
        </div>
        <RightSidebar />
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  fontSize: state.fontSize,
  contrast: state.contrast,
  size: state.size,
  selected: state.selectedImage,
  drawing: state.drawing,
  text: state.text
});

const mapDispatchToProps = (dispatch) => ({
  onCacheDrawing(drawing) {
    dispatch(cacheDrawing(drawing));
  },

  onTextChange(text) {
    dispatch(setText(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
