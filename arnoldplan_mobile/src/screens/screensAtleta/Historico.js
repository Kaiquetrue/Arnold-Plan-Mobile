import { Text, StyleSheet, View, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';

export default function TelaHistorico() {

  const [data, setData] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const onChange = (e, dataSelect) => {
    setData(dataSelect);
    setShow(false);
  };

  const showData = (show) => {
    setShow(true);
    setMode(show);
  }

  return (
    <View style = {styles.centralizaView}>
      <View style = {styles.containerData}>
        <Text style = {styles.title}>SELECIONE A DATA</Text>
        <Pressable style={styles.button} onPress={() => showData('date')}>
          <Text style={styles.text}>BUSCAR</Text>
        </Pressable>
        {
          show && (
            <DateTimePicker
              value = {data}
              mode = {mode}
              onChange = {onChange}
            />
          )
        }
      </View>  
      <View style = {styles.container}>
        <Text style = {styles.title}>SEU HISTÓRICO</Text>
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
    height: '70%',
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
  containerData: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    height: '16%',
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
  centralizaView: {
    flex: 1,
    flexDirection: 'bar',
    justifyContent: 'space-evenly',
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
});

