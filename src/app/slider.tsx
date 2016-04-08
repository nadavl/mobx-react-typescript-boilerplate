import * as React from 'react';

export default class Slider extends React.Component<{}, {}> {
  render () {
    return (
      <div>
        <div className="cy-panzoom-reset cy-panzoom-zoom-button"><span className="icon fa fa-expand"/></div>
        <div className="cy-panzoom-zoom-in cy-panzoom-zoom-button"><span className="icon fa fa-plus"/></div>
        <div className="cy-panzoom-zoom-out cy-panzoom-zoom-button"><span className="icon fa fa-minus"/></div>
        <div className="cy-panzoom-slider">
          <div className="cy-panzoom-slider-background"/>
          <div className="cy-panzoom-slider-handle" style={{top: '32.2203px'}}><span className="icon fa fa-minus"/>
          </div>
          <div className="cy-panzoom-no-zoom-tick" style={{top: 43}}/>
        </div>
      </div>
    )
  }
}