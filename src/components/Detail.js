/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {View, Text, StyleSheet, TextInput} from "react-native";
import React from "react";


function Detail({navigation, route}) {
    return (
        <View style={styles.modalView}>
            <View style={styles.modalField}>
                <Text style={styles.fieldLabel}>Id:</Text>
                <Text style={styles.field}>{route.params.website.id}</Text>
            </View>
            <View style={styles.modalField}>
                <Text style={styles.fieldLabel}>Domaine:</Text>
                <Text style={styles.field}>{route.params.website.name}</Text>
            </View>
            <View style={styles.modalField}>
                <Text style={styles.fieldLabel}>Extension:</Text>
                <Text style={styles.field}>{route.params.website.extension}</Text>
            </View>
            <View style={styles.modalField}>
                <Text style={styles.fieldLabel}>Status:</Text>
                <Text style={styles.field}>{route.params.website.status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalField: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    fieldLabel: {
        marginTop: 10,
        marginRight: 5,
        fontSize: 16,
    },
    field: {
        marginTop: 10,
        marginRight: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Detail;
