/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native'
import XGyms from './src/views/app';

AppRegistry.registerComponent('XGyms', () => XGyms)

AppRegistry.runApplication('XGyms', {
    initialProps: {},
    rootTag: document.getElementById('react-root')
})
