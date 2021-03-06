import React from 'react';
import Router from 'react-router';
import RetinaImage from 'react-retina-image';
import {t} from '../utils/localizationUtil';

var Sidebar = React.createClass({
    componentWillMount: function() {
        this.start = Date.now();
    },
    render: function() {
        return (
            <ul className="sidebar">
                <Router.Link to="dashboard">
                    <li>
                        <RetinaImage src="icons/Dashboard%20Icon.png"/>
                        <p>{t('dashboard')}</p>
                    </li>
                </Router.Link>
                <Router.Link to="preferences">
                    <li>
                        <RetinaImage src="icons/Country%20Selection.png"/>
                        <p>{t('preferences')}</p>
                    </li>
                </Router.Link>
            </ul>
        );
    }
});

module.exports = Sidebar;