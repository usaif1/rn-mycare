import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../Styles';

const NeedHelp = () => {
  const heading = (
    <View style={[styles.mt_25, styles.align_center]}>
      <View style={[styles.wd300]}>
        <Text style={[styles.ft_weight_bold, styles.ftSize17]}>Need Help?</Text>
      </View>
    </View>
  );

  const helpline = (
    <View style={[styles.mt_10, styles.align_center]}>
      <View style={[styles.wd300, styles.pd_10, styles.shadow]}>
        <View style={[styles.fd_row]}>
          <Text>Call us on</Text>

          <Text
            style={[
              styles.pd_l_10,
              styles.ft_color_turquoise,
              styles.ft_weight_bold,
            ]}>
            0123-2345657
          </Text>
        </View>
        <View style={[styles.wd300, styles.fd_row]}>
          <Text>Email us on</Text>
          <Text
            style={[
              styles.pd_l_10,
              styles.ft_color_turquoise,
              styles.ft_weight_bold,
            ]}>
            contact@meddo.in
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      {heading}
      {helpline}
    </View>
  );
};

export default NeedHelp;
