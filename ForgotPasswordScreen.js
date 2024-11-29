import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ForgotPasswordScreen = ({ navigation }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');

  const handlePasswordRecovery = () => {
    // Lógica de recuperação de senha (simulação)
    if (usernameOrEmail !== '') {
      Alert.alert('Instruções Enviadas', 'Se o usuário existir, enviaremos as instruções para recuperação de senha.');
      navigation.navigate('Login'); // Navega de volta para a tela de login após o envio
    } else {
      Alert.alert('Erro', 'Por favor, insira um nome de usuário ou e-mail.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de Senha</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário ou E-mail"
          value={usernameOrEmail}
          onChangeText={setUsernameOrEmail}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePasswordRecovery}>
        <Text style={styles.buttonText}>Enviar Instruções</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkContainer}>
        <Text style={styles.linkText}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
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
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#2196F3',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default ForgotPasswordScreen;
