import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import DashboardScreen from "../Screens/DashboardScreen";
import LoadingScreen from "../Screens/LoadingScreen";
import LoginScreen from "../Screens/LoginScreen";
import firebase from "firebase";
import firebaseConfig from "../Config";
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

const MAX_HEIGHT = 200;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppSwitchNavigator =  createSwitchNavigator({
    LoginScreen: LoginScreen,
    LoadingScreen: LoadingScreen,
    DashboardScreen: DashboardScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: Dimensions.get('window').height - MAX_HEIGHT}}>
                    <AppNavigator/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
    },
    button: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: 'white',
        backgroundColor: '#00000066',
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});



