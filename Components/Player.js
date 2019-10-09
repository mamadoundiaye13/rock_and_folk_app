import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Constants from 'expo-constants';
import {activateKeepAwake, deactivateKeepAwake, useKeepAwake} from 'expo-keep-awake';

const source = {
    uri: 'http://rockfolk.ice.infomaniak.ch/rockfolk.mp3',
};

export default class Player extends Component {
    state = {
        playingStatus: "nosound",
    };

    async _playRecording() {
        const { sound } = await Audio.Sound.createAsync(
            source,
            {
                shouldPlay: true,
                isLooping: true,
            },
            this._updateScreenForSoundStatus,
        );
        this.sound = sound;
        this.setState({
            playingStatus: 'playing'
        });
    }

    _updateScreenForSoundStatus = (status) => {
        if (status.isPlaying && this.state.playingStatus !== "playing") {
            this.setState({ playingStatus: "playing" });
        } else if (!status.isPlaying && this.state.playingStatus === "playing") {
            this.setState({ playingStatus: "donepause" });
        }
    };

    async _pauseAndPlayRecording() {
        if (this.sound != null) {
            if (this.state.playingStatus === 'playing') {
                console.log('pausing...');
                await this.sound.pauseAsync();
                console.log('paused!');
                this.setState({
                    playingStatus: 'donepause',
                });
            } else {
                console.log('playing...');
                await this.sound.playAsync();
                console.log('playing!');
                this.setState({
                    playingStatus: 'playing',
                });
            }
        }
    }

    _syncPauseAndPlayRecording() {
        if (this.sound != null) {
            if (this.state.playingStatus === 'playing') {
                this.sound.pauseAsync().then(r => console.log(r));
            } else {
                this.sound.playAsync().then(r => console.log(r));
            }
        }
    }

    _playAndPause = () => {
        switch (this.state.playingStatus) {
            case 'nosound':
                this._playRecording();
                break;
            case 'donepause':
            case 'playing':
                this._pauseAndPlayRecording().then(r => console.log(r));
                break;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this._playAndPause}>
                    <Text style={styles.buttonText}>
                        {this.state.playingStatus}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        paddingTop: Constants.statusBarHeight,

    },
    button: {
        width: 150,
        height: 150,
        margin: 5,
        borderRadius: 150/2,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
});
