import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {websites} from "../constants/Websites";

const ListWebsite = () => {
    return (
        <ScrollView>
            {websites.map((website, index) => (
                <View key={index} style={styles.websiteContainer}>
                    <Text style={styles.websiteName}>
                        {website.name}
                    </Text>
                    <Text style={[styles.websiteStatus, website.status ? {color:'green'} : {color:'red'}]}>
                        {website.status ? 'Online' : 'Offline'}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    websiteContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },
    websiteName: {
        fontSize: 16,
    },
    websiteStatus: {
        fontSize: 14,
        color: '#666',
    }
});

export default ListWebsite;