import {Alert, Button, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const ListWebsite = ()  => {

    const navigation = useNavigation();

    const [modifyName, setModifyName] = useState();
    const [modifyExtension, setModifyExtension] = useState();


    const [websites, setWebsites] = useState( []);
    const [modalVisible, setModalVisible] = useState({visible: false, website: {}});

    useEffect(() => {
        const fetchStatusCodes = async () => {
            const storedWebsites = JSON.parse(await AsyncStorage.getItem('websites')) || [];
            const updatedWebsites = await Promise.all(storedWebsites.map(async (website) => {
                try {
                    const response = await fetch(`https://${website.name}.${website.extension}`);
                    return { ...website, status: response.status };
                } catch (error) {
                    return { ...website, status: 'Offline' };
                }
            }));
            setWebsites(updatedWebsites);
        };

        const timer = setInterval(fetchStatusCodes, 1000);
        return () => clearInterval(timer);
    }, []);

    async function saveModification(website) {

        await AsyncStorage.setItem('websites', JSON.stringify(websites));
    }

    return (
        <ScrollView>
            {
                websites && websites.map((website, index) => (
                        <View key={index} style={styles.websiteContainer}>
                            <Text style={styles.websiteName}>
                                {website.name + '.' + website.extension}
                            </Text>
                            <Text style={[styles.websiteStatus, website.status === 200 ? { color: 'green' } : { color: 'red' }]}>
                                {website.status === 200 ? 'Online' : 'Offline'}
                            </Text>
                            <View style={styles.buttons}>
                                <Pressable
                                    style={styles.button}
                                    onPress={() => setModalVisible({visible: true, website: website})}>
                                    <Text style={styles.textStyle}>Modifier</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.button}
                                    onPress={() =>
                                        navigation.navigate('Detail', {website: website})}>
                                    <Text style={styles.textStyle}>Detail</Text>
                                </Pressable>
                            </View>


                        </View>
                    ))
            }

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible.visible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible({ visible: false, website: {} });
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalField}>
                                <Text style={styles.fieldLabel}>Domaine :</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    defaultValue={modalVisible.website.name}
                                    onChangeText={newName => setModifyName(newName)}
                                />
                            </View>

                            <View style={styles.modalField}>
                                <Text style={styles.fieldLabel}>Extension:</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    defaultValue={modalVisible.website.extension}
                                    onChangeText={newExtension => setModifyExtension(newExtension)}
                                />
                            </View>


                            <Pressable
                                style={styles.button}
                                onPress={() => {
                                    setModalVisible({ visible: false, website: {} });
                                    saveModification(modalVisible.website)
                                }}>
                                <Text style={styles.textStyle}>Ok</Text>
                            </Pressable>

                        </View>
                    </View>
                </Modal>
            </View>
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
    },centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: '#949494',
        borderRadius: 20,
        padding: 7,
        marginTop: 7,
        marginRight: 7,
        width: 77,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalField: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    fieldLabel: {
        marginRight: 10,
        fontSize: 16,
        width: 80,
    },
    modalInput: {
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderColor: '#d2d2d2',
        flex: 1,
    },
});

export default ListWebsite;