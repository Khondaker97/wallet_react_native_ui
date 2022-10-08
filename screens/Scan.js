import React from 'react';
import {RNCamera} from 'react-native-camera';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const Scan = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        <TouchableOpacity
          style={{width: 45, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.close}
            style={{height: 20, width: 20, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>
            Scan for Payment
          </Text>
        </View>
        <TouchableOpacity
          style={styles.info}
          onPress={() => console.log('Info')}>
          <Image
            source={icons.info}
            style={{height: 25, width: 25, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderPaymentMethods = () => {
    return (
      <View style={styles.paymentContainer}>
        <Text style={{...FONTS.h4}}>Another Payments Method</Text>
        <View style={styles.optionWrapper}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => console.log('Phone Number')}>
            <View style={styles.phoneIcon}>
              <Image
                source={icons.phone}
                resizeMode="cover"
                style={{height: 25, width: 25, tintColor: COLORS.purple}}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.body4,
                color: COLORS.black,
              }}>
              Phone Number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: SIZES.padding * 2,
            }}
            onPress={() => console.log('Barcode')}>
            <View style={styles.barcode}>
              <Image
                source={icons.barcode}
                resizeMode="cover"
                style={{height: 25, width: 25, tintColor: COLORS.primary}}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.body4,
                color: COLORS.black,
              }}>
              Barcode
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.transparent}}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'Camera is required for barcode scanning',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {renderHeader()}
        {renderPaymentMethods()}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    height: 45,
    width: 45,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 220,
    padding: SIZES.padding * 3,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  optionWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: SIZES.padding * 2,
  },
  phoneIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.lightpurple,
  },
  barcode: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
export default Scan;
