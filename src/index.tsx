import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class AppState {
  @observable timer = 0;

  constructor () {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer () {
    this.timer = 0;
  }
}

@observer
class TimerView extends React.Component<{appState: AppState}, {}> {
  render () {
    return null;
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
}

class Toolbar extends React.Component<{}, {}> {
  render () {
    return (
      <div className="cy-panzoom" style={{position: 'absolute'}}>
        <Pan/>
        <Slider/>
      </div>
    );
  }
}

class Slider extends React.Component<{}, {}> {
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

class Pan extends React.Component<{}, {}> {
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


ReactDOM.render(<Toolbar />, document.getElementById('root'));

// const appState = new AppState();
// ReactDOM.render(<TimerView appState={appState}/>, document.getElementById('root'));
