/**
 * Created by never615 on 8/22/16.
 */
// document.write('It works');

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import Demo2 from './demo1/Demo2';

render(
    <Demo2 source="https://api.github.com/users/octocat/gists"/>,
    $('#content')[0]
);



