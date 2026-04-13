import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useCallback } from 'react';

function Question({navigation, route}) {
  let questions = route.params.exerciseList;

  // call exercise
  let goToExercise = useCallback(({name, key}) => {
    navigation.navigate(name,  {exerciseKey: key, count: 0});
  })
  

  return (
    // exercise buttons
      <View style={styles.container}>
        <Text style={styles.header}>Exercise!</Text>
        <FlatList data={questions} renderItem={({item}) =>
          <View style={styles.buttons}>
            <Button onPress={() => goToExercise(item)} title={item.name} color="#4e92d3"></Button>
          </View>
        }/>
        <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9CBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontFamily: "Verdana",
    color: "#092C56",
    marginBottom: 20,
    marginTop: 270,
  },
  buttons: {
    marginBottom: 20,
  }
});

export default Question