import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const AddProductScreen = ({ navigation, products, setProducts }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [supplier, setSupplier] = useState('');

  const handleAddProduct = () => {
    if (product && quantity && price && supplier) {
      const newProduct = {
        id: Math.random().toString(),
        name: product,
        quantity: parseInt(quantity),
        price: parseFloat(price),
        supplier,
      };

      setProducts([...products, newProduct]);
      setProduct('');
      setQuantity('');
      setPrice('');
      setSupplier('');
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      navigation.goBack();
    } else {
      Alert.alert('Erro', 'Preencha todos os campos do produto!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Produto" value={product} onChangeText={setProduct} />
      <TextInput style={styles.input} placeholder="Fornecedor" value={supplier} onChangeText={setSupplier} />
      <TextInput style={styles.input} placeholder="Quantidade" keyboardType="numeric" value={quantity} onChangeText={setQuantity} />
      <TextInput style={styles.input} placeholder="Preço" keyboardType="numeric" value={price} onChangeText={setPrice} />
      <Button title="Cadastrar Produto" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 },
});

export default AddProductScreen;
