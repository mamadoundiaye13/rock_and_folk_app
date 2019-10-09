import React from "react";
import Navigation from "./NavigationSearch";
import Login from "../Firebase/Login";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconWithBadge from "../Components/IconWithVadge";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Podcast from '../Screens/Podcast'
import Actus from '../Screens/Actus'
import Player from '../Components/Player'

// le nombre sur l'icon
const HomeIconWithBadge = (props) => {
    // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
};



export const TabNavigator = createBottomTabNavigator(
    {
        Actus: Actus,
        Podcast: Podcast,
        Recherche: Navigation,
        Plus: Login,
    },
    {
        // change icons
        // https://oblador.github.io/react-native-vector-icons/
        /* Other configuration remains unchanged */
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Actus') {
                    iconName = `ios-home`;
                } else if (routeName === 'Plus') {
                    iconName = `ios-menu`;
                    IconComponent = HomeIconWithBadge;
                }else if (routeName === 'Recherche') {
                    iconName = `ios-search`;
                }
                else if (routeName === 'Podcast'){
                    iconName = `ios-podium`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#000',
            inactiveBackgroundColor: '#000',
        },
    }
);