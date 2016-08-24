/**
 * Created by never615 on 8/22/16.
 */
// document.write('It works');

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import Demo3 from './demo1/Demo3';

render(
    <Demo3 promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
    $('#content')[0]
);



