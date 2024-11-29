import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, FlatList, Dimensions, Alert } from 'react-native';

const ProductsByCategoryScreen = ({ navigation }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  const categories = ['Jeans', ]; // Define the categories

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.dateTime}>{currentDateTime}</Text>

      {/* Display each category as a clickable button */}
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Button
            title={`feminino ${category}`}
            onPress={() => navigation.navigate('Category', { category })}
          />
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
  categoryContainer: {
    marginBottom: 20,
  },
});

export default ProductsByCategoryScreen;
