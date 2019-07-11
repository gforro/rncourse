import React, {Component} from 'react';
import {Text, View} from "react-native";

class TestComponentScreen extends Component {
    constructor(props) {
        super(props);
        props.navigator.setOnNavigatorEvent(this.onNavigator)
    }

    onNavigator = (event) => {
        console.log(event);
    }

    render() {
        return (
            <View style={{alignItems: 'center'}}><Text>Test Component</Text></View>
        );
    }
}

export default TestComponentScreen;