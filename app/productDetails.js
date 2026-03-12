import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetails() {

  const { title, description, price, discountPercentage, image } = useLocalSearchParams();

  return (
    <View style={styles.container}>

      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.price}>Preço: ${price}</Text>

      <Text style={styles.discount}>Desconto: {discountPercentage}%</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  image: {
    width: "100%",
    height: 250,
    marginBottom: 20
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },

  description: {
    marginBottom: 10
  },

  price: {
    fontSize: 18
  },

  discount: {
    color: "green"
  }
});