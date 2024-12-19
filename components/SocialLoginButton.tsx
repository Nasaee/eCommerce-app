import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Href, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';

type Props = {
  emailHref: Href;
};

const SocialLoginButton = (props: Props) => {
  const { emailHref } = props;
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name='mail-outline' size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('@/assets/images/google.png')}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.buttonTxt}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name='logo-apple' size={20} color={Colors.black} />
          <Text style={styles.buttonTxt}>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: 'stretch',
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 15,
  },
  buttonTxt: {
    fontSize: 14,
    fontWeight: 600,
    color: Colors.black,
  },
});