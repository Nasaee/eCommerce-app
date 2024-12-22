import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';
import { ProductType } from '@/types/type';
import { Stack } from 'expo-router';
import Header from '@/components/Header';

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/products`
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => <Text>{item.title}</Text>}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
