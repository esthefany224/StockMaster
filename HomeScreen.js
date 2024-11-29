import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, FlatList, Dimensions, Alert } from 'react-native';

const HomePage = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  const [products, setProducts] = useState([
    {
      name: 'Calça Jeans Glitch',
      images: [
        'https://i.pinimg.com/736x/99/03/b5/9903b52852038583772c889c68500cbb.jpg',
        'https://i.pinimg.com/736x/45/c0/74/45c074945ac50812ecaa975635d2da3b.jpg',
        'https://i.pinimg.com/736x/80/c9/ff/80c9ff74867bc0a1d4003cadc29fc883.jpg',
      ],
      price: 100.0,
      quantity: 10,
    },
    {
      name: 'Calça Jogger',
      images: [
        'https://naotstore.com/cdn/shop/files/40155b14cfd039bfcdbc29bcd2b5f639.jpg?v=1724482339&width=600',
        'https://img.staticdj.com/20997f7df5981bf4a437a5473630f010.jpeg',
        'https://naotstore.com/cdn/shop/files/76d8d9b1f83c32d5bbd7a4acbd736bda.jpg?v=1724482339&width=600',
      ],
      price: 250.0,
      quantity: 5,
    },
    {
      name: 'Calça Bag Jeans',
      images: [
        'https://a-static.mlcdn.com.br/800x560/calca-bag-jeans-balao-carpenter-corte-reto-larga-kouck-urban/kouckurban/cal-bag-escura-42/465aa3d74dcf4810e16721a8d9b67e08.jpeg',
        'https://a-static.mlcdn.com.br/800x560/calca-bag-jeans-balao-carpenter-corte-reto-larga-kouck-urban/kouckurban/cal-bag-escura-42/e65ba10c3b1a79b87bca23f43659b357.jpeg',
        'https://a-static.mlcdn.com.br/800x560/calca-bag-jeans-balao-carpenter-corte-reto-larga-kouck-urban/kouckurban/cal-bag-escura-42/f31fd836da4df574e38fa793c6044b5d.jpeg',
      ],
      price: 75.0,
      quantity: 20,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Função para incrementar a quantidade
  const incrementQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
    checkLowStock(updatedProducts[index].quantity, updatedProducts[index].name);
  };

  // Função para decrementar a quantidade
  const decrementQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
      checkLowStock(updatedProducts[index].quantity, updatedProducts[index].name);
    }
  };

  // Função para verificar estoque baixo
  const checkLowStock = (quantity, productName) => {
    if (quantity < 6) {
      Alert.alert(
        'Alerta de Estoque',
        `O produto "${productName}" está com estoque baixo! Só há ${quantity} unidades restantes.`,
        [{ text: 'OK' }]
      );
    }
  };

  const renderProductImages = (images) => (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={images}
      renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.dateTime}>{currentDateTime}</Text>

      {products.map((product, index) => (
        <View key={index} style={styles.productContainer}>
          {renderProductImages(product.images)}
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
          <Text style={styles.productQuantity}>Quantidade: {product.quantity}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Adicionar" onPress={() => incrementQuantity(index)} />
            <Button title="Remover" color="red" onPress={() => decrementQuantity(index)} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  dateTime: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 21,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#007BFF',
  },
  productQuantity: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
});

export default HomePage;
