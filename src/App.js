import './App.css';
import Allroutes from './Allroutes/Allroutes';
import ThemeProvider from './Context/ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
         <Allroutes/>
      </ThemeProvider>
    </div>
  );
}

export default App;
