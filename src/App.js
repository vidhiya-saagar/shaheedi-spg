import './App.css';
import { useContext } from 'react';
import ChapterInfoScreen from './screens/ChapterInfoScreen';
import BookIndexScreen from './screens/BookIndexScreen';
import BookScreen from './screens/BookScreen';
import ReadChapterScreen from './screens/ReadChapterScreen';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context as ThemeContext } from './context/ThemeContext';
import 'sant-lipi';

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

          <Route exact path="/books/nanak-prakash-purbardh">
            <BookScreen
              apiUrl="/books/1/chapters"
              bookName="Nanak Prakash Purbardh (Part 1)"
            />
          </Route>
          <Route exact path="/books/raas-12">
            <BookScreen apiUrl="/books/14/chapters" bookName="Raas 12" />
          </Route>
          <Route exact path="/books/rut-1">
            <BookScreen apiUrl="/books/15/chapters" bookName="Rut 1" />
          </Route>

          <Route exact path="/books/rut-6">
            <BookScreen apiUrl="/books/20/chapters" bookName="Rut 6" />
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
