/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Footer from "./Footer";
import Header from "./Header";
import ListWebsite from "./ListWebsite";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <ListWebsite/>
        <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default Home;
