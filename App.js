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
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import ListWebsite from "./src/components/ListWebsite";

function App() {
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

export default App;
