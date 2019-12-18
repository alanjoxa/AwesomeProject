/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
var AWS = require('aws-sdk/lib/xml/node_parser');

AppRegistry.registerComponent(appName, () => App);
