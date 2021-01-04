import React from 'react';
import {Text, View} from 'react-native';

//imports
import YourMemberShip from './YourMemberShip';
import Details from './Details';
import FAQs from './FAQs';
import NeedHelp from './NeedHelp';

const MyCare = () => {
  return (
    <View>
      <YourMemberShip />
      <Details />
      <FAQs />
      <NeedHelp />
    </View>
  );
};

export default MyCare;
