import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import Header from './components/Header';
import ChapterInfoScreen from './screens/ChapterInfoScreen';
import Rut6Screen from './screens/Rut6Screen';
import BookIndexScreen from './screens/BookIndexScreen';
import ReadChapterScreen from './screens/ReadChapterScreen';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context as ThemeContext } from './context/ThemeContext';

function App() {
  const { state: themeState } = useContext(ThemeContext);

  return (
    <Router>
      {themeState.currentTheme === 'DARK' && (
        <style>{`html { background: #2D2D2F; }`}</style>
      )}
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingScreen />
          </Route>
          <Route exact path="/books">
            <BookIndexScreen />
          </Route>
          <Route exact path="/books/rut-6">
            <Rut6Screen />
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
