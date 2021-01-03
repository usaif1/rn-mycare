import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

//imports
import {styles} from '../../Styles';

const Details = () => {
  const expiresOn = (
    <View style={[styles.fd_row, styles.jc_spacearound]}>
      <View style={[styles.pd_b_10]}>
        <Text style={[styles.mt_15, styles.ftSize15, styles.ft_weight_bold]}>
          Expires On: 20th August 2020
        </Text>
        <Text style={[styles.mt_15, styles.pd_b_10, styles.ft_color_grey]}>
          Avail your remaining free services
        </Text>
      </View>
      <View></View>
    </View>
  );

  const planDetails = (
    <View style={styles.align_center}>
      <View style={styles.wd300}>
        <View style={[styles.fd_row, styles.jc_spacebetween]}>
          <Text style={[styles.mb_10, styles.ft_color_grey]}>
            Consultations(Tele & in Clinic)
          </Text>
          <Text
            style={[
              styles.mb_10,
              styles.ft_color_turquoise,
              styles.ft_weight_bold,
            ]}>
            Unlimited
          </Text>
        </View>
        <View style={[styles.fd_row, styles.jc_spacebetween]}>
          <Text style={[styles.mb_10, styles.ft_color_grey]}>
            Medicine Discount
          </Text>
          <Text
            style={[
              styles.mb_10,
              styles.ft_color_turquoise,
              styles.ft_weight_bold,
            ]}>
            10%
          </Text>
        </View>
        <View style={[styles.fd_row, styles.jc_spacebetween]}>
          <Text style={[styles.mb_10, styles.ft_color_grey]}>
            Diagnostics Discount
          </Text>
          <Text
            style={[
              styles.mb_10,
              styles.ft_color_turquoise,
              styles.ft_weight_bold,
            ]}>
            10%
          </Text>
        </View>
      </View>
    </View>
  );

  const totalSavings = (
    <View style={[styles.align_center, styles.bgLightCyan, styles.pd_10]}>
      <View style={[styles.fd_row, styles.wd300, styles.jc_spacebetween]}>
        <Text style={[styles.ft_color_turquoise, styles.ft_weight_bold]}>
          Total Savings Till Now
        </Text>
        <Text style={[styles.ft_color_turquoise, styles.ft_weight_bold]}>
          Rs 500
        </Text>
      </View>
    </View>
  );

  const buttons = (
    <View style={[styles.align_center, styles.mt_25]}>
      <View style={[styles.fd_row, styles.jc_spacebetween, styles.wd300]}>
        <Button
          mode="outlined"
          contentStyle={{height: 30, justifyContent: 'flex-start'}}
          onPress={() => console.log('button pressed')}
          style={[
            styles.border_purple,
            styles.br_30,
            styles.border_width_1,
            styles.wd135,
          ]}>
          <Text
            style={[
              styles.ft_weight_bold,
              styles.ft_color_purple,
              styles.ftSize12,
            ]}>
            Book Lab Test
          </Text>
        </Button>
        <Button
          mode="outlined"
          onPress={() => console.log('button pressed')}
          contentStyle={{height: 30, justifyContent: 'flex-start'}}
          style={[
            styles.border_purple,
            styles.br_30,
            styles.border_width_1,
            styles.wd135,
          ]}>
          <Text
            style={[
              styles.ft_weight_bold,
              styles.ft_color_purple,
              styles.ftSize12,
            ]}>
            {' '}
            Book Consult
          </Text>
        </Button>
      </View>
    </View>
  );

  return (
    <View>
      {expiresOn}
      {planDetails}
      {totalSavings}
      {buttons}
    </View>
  );
};

export default Details;
