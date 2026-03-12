import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    router.push("/products");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Catálogo de Produtos</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleLogin} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  }

});