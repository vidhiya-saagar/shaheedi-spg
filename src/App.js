import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ChapterScreen from './screens/ChapterScreen';
import ChapterInfoScreen from './screens/ChapterInfoScreen';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <div>
        <ChapterInfoScreen />
      </div>
    </div>
  );
}

export default App;
