import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// Importação das telas
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen'; 
import AddProductScreen from './AddProductScreen';
import InventoryScreen from './InventoryScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Componente personalizado para o menu Drawer
const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Página Inicial"
        onPress={() => navigation.navigate('Home')}
      />
      <DrawerItem
        label="Estoque"
        onPress={() => navigation.navigate('Inventory')}
      />
      <DrawerItem
        label="Sair"
        onPress={() => navigation.replace('Login')}
      />
    </DrawerContentScrollView>
  );
};

// Navegação dentro do Drawer
const DrawerNavigator = ({ products, setProducts, removeProduct }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
      <Drawer.Screen name="AddProduct" options={{ title: 'Adicionar Produto' }}>
        {props => <AddProductScreen {...props} products={products} setProducts={setProducts} />}
      </Drawer.Screen>
      <Drawer.Screen name="Inventory" options={{ title: 'Estoque' }}>
        {props => <InventoryScreen {...props} products={products} removeProduct={removeProduct} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  const [products, setProducts] = useState([]); // Estado centralizado dos produtos

  // Função para remover um produto
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Recuperação de Senha' }} />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <DrawerNavigator {...props} products={products} setProducts={setProducts} removeProduct={removeProduct} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
