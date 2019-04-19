import React from  'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Scraper from "./scraper";

render(
    (
        <Router history={browserHistory} >
            <Route path={'/*'} component={Scraper} />
        </Router>
    ),
    document.getElementById('app')
);