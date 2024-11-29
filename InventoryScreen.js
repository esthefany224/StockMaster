import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const InventoryScreen = ({ products, navigation, removeProduct }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque</Text>

      {products.length === 0 ? (
        <Text style={styles.noProductsText}>Nenhum produto encontrado.</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()} // Supondo que cada produto tenha um id único
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={styles.productText}>Nome: {item.name}</Text>
              <Text style={styles.productText}>Quantidade: {item.quantity}</Text>
              <Text style={styles.productText}>Preço: R$ {item.price.toFixed(2)}</Text> {/* Exibe o preço formatado */}

              {/* Botão para remover produto */}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeProduct(item.id)} // Chama a função para remover o produto
              >
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* Botão para adicionar novo produto */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Text style={styles.addButtonText}>Adicionar Produto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  noProductsText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: 'gray',
  },
  productItem: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productText: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default InventoryScreen;
