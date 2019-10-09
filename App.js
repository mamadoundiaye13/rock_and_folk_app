import {createAppContainer} from 'react-navigation';
import React from "react";
import {View} from "react-native";
import {TabNavigator} from "./Navigation/Footer";
import Player from './Components/Player';

const AppContainer = createAppContainer(TabNavigator);

// without the style you will see a blank screen
export default () => (
    <View style={{ flex: 1 }}>
        <Player/>
        <AppContainer />
    </View>
);