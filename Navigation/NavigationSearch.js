import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import Search from "../Components/Search";
import Player from "../Components/Player";

let SearchStackNavigator;
export default SearchStackNavigator = createStackNavigator({
    Search:{
        screen: Search,
        navigationOptions: {
            title: 'Rechercher ici',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
    PlaylistDetails:{
            screen: Player,
        }

});
