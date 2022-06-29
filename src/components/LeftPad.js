import React, {useEffect} from 'react';
import Arrow from './Arrow';
import Websocket from '../services/Websocket';
import {Context} from '../App';

const LeftPad = () => {
  const value = React.useContext(Context);

  useEffect(() => {
    if (!value.state.websocket) return;
    Websocket.use(value.state.websocket);
  });

  const handleUpPressed = () => Websocket.sendAction('InputPitch', '1');
  const handleUpUnpressed = () => Websocket.sendAction('InputPitch', '0');

  const handleDownPressed = () => Websocket.sendAction('InputPitch', '-1');
  const handleDownUnpressed = () => Websocket.sendAction('InputPitch', '0');

  const handleRightPressed = () => Websocket.sendAction('InputYaw', '1');
  const handleRightUnpressed = () => Websocket.sendAction('InputYaw', '0');

  const handleLeftPressed = () => Websocket.sendAction('InputYaw', '-1');
  const handleLeftUnpressed = () => Websocket.sendAction('InputYaw', '0');

  return (<div className={'pad d-flex justify-content-center \
  flex-column align-items-center'}>
    <button className='ybuttons'
      onMouseDown={handleUpPressed}
      onMouseUp={handleUpUnpressed}>
      <Arrow rotation={0} size={28} className='text-white'/>
    </button>
    <div className='centered'>
      <button className='xbuttons'
        onMouseDown={handleLeftPressed}
        onMouseUp={handleLeftUnpressed}>
        <Arrow rotation={-90} size={28} className='text-white'/>
      </button>
      <button className='xbuttons'
        onMouseDown={handleRightPressed}
        onMouseUp={handleRightUnpressed}>
        <Arrow rotation={90} size={28} className='text-white'/>
      </button>
    </div>
    <button className='ybuttons'
      onMouseDown={handleDownPressed}
      onMouseUp={handleDownUnpressed}>
      <Arrow rotation={180} size={28} className='text-white'/>
    </button>
  </div>);
};

export default LeftPad;
