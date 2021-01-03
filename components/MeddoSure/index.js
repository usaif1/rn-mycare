//dependencies
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//imports
import MyCare from './MyCare/index';
import History from './History';

const index = () => {
  const [component, setComponent] = useState('mycare');

  const header = (
    <View style={styles.headerWrapper}>
      <View style={styles.headerContainer}>
        <Text>myCare</Text>
        <Text>history</Text>
      </View>
    </View>
  );

  return (
    <View>
      {header}
      {component === 'mycare' ? <MyCare /> : <History />}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  headerWrapper: {
    alignItems: 'center',
    marginTop: 25,
  },
  headerContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
