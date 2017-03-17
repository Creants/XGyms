'use-strict'

import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class XGyms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={{
                padding: 10
            }}>
                <Text> HI COnga </Text>
            </View>
        );
    }
}
