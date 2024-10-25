import { Text, SafeAreaView, StyleSheet, View, Pressable} from 'react-native';
import { Card, DataTable } from 'react-native-paper';

export default function TelaPlano({ navigation }) {
  return (
    <View style = {styles.centralizaView}>

      <View style = {styles.containerTitle}>
        <Text style = {styles.title}>MEUS ATLETAS</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('AA')}>
          <Text style={styles.text}>ADICIONAR</Text>
        </Pressable>
      </View>

      <View style = {styles.container}>

        <View style = {styles.containerAtleta}>
          <View style = {styles.estiloContAtleta}>
            
            <Text style = {styles.estiloTxtAtleta}>Atleta de Exemplo 1</Text>
              
              <View style={styles.btnsAlign}>
                <View style = {styles.estiloBtnAtleta}>
                  <Pressable style={styles.buttonEditar} onPress={() => navigation.navigate('EA')}>
                    <Text style={styles.textBtn}>E</Text>
                  </Pressable>

                  <Pressable style={styles.buttonExcluir}>
                    <Text style={styles.textBtn}>X</Text>
                  </Pressable>
                </View>
              </View>
          </View>
        </View>  

        <View style = {styles.containerAtleta}>
          <View style = {styles.estiloContAtleta}>
            
            <Text style = {styles.estiloTxtAtleta}>Atleta de Exemplo 2</Text>
              
              <View style={styles.btnsAlign}>
                <View style = {styles.estiloBtnAtleta}>
                  <Pressable style={styles.buttonEditar}>
                    <Text style={styles.textBtn} onPress={() => navigation.navigate('EA')}>E</Text>
                  </Pressable>

                  <Pressable style={styles.buttonExcluir}>
                    <Text style={styles.textBtn}>X</Text>
                  </Pressable>
                </View>
              </View>
          </View>
        </View> 

        <View style = {styles.containerAtleta}>
          <View style = {styles.estiloContAtleta}>
            
            <Text style = {styles.estiloTxtAtleta}>Atleta de Exemplo 3</Text>
              
              <View style={styles.btnsAlign}>
                <View style = {styles.estiloBtnAtleta}>
                  <Pressable style={styles.buttonEditar}>
                    <Text style={styles.textBtn} onPress={() => navigation.navigate('EA')}>E</Text>
                  </Pressable>

                  <Pressable style={styles.buttonExcluir}>
                    <Text style={styles.textBtn}>X</Text>
                  </Pressable>
                </View>
              </View>
          </View>
        </View> 
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  containerTitle: {
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
  containerAtleta: {
    width: '95%',
    height: '8%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,
    marginTop: 5,
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
  estiloContAtleta: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  estiloBtnAtleta: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonEditar: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'blue',
    width: '30%',
    height: '90%',
    marginRight: 3,
  },
  buttonExcluir: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'red',
    width: '30%',
    height: '90%',
  },
  btnsAlign: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 2,
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  estiloTxtAtleta: {
    marginLeft: 5,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
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

