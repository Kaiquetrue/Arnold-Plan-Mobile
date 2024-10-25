import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Alert } from 'react-native';
import styles from './styles/styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const TrocaPerfil = () => {
    if(email === '1'){
      navigation.navigate('PerfilAtleta')
    }else if(email === '2'){
      navigation.navigate('PerfilNutric')
    }else{
      Alert.alert(
      'ERRO!',
      'Insira um login válido',
      [
        { text: 'OK', style: 'cancel' },
      ],
      { cancelable: false }
    );
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Pressable style={styles.button} onPress={TrocaPerfil}>
        <Text style={styles.text}>LOGIN</Text>
      </Pressable>
      <Text></Text>
      <Pressable style={styles.buttonCadastrar} onPress={() => navigation.navigate('AN')}>
        <Text style={styles.textCadastrar}>Não possui login? Cadastre-se</Text>
      </Pressable>
    </View>
  );
}