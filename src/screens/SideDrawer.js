import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import MainText from "../components/UI/MainText";

const SideDrawer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.drawerItem}>
                    <Icon name="md-log-out" size={30} color="#bbb" style={styles.drawerIcon}/>
                    <MainText><Text>Sign Out</Text></MainText>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SideDrawer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10
    },
    drawerIcon: {
        marginRight: 10
    }
});