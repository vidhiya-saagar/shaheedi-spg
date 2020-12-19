import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ChapterInfoScreen from './screens/ChapterInfoScreen';
import ChapterIndexScreen from './screens/ChapterIndexScreen';
import ReadChapterScreen from './screens/ReadChapterScreen';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App dark-mode">
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
