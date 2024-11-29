import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  
  // Example products with categories
  const [products, setProducts] = useState([
    {
      category: 'Jeans',
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
      category: 'Joggers',
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
      category: 'Jeans',
      name: 'Calça Bag Jeans',
      images: [
        'https://a-static.mlcdn.com.br/800x560/calca-bag-jeans-balao-carpenter-corte-reto-larga-kouck-urban/kouckurban/cal-bag-escura-42/465aa3d74dcf4810e16721a8d9b67e08.jpeg',
        'https://a-static.mlcdn.com.br/800x560/calca-bag-jeans-balao-carpenter-corte-reto-larga-kouck-urban/kouckurban/cal-bag-escura-42/e65ba10c3b1a79b87bca23f43659b357.jpeg',
        'https://a-static.mlcdn.com.br/800x560/calca-bag-jeans-balao-carpenter-corte-reto-larga-kouck-urban/kouckurban/cal-bag-escura-42/f31fd836da4df574e38fa793c6044b5d.jpeg',
      ],
      price: 75.0,
      quantity: 20,
    },
    {
      category: 'Feminino',
      name: 'Vestido Floral',
      images: [
        'https://i.pinimg.com/originals/7b/c3/56/7bc356fce9e89a71077a1953516f27fa.jpg',
        'https://i.pinimg.com/originals/39/f4/c7/39f4c74511d3cf52e89d17c8b2d7b3c3.jpg',
        'https://i.pinimg.com/originals/72/ae/a6/72aea64f971f4953adadfd96377c5451.jpg',
      ],
      price: 150.0,
      quantity: 8,
    },
    {
      category: 'Feminino',
      name: 'Blusa de Manga Longa',
      images: [
        'https://i.pinimg.com/originals/9a/d9/d0/9ad9d0c9b4107d7e92bc157e77d5fba9.jpg',
        'https://i.pinimg.com/originals/c9/6c/38/c96c382efc4f3b13ed8b90bcf2a2fe2b.jpg',
        'https://i.pinimg.com/originals/8e/47/ba/8e47ba28377c32a4de74db3c59e8a55f.jpg',
      ],
      price: 90.0,
      quantity: 12,
    },
  ]);

  // Filter products based on category
  const filteredProducts = products.filter(product => product.category === category);

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
      <Text style={styles.categoryTitle}>{category}</Text>
      
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            {renderProductImages(product.images)}
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
            <Text style={styles.productQuantity}>Quantidade: {product.quantity}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noProducts}>Não há produtos nesta categoria.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  noProducts: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
  },
});

export default CategoryScreen;
