import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password === confirmPassword) {
      console.log('Usuário registrado:', username);
      navigation.navigate('Login'); // Redireciona de volta para a tela de login
    } else {
      alert('As senhas não correspondem!');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://wallpaperaccess.com/full/1465999.jpg' }} // Link da imagem de fundo
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')} // Usa require para imagens locais
          style={styles.logo}
        />
        <Text style={styles.logoText}>StockMaster</Text>
      </View>

      <View style={styles.container}>
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

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            value={confirmPassword}
            secureTextEntry
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela inteira
  },
  logoContainer: {
    position: 'absolute', // Permite que a logo fique acima da imagem de fundo
    top: 50, // Ajuste a distância do topo conforme necessário
    left: '50%', // Centraliza horizontalmente
    transform: [{ translateX: -60 }], // Ajusta o deslocamento para centralizar corretamente
    alignItems: 'center',
    zIndex: 1, // Define a ordem de empilhamento para ficar acima dos outros elementos
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10, // Ajuste o espaçamento abaixo do logo
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30, // Espaçamento abaixo do texto do logo
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente para contraste
    marginTop: 10, // Para evitar que os inputs fiquem atrás da logo
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
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
  button: {
    height: 50,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: 250,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
