import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ManageCategoriesScreen = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    } else {
      Alert.alert('Erro', 'Categoria inválida ou já existente!');
    }
  };

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova Categoria"
        value={newCategory}
        onChangeText={setNewCategory}
      />
      <Button title="Adicionar Categoria" onPress={handleAddCategory} />

      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveCategory(item)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  categoryText: { fontSize: 16 },
  removeButton: {
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 3,
  },
  removeButtonText: { color: 'white', fontWeight: 'bold' },
});

export default ManageCategoriesScreen;
