import React, { Component } from 'react';
import { SectionGrid } from 'react-native-super-grid';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    Dimensions,
    RefreshControl
} from 'react-native';
import { Header } from 'react-native-elements';
import Player from '../Components/Player'

import HeaderImageScrollView from 'react-native-image-header-scroll-view';

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 200;

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh() {
        this.setState({
            refreshing: true,
        });

        setTimeout(() => {
            this.setState({
                refreshing: false,
            });
        }, 2000);
    }
    render() {
        const items = [
            { name: 'TURQUOISE', code: '#bc240b' },
            { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' },
            { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' },
            { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' },
            { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' },
            { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' },
            { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' },
            { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' },
            { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' },
            { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' },
            { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        return (
            <View style={styles.container}>
                <View style={{ height: Dimensions.get('window').height - MAX_HEIGHT}}>
                    <SectionGrid
                        itemDimension={Dimensions.get('window').width}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        sections={[
                            {
                                title: 'Title1',
                                data: items.slice(0, 6),
                            },
                            {
                                title: 'Title2',
                                data: items.slice(6, 12),
                            },
                            {
                                title: 'Title3',
                                data: items.slice(12, 20),
                            },
                        ]}
                        style={styles.gridView}
                        renderItem={({ item, section, index }) => (
                            <TouchableOpacity onPress={() => alert('tap!!')} style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemCode}>{item.code}</Text>
                            </TouchableOpacity>
                        )}
                        renderSectionHeader={({ section }) => (
                            <Text style={styles.sectionHeader}>{section.title}</Text>
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
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        padding: 10,
    },
});

