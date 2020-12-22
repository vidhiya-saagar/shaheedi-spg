import createDataContext from './createDataContext';

const themeContext = (state, action) => {
  switch (action.type) {
    case 'UPDATE_THEME_PREFERENCE':
      return {
        ...state,
        currentTheme: action.payload.theme,
      };

    default:
      console.log(`⚠️ Warning! Action ${action.type} not found!`);
  }
};

// Get their Theme Preference from
const fetchThemePreference = dispatch => async () => {};

const updateThemePreference = dispatch => theme => {
  dispatch({
    type: 'UPDATE_THEME_PREFERENCE',
    payload: { theme },
  });
};

export const { Provider, Context } = createDataContext(
  themeContext,
  {
    fetchThemePreference,
    updateThemePreference,
  },
  {
    currentTheme: 'LIGHT',
  },
);
