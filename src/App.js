
import './component/App.css'
import FirstBox from './component/FirstBox';
import InnerBox from './component/InnerBox.js';



export default function App() {
      return (
            <div className="App">
                  <div>   <FirstBox></FirstBox>,
                        <InnerBox></InnerBox>
                  </div>
            </div>
      )

}