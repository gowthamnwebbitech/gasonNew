import React from 'react';
import { StatusBar } from 'react-native';
import { Providers } from './Providers';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Providers />
    </>
  );
}

export default App;