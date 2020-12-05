import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ChapterScreen from './screens/ChapterScreen';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <ChapterScreen />
      </div>
    </div>
  );
}

export default App;
