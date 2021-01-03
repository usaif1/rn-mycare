import React from 'react';
import {Text, View, Image} from 'react-native';

//imports
import styles from '../../Styles';

const YourMemberShip = () => {
  const heading = (
    <View style={styles.align_center}>
      <View style={[styles.fd_row, styles.align_flex_end]}>
        <Text style={[styles.pd_r_10, styles.lsp_half, styles.ftSize18]}>
          Your
        </Text>
        <Image
          source={require('../../../assets/myCare.png')}
          style={[styles.wd150, styles.mb_negative]}
          resizeMode="contain"
        />
        <Text style={[styles.pd_l_10, styles.lsp_half, styles.ftSize18]}>
          Membership
        </Text>
      </View>
    </View>
  );

  const totalSavings = (
    <View
      style={[
        styles.bgYellow,
        styles.fd_row,
        styles.pd_20,
        styles.jc_spacearound,
      ]}>
      <View
        style={[
          styles.bgPurple,
          styles.pd_10,
          styles.fd_row,
          styles.wd200,
          styles.jc_spacearound,
          styles.align_center,
          styles.br_8,
        ]}>
        <Text style={[styles.wd65, styles.ft_color_purple, styles.ftSize17]}>
          Total Savings
        </Text>
        <Text style={[styles.ft_weight_bold, styles.ftSize18]}>Rs 458</Text>
      </View>
      <View>
        <Text style={[styles.ftSize10, styles.ft_weight_bold]}>
          Valid Till:
        </Text>
        <Text style={[styles.ftSize10, styles.ft_weight_bold]}>
          31st March 2021
        </Text>
        <Text style={[styles.ftSize10, styles.ft_weight_bold, styles.mt_10]}>
          Members: 3
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      {heading}
      {totalSavings}
    </View>
  );
};

export default YourMemberShip;
