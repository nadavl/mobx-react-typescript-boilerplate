import * as React from 'react';
const objectAssign = require('object-assign');

export default class Pan extends React.Component<{}, {x: number, y: number}> {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.setState({
      x: 1, y: 1
    });
  }

  updatePanPosition (e) {
    console.log('e is:', objectAssign({}, e));

    console.log(`${e.pageX}, ${e.pageY}, ${e.screenX}, ${e.screenY}`);

    this.setState({
      x: e.pageX, y: e.pageY
    });
  }

  render () {
    const styles = {
      indicator: {
        display: 'block',
        left: '28.9443px',
        top: '2.11146px',
        background: 'rgb(127, 127, 127)'
      }
    };

    console.log('state', this.state);

    const newX = this.state ? this.state.x + 'px' : 1;
    const newY = this.state ? this.state.y + 'px' : 1;

    return (
      <div className="cy-panzoom-panner">
        <div className="cy-panzoom-panner-handle" onMouseMove={(e) => this.updatePanPosition(e)}/>
        <div className="cy-panzoom-pan-up cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-down cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-left cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-right cy-panzoom-pan-button"/>
        <div className="cy-panzoom-pan-indicator"
             style={objectAssign(styles.indicator, {left: newX, top: newY})}/>
      </div>
    )
  }
}