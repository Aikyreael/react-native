import {StyleSheet, Text, View} from "react-native";
import React  from "react";
import Timer from "./Timer";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Website checker </Text>
            <Timer/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Header;