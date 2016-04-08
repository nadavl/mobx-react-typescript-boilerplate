import * as React from 'react';

export default class Pan extends React.Component<{}, {}> {
  render () {
    return (
      <div className="cy-panzoom-panner">
        <div className="cy-panzoom-panner-handle"/>
        <div className="cy-panzoom-pan-up cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-down cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-left cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-right cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-indicator" style={{display: 'none'}}/>
      </div>
    )
  }
}