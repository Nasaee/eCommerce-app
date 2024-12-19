import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return (
    <TextInput
      placeholder='Email Address'
      placeholderTextColor={Colors.gray}
      style={styles.inputFeild}
      {...props}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFeild: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    borderRadius: 5,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
  },
});
