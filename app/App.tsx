import React from 'react';
import {GenerateDataButton} from './components/GenerateDataButton';
import {RealmProvider} from './realm';
import {StyleSheet, View} from 'react-native';
import {FilteredData} from './components/FilteredData';

function App() {
  return (
    <RealmProvider>
      <View style={styles.root}>
        <GenerateDataButton />
        <FilteredData />
      </View>
    </RealmProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
