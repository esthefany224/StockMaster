import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      // Navegando para a tela de adicionar produtos
      navigation.navigate('Home', { products: [], setProducts: () => {} });
    } else {
      // Exibir um alerta se o login falhar
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://wallpaperaccess.com/full/1465999.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Logo da aplicação */}
        <Image
          source={require('./assets/logo.png')} // Use require para imagens locais
          style={styles.logo}
        />
        <Text style={styles.logoText}>StockMaster</Text>

        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Botão de Cadastro */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.linkContainer}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Botão Esqueci a Senha */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.linkContainer}>
          <Text style={styles.registroText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  registerText: {
    color: '#ffffff',
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  registroText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  button: {
    height: 45,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default LoginScreen;
