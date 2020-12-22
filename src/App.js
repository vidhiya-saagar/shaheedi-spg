import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ChapterInfoScreen from './screens/ChapterInfoScreen';
import ChapterIndexScreen from './screens/ChapterIndexScreen';
import ReadChapterScreen from './screens/ReadChapterScreen';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const isDarkMode = true;

function App() {
  return (
    <Router>
      {isDarkMode && <style>{`html { background: #2D2D2F; }`}</style>}
      <div className="App DarkModeApp">
        <Switch>
          <Route exact path="/">
            <LandingScreen />
          </Route>
          <Route exact path="/chapters">
            <ChapterIndexScreen />
          </Route>
          <Route exact path="/chapters/:id">
            <ChapterInfoScreen />
          </Route>
          <Route exact path="/chapters/:id/read">
            <ReadChapterScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
