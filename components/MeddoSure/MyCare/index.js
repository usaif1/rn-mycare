import React from 'react';
import {Text, View} from 'react-native';

//imports
import YourMemberShip from './YourMemberShip';
import Details from './Details';
import FAQs from './FAQs';

const MyCare = () => {
  return (
    <View>
      <YourMemberShip />
      <Details />
      <FAQs />
    </View>
  );
};

export default MyCare;
