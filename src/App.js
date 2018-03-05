import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import LibraryList from './components/LibraryList';


const App = () => {
  const { container } = style;
  return (
    <Provider store={createStore(reducers)}>
      <View style={container}>
        <Header headerText='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  );
}

const style = {
  container: {
    flex: 1,
  }
}

export default App;
