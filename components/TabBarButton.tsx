import { Colors } from '@/constants/Colors';
import { icon } from '@/constants/icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  isFocused: boolean;
  routeName: string;
};

function TabBarButton({
  label,
  onPress,
  onLongPress,
  isFocused,
  routeName,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {/* Badge */}
      {routeName === 'cart' && (
        <View style={styles.budgeWrapper}>
          <Text style={styles.budgeText}>3</Text>
        </View>
      )}
      {icon[routeName as keyof typeof icon]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
    </Pressable>
  );
}

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  budgeWrapper: {
    position: 'absolute',
    backgroundColor: Colors.highlight,
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10,
  },
  budgeText: {
    color: Colors.black,
    fontSize: 12,
  },
});
