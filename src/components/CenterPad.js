import React, {useEffect} from 'react';
import Websocket from '../services/Websocket';
import {Context} from '../App';

const CenterPad = () => {
  const value = React.useContext(Context);

  useEffect(() => {
    if (!value.state.websocket) return;
    Websocket.use(value.state.websocket);
  });

  const handleClickStart = () => Websocket.sendAction('InputStart', '1');
  const handleClickSelect = () => Websocket.sendAction('InputSelect', '1');

  return (<div className={'pad d-flex justify-content-center \
  align-items-end'}>
    <div className='centered mb-5'>
      <button onClick={handleClickSelect}
        className='me-3 menubuttons text-white'>
        Select
      </button>
      <button onClick={handleClickStart} className='menubuttons text-white'>
        Start
      </button>
    </div>
  </div>);
};

export default CenterPad;
