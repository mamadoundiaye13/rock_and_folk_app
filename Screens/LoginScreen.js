import  Constants from 'expo-constants';
import * as GoogleSignIn  from 'expo-google-sign-in';
import React from 'react';
import { View, Platform } from 'react-native';
import Profile from "../Components/ProfileUser";
import GoogleSignInButton from './GoogleSignInButton';

const isInClient = Constants.appOwnership === 'expo';
if (isInClient) {
    GoogleSignIn.allowInClient();
}

const clientIdForUseInTheExpoClient =
    "76727710233-hrda5k0q4r2cl81udlo84013v9oiecb2.apps.googleusercontent.com";

/*
 * Redefine this one with your client ID
 *
 * The iOS value is the one that really matters,
 * on Android this does nothing because the client ID
 * is read from the google-services.json.
 */
const yourClientIdForUseInStandalone = Platform.select({
    android:
        "76727710233-nop5jkg46uq9p86el13ici87pp99p4nh.apps.googleusercontent.com",
    ios:
        "76727710233-jivcu976eqidh3hvrplehbuflu1f89os.apps.googleusercontent.com",
});

const clientId = isInClient
    ? clientIdForUseInTheExpoClient
    : yourClientIdForUseInStandalone;

export default class LoginScreen extends React.Component {
    state = { user: null };

    componentDidMount = async () => {
        try {
            await GoogleSignIn.initAsync({
                isOfflineEnabled: true,
                isPromptEnabled: true,
                clientId,
            });
            this._syncUserWithStateAsync();
        } catch ({ message }) {
            console.log('GoogleSignIn.initAsync(): ' + message);
        }
    };

    _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        this.setState({ user });
    };
    get buttonTitle() {
        return this.state.user ? 'Sign-Out of Google' : 'Sign-In with Google';
    }


    render() {
        const { user } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {user && <Profile {...user} />}
                <GoogleSignInButton onPress={this._toggleAuth}>
                    {this.buttonTitle}
                </GoogleSignInButton>
            </View>
        );
    }

    _toggleAuth = () => {
        console.log('Toggle', !!this.state.user);
        if (this.state.user) {
            this._signOutAsync().then(() => {});
        } else {
            this._signInAsync().then(() => {});
        }
    };

    _signOutAsync = async () => {
        try {
            // await GoogleSignIn.disconnectAsync();
            await GoogleSignIn.signOutAsync();
            console.log('Log out successful');
        } catch ({ message }) {
            console.error('Demo: Error: logout: ' + message);
        } finally {
            this.setState({ user: null });
        }
    };

    _signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            console.log({ type, user });
            if (type === 'success') {
                this._syncUserWithStateAsync();
            }
        } catch ({ message }) {
            console.error('login: Error:' + message);
        }
    };
}

