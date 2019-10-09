import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class DashbordScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>En cours DashbordScreen!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
