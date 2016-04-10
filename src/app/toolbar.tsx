import * as React from 'react';
import Pan from './pan';
import Slider from './slider';

export default class Toolbar extends React.Component<{}, {}> {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="cy-panzoom" style={{position: 'absolute'}}>
        <Pan/>
        <Slider />
      </div>
    );
  }
}