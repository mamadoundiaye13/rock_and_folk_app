import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,

} from 'react-native';
import { Header } from 'react-native-elements';

import {FlatGrid} from "react-native-super-grid";

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 200;



export default class Podcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    render() {

        const items = [
            { title: 'TURQUOISE', desc: '#1abc9c' }, { title: 'EMERALD', desc: '#2ecc71' },
            { title: 'PETER RIVER', desc: '#3498db' }, { title: 'AMETHYST', desc: '#9b59b6' },
            { title: 'WET ASPHALT', desc: '#34495e' }, { title: 'GREEN SEA', desc: '#16a085' },
            { title: 'NEPHRITIS', desc: '#27ae60' }, { title: 'BELIZE HOLE', desc: '#2980b9' },
            { title: 'WISTERIA', desc: '#8e44ad' }, { title: 'MIDNIGHT BLUE', desc: '#2c3e50' },
            { title: 'SUN FLOWER', desc: '#f1c40f' }, { title: 'CARROT', desc: '#e67e22' },
            { title: 'ALIZARIN', desc: '#e74c3c' }, { title: 'CLOUDS', desc: '#ecf0f1' },
            { title: 'CONCRETE', desc: '#95a5a6' }, { title: 'ORANGE', desc: '#f39c12' },
            { title: 'PUMPKIN', desc: '#d35400' }, { title: 'POMEGRANATE', desc: '#c0392b' },
            { title: 'SILVER', desc: '#bdc3c7' }, { title: 'ASBESTOS', desc: '#7f8c8d' },
        ];
        return (
            <View style={styles.container}>
                <View style={{ height: Dimensions.get('window').height - MAX_HEIGHT}}>
                    <FlatGrid
                        itemDimension={Dimensions.get('window').width/3}
                        items={items}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => alert('tap!!')} style={[styles.itemContainer, { backgroundColor: item.desc }]}>
                                <Text style={styles.itemtitle}>{item.title}</Text>
                                <Text style={styles.itemdesc}>{item.desc}</Text>
                            </TouchableOpacity>
                        )}
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
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemtitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemdesc: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

});

