/**
 * Created by never615 on 8/22/16.
 */
// document.write('It works');

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import Demo from './demo1/Demo';

render(<Demo name={"world"}/>,$('#content')[0]);




