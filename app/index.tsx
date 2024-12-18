import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require('@/assets/images/ecommerce-splash.jpg')}
        style={{ flex: 1 }}
        resizeMode='cover'
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              'transparent',
              'rgba(255,255,255,0.9)',
              'rgba(255,255,255,1)',
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text
                style={styles.title}
                entering={FadeInRight.delay(300).duration(300).springify()}
              >
                ShopX
              </Animated.Text>
              <Animated.Text
                style={styles.description}
                entering={FadeInRight.delay(500).duration(300)}
              >
                One Stop Solution for all Your Needs
              </Animated.Text>

              <View style={styles.socialLoginWrapper}>
                <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                  <Link href={'/signup'} asChild>
                    <TouchableOpacity style={styles.button}>
                      <Ionicons
                        name='mail-outline'
                        size={20}
                        color={Colors.black}
                      />
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
                    <Ionicons
                      name='logo-apple'
                      size={20}
                      color={Colors.black}
                    />
                    <Text style={styles.buttonTxt}>Continue with Apple</Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>

              <View style={styles.loginTxtContainer}>
                <Text style={styles.loginTxt}>Already have an account?</Text>
                <Link href={'/signup'} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTxtSpan}>SignIn</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    position: 'absolute',
    // inset: 0,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: 700,
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20,
  },
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
  loginTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  loginTxt: {
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: 600,
    marginLeft: 5,
  },
});