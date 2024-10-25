import React, { useState } from 'react';
import { Text, TextInput,StyleSheet, View, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

export default function AlterarDieta({ navigation }) {

  const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Dia da semana',
    value: null,
  };

  const options = [
    { label: 'Segunda-feira', value: 'option1' },
    { label: 'Terça-feira', value: 'option2' },
    { label: 'Quarta-feira', value: 'option3' },
    { label: 'Quinta-feira', value: 'option4' },
    { label: 'Sexta-feira', value: 'option5' },
    { label: 'Sábado', value: 'option6' },
    { label: 'Domingo', value: 'option7' },
  ];

  return (
    <View>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    </View>
  );
};

 return (
   
    <View style = {styles.centralizaView}>
      <View style = {styles.container}>

        <View style = {styles.containerTitle}>
          <Text style = {styles.title}>ALTERAR DIETA</Text>
        </View>

        <View style={styles.containerText}>

          <View>
            <Dropdown />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Café da manhã"
          />

          <TextInput
            style={styles.input}
            placeholder="Intermediário"
          />

          <TextInput
            style={styles.input}
            placeholder="Almoço"
          />

          <TextInput
            style={styles.input}
            placeholder="Intermediário"
          />

          <TextInput
            style={styles.input}
            placeholder="Janta"
          />

        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('EA')}>
          <Text style={styles.text}>SALVAR</Text>
        </Pressable>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    height: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,
  },
  containerText: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'top',
    padding: 16,
    width: '100%',
    height: '100%',
  },
  centralizaView: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    elevation: 3,
    backgroundColor: 'blue',
    width: '100%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containerTitle: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    height: '10%',
  },
});