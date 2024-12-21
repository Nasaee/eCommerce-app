import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link, router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import InputField from '@/components/InputField';
import { Colors } from '@/constants/Colors';
import SocialLoginButton from '@/components/SocialLoginButton';

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Signin',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='close' size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Login to Your Account</Text>
        <InputField
          placeholder='Email Address'
          placeholderTextColor={Colors.gray}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <InputField
          placeholder='Password'
          placeholderTextColor={Colors.gray}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.dismissAll();
            router.push('/(tabs)');
          }}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>

        <View style={styles.loginTxtContainer}>
          <Text style={styles.loginTxt}>Don't have an account?</Text>
          <Link href={'/signup'} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>SignUp</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.divider} />

        <SocialLoginButton emailHref={'/signin'} />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 600,
  },
  loginTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
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
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom: 30,
  },
});
