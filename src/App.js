import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import LeftPad from './components/LeftPad';
import RightPad from './components/RightPad';
import CenterPad from './components/CenterPad';
import Websocket from './services/Websocket';

export const Context = React.createContext();

/**
 * @return {Element} Game Pad Controller App
 */
function App() {
  const [state, setState] = React.useState({websocket: null});
  useEffect(() => {
    const socket = Websocket.connect();
    setState({websocket: socket});
  }, []);
  return (
    <div className="App align-items-center">
      <Context.Provider
        value={{
          state,
          setState,
        }}
      >
        <LeftPad />
        <CenterPad />
        <RightPad />
      </Context.Provider>
    </div>
  );
}

export default App;
