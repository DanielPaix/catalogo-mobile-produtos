import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { router } from "expo-router";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("mens-shirts");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/productDetails",
          params: {
            title: item.title,
            description: item.description,
            price: item.price,
            discountPercentage: item.discountPercentage,
            image: item.thumbnail
          }
        })
      }
    >
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.price}>Preço: R$ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Catálogo de Produtos</Text>
    <Button
      title="Logout"
      onPress={() => router.replace("/")}
       />

      <View style={styles.tabs}>

        <Button
          title="Masculino"
          onPress={() => setCategory("mens-shirts")}
        />

        <Button
          title="Feminino"
          onPress={() => setCategory("womens-dresses")}
        />

      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  card: {
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
  },

  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  price: {
    color: "green",
    marginTop: 5,
  },
});