import createDataContext from './createDataContext';

const themeContext = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        currentTheme: action.payload.oppositeTheme,
      };

    default:
      console.log(`⚠️ Warning! Action ${action.type} not found!`);
  }
};

// Get their Theme Preference from
const fetchThemePreference = dispatch => async () => {};

const toggleTheme = dispatch => theme => {
  const oppositeTheme = theme === 'DARK' ? 'LIGHT' : 'DARK';
  window.localStorage.setItem('currentTheme', oppositeTheme);
  dispatch({
    type: 'TOGGLE_THEME',
    payload: { oppositeTheme },
  });
};

export const { Provider, Context } = createDataContext(
  themeContext,
  {
    fetchThemePreference,
    toggleTheme,
  },
  {
    currentTheme: window.localStorage.getItem('currentTheme') || 'LIGHT',
  },
);
