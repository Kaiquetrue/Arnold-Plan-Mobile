import { Text, SafeAreaView, StyleSheet, View, Pressable} from 'react-native';

export default function TelaLogout({ navigation }) {
  return (
    <View style = {styles.centralizaView}>
      <View style = {styles.container}>
        <Text style = {styles.title}>Deseja sair?</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>SAIR</Text>
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
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 32,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    elevation: 3,
    backgroundColor: 'red',
    width: '100%',
  },
  centralizaView: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
