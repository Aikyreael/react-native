import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

const websites = [
    { websiteName: 'Google', websiteStatus: 'Online' },
    { websiteName: 'Facebook', websiteStatus: 'Online' },
    { websiteName: 'Twitter', websiteStatus: 'Offline' },
    { websiteName: 'LinkedIn', websiteStatus: 'Online' },
    { websiteName: 'Google', websiteStatus: 'Online' },
    { websiteName: 'Facebook', websiteStatus: 'Online' },
    { websiteName: 'Twitter', websiteStatus: 'Offline' },
    { websiteName: 'LinkedIn', websiteStatus: 'Online' },
    { websiteName: 'Google', websiteStatus: 'Online' },
    { websiteName: 'Facebook', websiteStatus: 'Online' },
    { websiteName: 'Twitter', websiteStatus: 'Offline' },
    { websiteName: 'LinkedIn', websiteStatus: 'Online' },
    { websiteName: 'Google', websiteStatus: 'Online' },
    { websiteName: 'Facebook', websiteStatus: 'Online' },
    { websiteName: 'Twitter', websiteStatus: 'Offline' },
    { websiteName: 'LinkedIn', websiteStatus: 'Online' },
    { websiteName: 'Google', websiteStatus: 'Online' },
    { websiteName: 'Facebook', websiteStatus: 'Online' },
    { websiteName: 'Twitter', websiteStatus: 'Offline' },
    { websiteName: 'LinkedIn', websiteStatus: 'Online' },
];

const ListWebsite = () => {
    return (
        <ScrollView>
            {websites.map((website, index) => (
                <View key={index} style={styles.websiteContainer}>
                    <Text style={styles.websiteName}>
                        {website.websiteName}
                    </Text>
                    <Text style={[styles.websiteStatus, website.websiteStatus === 'Online' ? {color:'green'} : {color:'red'}]}>
                        {website.websiteStatus}
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