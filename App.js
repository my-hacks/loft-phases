import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Emerson</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
};

export default App;
