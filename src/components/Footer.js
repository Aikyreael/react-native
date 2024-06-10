import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Footer = () => {

    const [websiteName, setWebsiteName] = useState('');
    const [websites, setWebsites] = useState([]);

    async function saveName() {
        try {
            const loadWebsites = JSON.parse(await AsyncStorage.getItem('websites'))

            // websites.push({id: websites.length+1 ,name: websiteName, extension: 'com', status: null });
            setWebsites([... loadWebsites, {id: websites.length+1 ,name: websiteName, extension: 'com', status: null }]);

            await AsyncStorage.setItem('websites', JSON.stringify(websites));
            setWebsiteName('');
        } catch (e) {
            console.log('Failed to save listItem in AsyncStorage', e)
        }
    }

    return (
        <View style={styles.footer}>
            <TextInput
                style={{padding: 11, paddingHorizontal: 33,height: 44, borderWidth: 2, borderColor: '#b0b0b0'}}
                placeholder="Ajoute un site ex: google.com"
                onChangeText={newText => setWebsiteName(newText)}
                onSubmitEditing={saveName}
                defaultValue={websiteName}
            />
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