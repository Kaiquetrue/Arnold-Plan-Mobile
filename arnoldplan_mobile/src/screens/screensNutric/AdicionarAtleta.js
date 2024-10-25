import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AdicionarAtleta({ navigation }) {
  
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [dataUm, setDataUm] = useState(new Date());
  const [showUm, setShowUm] = useState(false);
  const [modeUm, setModeUm] = useState('dateUm');

  const [dataDois, setDataDois] = useState(new Date());
  const [showDois, setShowDois] = useState(false);
  const [modeDois, setModeDois] = useState('dateDois');

  const onChangeUm = (e, dataSelectUm) => {
    setDataUm(dataSelectUm);
    setShowUm(false);
  };

  const showDataUm = (showUm) => {
    setShowUm(true);
    setModeUm(showUm);
  }

  const onChangeDois = (e, dataSelectDois) => {
    setDataDois(dataSelectDois);
    setShowDois(false);
  };

  const showDataDois = (showDois) => {
    setShowDois(true);
    setModeDois(showDois);
  }
  
 return (
    <View style = {styles.centralizaView}>
      <View style = {styles.container}>

        <View style = {styles.containerTitle}>
          <Text style = {styles.title}>ADICIONAR ATLETA</Text>
        </View>

        <View style={styles.containerText}>

          <TextInput
            style={styles.input}
            placeholder="ID"
            value={id}
            onChangeText={setId}
          />

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Peso"
            value={peso}
            onChangeText={setPeso}
          />

          <TextInput
            style={styles.input}
            placeholder="Altura"
            value={altura}
            onChangeText={setAltura}
          />

          <View style = {styles.containerData}>
            <Text style={styles.inputData}>DataInicial</Text>
            
            <Pressable style={styles.buttonData} onPress={() => showDataUm('dateUm')}>
              <Text style={styles.text}>SELECIONAR</Text>
            </Pressable>
            {
            showUm && (
              <DateTimePicker
                value = {dataUm}
                modeUm = {modeUm}
                onChangeUm = {onChangeUm}
              />
              )
            }
          </View>

          <View style = {styles.containerData}>
            <Text style={styles.inputData}>DataFinal</Text>
            
            <Pressable style={styles.buttonData} onPress={() => showDataDois('dateDois')}>
              <Text style={styles.text}>SELECIONAR</Text>
            </Pressable>
            {
            showDois && (
              <DateTimePicker
                value = {dataDois}
                modeDois = {modeDois}
                onChangeUm = {onChangeDois}
              />
              )
            }
          </View>
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('PerfilNutric')}>
          <Text style={styles.text}>ADICIONAR</Text>
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
  containerData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  inputData: {
    width: '50%',
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
  buttonData: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'blue',
    height: 40,
    width: '45%',
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