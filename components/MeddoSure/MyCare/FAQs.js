import React from 'react';
import {View, Text} from 'react-native';
import {List} from 'react-native-paper';

//imports
import {styles} from '../../Styles';

const dataArray = [
  {key: '1', q: 'Unlimited Consults, Discounted Services?', a: 'First Answer'},
  {key: '2', q: 'Unlimited Consults, Discounted Services?', a: 'Second Answer'},
  {key: '3', q: 'Unlimited Consults, Discounted Services?', a: 'Third Answer'},
];

const FAQs = () => {
  const heading = (
    <View style={[styles.mt_25, styles.align_center]}>
      <View style={[styles.wd300]}>
        <Text style={[styles.ft_weight_bold, styles.ftSize17]}>FAQs</Text>
      </View>
    </View>
  );

  const accordion = (
    <View style={[styles.align_center, styles.mt_15]}>
      <View style={[styles.wd300, styles.shadow]}>
        {dataArray.map((data) => {
          return (
            <List.Accordion
              titleStyle={[
                styles.ftSize12,
                styles.ft_weight_bold,
                styles.ft_color_black,
              ]}
              style={{padding: 0}}
              title={data.q}
              key={data.key}>
              <List.Item
                titleStyle={[styles.ftSize12, styles.ft_color_black]}
                title={data.a}
              />
            </List.Accordion>
          );
        })}
      </View>
    </View>
  );

  return (
    <View>
      {heading}
      {accordion}
    </View>
  );
};

export default FAQs;
