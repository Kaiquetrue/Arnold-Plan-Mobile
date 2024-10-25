import { Text, SafeAreaView, StyleSheet, View, Pressable} from 'react-native';
import { Card } from 'react-native-paper';

export default function TelaPlano() {
  return (
    <View style = {styles.centralizaView}>
      <View style = {styles.container}>
        <Text style = {styles.title}>PLANO</Text>
      </View>
      <View style = {styles.container}>
        <Text style = {styles.title}>REALIZADO</Text>
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
    height: '45%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: '20',
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
});
