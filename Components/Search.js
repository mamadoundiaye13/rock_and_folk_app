import { SearchBar } from 'react-native-elements';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, RefreshControl} from 'react-native';
import React from "react";

const MAX_HEIGHT = 100;

export default class Search extends React.Component {
    state = {
        search: '',
    };
    updateSearch = search => {
        this.setState({ search });
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    render() {
        const { search } = this.state;

        return (
            <View style={styles.container}>
                <View style={{ height: Dimensions.get('window').height - MAX_HEIGHT}}>
                    <SearchBar tyle={styles.searchInput}
                               placeholder="Type Here..."
                               onChangeText={this.updateSearch}
                               value={search}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
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


