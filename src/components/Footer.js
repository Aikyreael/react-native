import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e8e8e8',
    },
    footerText: {
        fontSize: 16,
    }
});

export default Footer;