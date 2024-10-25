import { Text, SafeAreaView, StyleSheet, View, Pressable} from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style = {styles.centralizaView}>
      <View style = {styles.container}>
        
        <View style = {styles.containerTitle}>
          <Text style = {styles.title}>MEU PERFIL</Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.input}>NOME:</Text>
          <Text style={styles.input}>CRM:</Text>
          <Text style={styles.input}>INSTAGRAM:</Text>
          <Text style={styles.input}>E-MAIL:</Text>
        </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate('EPN')}>
          <Text style={styles.text}>EDITAR</Text>
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
  centralizaView: {
    flex: 1,
    justifyContent: 'center',
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
  containerText: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'top',
    padding: 16,
    width: '100%',
    height: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
    textAlignVertical: 'center',
  },
});