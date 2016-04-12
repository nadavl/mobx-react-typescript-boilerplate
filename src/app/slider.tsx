import * as React from 'react';
import {connect} from 'react-redux';
import ActionTypes from './action_types';
const ReactSlider = require('react-slider');

class HostAPI {
  pan: Function;
  resetZoom: Function = () => {
    console.log(`HostAPI reset zoom`);
  };
  zoom: Function      = (zoomLevel) => {
    console.log(`HostAPI zooming to ${zoomLevel}`);
  };
}

const hostAPI = new HostAPI();

const Actions = {
  resetZoom: () => {
    console.log('reset zoom action');
    hostAPI.resetZoom();

    return {
      type: ActionTypes.RESET_ZOOM
    }
  },
  zoom: (direction: 'in' | 'out', currentZoom: number) => {
    console.log(`zoom ${direction} action. currentZoom: ${currentZoom}`);
    const zoomLevel = direction === 'in' ? currentZoom * 1.1 : currentZoom * 0.9;
    hostAPI.zoom(zoomLevel);

    return {
      type: ActionTypes.SET_ZOOM_LEVEL,
      zoomLevel
    }
  }
};

const mapStateToProps = (state) => {
  console.log('stateToProps: ', state);
  return {
    zoomLevel: state.zoomLevel
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log('dispatchToProps: ', dispatch);
  return {
    resetZoom: () => {
      dispatch(Actions.resetZoom());
    },
    zoomIn: (zoomLevel) => {
      dispatch(Actions.zoom('in', zoomLevel));
    },
    zoomOut: (zoomLevel) => {
      dispatch(Actions.zoom('out', zoomLevel));
    }
  }
};

interface SliderProps extends React.Props<any> {
  resetZoom: Function;
  zoomIn: Function;
  zoomOut: Function;
  zoomLevel: number;
}

interface SliderState {
  value: number;
}

// @connect<any, any, any>(
//   mapStateToProps,
//   mapDispatchToProps
// )
class SliderComp extends React.Component<SliderProps, {}> {

  constructor (props) {
    super(props);

    // this.state = {
    //   value: 10
    // };
  }

  handleChange (value) {
    // this.setState({
    //   value: value
    // });
  }

  render () {

    const legacy = false;

    return (
      <div>
        <div className="cy-panzoom-reset cy-panzoom-zoom-button" onClick={this.props.resetZoom}>
          <span className="icon fa fa-expand"/>
        </div>
        <div className="cy-panzoom-zoom-in cy-panzoom-zoom-button"
             onClick={() => this.props.zoomIn(this.props.zoomLevel)}>
          <span className="icon fa fa-plus"/>
        </div>
        <div className="cy-panzoom-zoom-out cy-panzoom-zoom-button"
             onClick={() => this.props.zoomOut(this.props.zoomLevel)}>
          <span className="icon fa fa-minus"/>
        </div>

        {legacy ? <div className="cy-panzoom-slider">
          <div className="cy-panzoom-slider-background"/>
          <div className="cy-panzoom-slider-handle" style={{top: '32.2203px'}}>
            <span className="icon fa fa-minus"/>
          </div>
          <div className="cy-panzoom-no-zoom-tick" style={{top: 43}}/>
        </div> : <div>NO</div>}

        <ReactSlider
          className="cy-panzoom-slider"
          barClassName="cy-panzoom-slider-background"
          orientation={'vertical'}
          min={0}
          max={100}
          minDistance={20}
          withBars={true}>
          <div className="cy-panzoom-slider-handle"></div>
        </ReactSlider>
      </div>
    )
  }
}

const Slider = connect <any, any, any>( //TODO: use specific types
  mapStateToProps,
  mapDispatchToProps
)(SliderComp);

export default Slider;