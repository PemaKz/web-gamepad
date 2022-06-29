import React, {useEffect} from 'react';
import Websocket from '../services/Websocket';
import {Context} from '../App';

const RightPad = () => {
  const value = React.useContext(Context);

  useEffect(() => {
    if (!value.state.websocket) return;
    Websocket.use(value.state.websocket);
  });

  const handleClickA = () => Websocket.sendAction('InputA', '1');
  const handleClickB = () => Websocket.sendAction('InputB', '1');

  return (<div className={'pad d-flex justify-content-center \
  align-items-center'}>
    <div className='centered'>
      <button className='me-3 actionbuttons text-white' onClick={handleClickB}>
        B
      </button>
      <button className='actionbuttons text-white' onClick={handleClickA}>
        A
      </button>
    </div>
  </div>);
};

export default RightPad;
