import logo from './logo.svg';
import './App.css';
import Classcomponent from './Components/DemoComponet/component';
import FunctionComponent from './Components/DemoComponet/FunctionComponent';
import Home from './Components/BTlayout/Home';
import DataBinding from './Components/DataBinding/DataBinding';
import HandllingEven from './Components/HandllingEvent/HandllingEven';
import Stylling from './Components/stylling/Stylling';
import BaiTapXe from './Components/BaiTapXe/BaiTapXe';
import ParentProps from './Components/Props/ParentProps';
import BaiTapProps from './Components/BaiTapProps/BaiTapProps';
import RenderingWithConditions from './Components/RenderingWithConditions/RenderingWithConditions';
import State from './Components/State/State';
import RenderingWithMap from './Components/RenderingWithMap/RenderingWithMap';

function App() {
  return (
    <div className="App">
     {/* <HandllingEven /> */}
     <Stylling />
     {/* <BaiTapXe /> */}
     {/* <ParentProps /> */}
     {/* <BaiTapProps /> */}
     <hr/>
     <BaiTapXe />
     {/* <RenderingWithConditions />
     <hr/>
    <State /> */}
    <hr/>
    <RenderingWithMap/>
    </div>
  );
}

export default App;
