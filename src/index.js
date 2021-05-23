import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './assets/styles/Reset.css';
import GlobalAppStyles from './GlobalAppStyles.jsx';
import LiveInputSearch from './components/live_input_search/LiveInputSearch';

import fixtures from './assets/fixtures';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalAppStyles/>
        <main>
            <LiveInputSearch {...fixtures} />
        </main>
    </ThemeProvider>, document.getElementById('root')
);
