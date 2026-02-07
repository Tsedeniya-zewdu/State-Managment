

import './App.css';
import Usecallback from './Usecallback';
import UseEffect from './useEffect';
import Usememo from './usememo';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseState from './UseState';


function App() {
  return(
    <div style={{padding:'50px'}}> 
      <h1>React State Management</h1>
<UseState />  
<UseReducer />
<Usememo />
<Usecallback />
<UseEffect />
<UseRef />

  </div>
  )
}
export default App;
