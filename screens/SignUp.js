import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {icons, images, theme, COLORS, SIZES, FONTS} from '../constants';

const SignUp = () => {
  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() => console.log('Sign up')}>
        <Image
          source={icons.back}
          style={{width: 20, height: 20, tintColor: COLORS.white}}
        />
        <Text style={styles.signup}>Sign Up</Text>
      </TouchableOpacity>
    );
  };
  const renderLogo = () => {
    return (
      <View style={styles.logoView}>
        <Image
          source={images.wallieLogo}
          resizeMode="contain"
          style={{width: '60%'}}
        />
      </View>
    );
  };
  const renderForm = () => {
    return (
      <View style={styles.formContainer}>
        {/* full name  */}
        <View style={{marginTop: SIZES.padding * 3}}>
          <Text style={styles.fullName}>Full Name</Text>
          <TextInput
            style={styles.fullNameInput}
            placeholder="Enter Full Name"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        {/* country code */}
        <View style={{marginTop: SIZES.padding * 2}}>
          <Text style={styles.fullName}>Phone Number</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.phoneContainer}
              onPress={() => console.log('show modal')}>
              <View style={{justifyContent: 'center'}}>
                <Image source={icons.down} style={styles.downIcon} />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Image
                  source={images.usFlag}
                  resizeMode="contain"
                  style={styles.countryIcon}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Text style={{color: COLORS.white, ...FONTS.body3}}>US+01</Text>
              </View>
            </TouchableOpacity>
            {/* phone number  */}
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter Phone Number"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
        </View>
        {/* password  */}
        <View style={{marginTop: SIZES.padding * 2}}>
          <Text style={{color: COLORS.lightGreen, ...FONTS.body3}}>
            Password
          </Text>
          <TextInput
            style={styles.fullNameInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.showIcon}
            onPress={() => console.log('toggle')}>
            <Image
              source={icons.eye}
              style={{height: 20, width: 20, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderButton = () => {
    return (
      <View style={{margin: SIZES.padding * 3}}>
        <TouchableOpacity
          style={styles.continue}
          onPress={() => console.log('Navigate to Home ')}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={styles.linearGradient}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
      <StatusBar />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding * 6,
    paddingHorizontal: SIZES.padding * 2,
  },
  signup: {
    marginLeft: SIZES.padding * 1.5,
    color: COLORS.white,
    ...FONTS.h4,
  },
  logoView: {
    marginTop: SIZES.padding * 5,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: SIZES.padding * 3,
    marginHorizontal: SIZES.padding * 3,
  },
  fullName: {
    color: COLORS.lightGreen,
    ...FONTS.body3,
  },
  fullNameInput: {
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    paddingVertical: 0.5,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },
  phoneContainer: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
    ...FONTS.body2,
  },
  downIcon: {
    width: 10,
    height: 10,
    tintColor: COLORS.white,
  },
  countryIcon: {
    width: 30,
    height: 30,
  },
  phoneInput: {
    flex: 1,
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },
  showIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    height: 30,
    width: 30,
  },
  continue: {
    height: 60,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SignUp;
