import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Question({navigation, route}) {

  // let question1 = questionList[0].choices;
  let questionList = route.params.questionList;
  // let questions = questionList.map(item => item.prompt);
  // let questions = question1.choices;

  // call exercise
  let nextQuestion = useCallback(() => {
    // add suggested exercise screen
    navigation.push("Question 2",  {exerciseKey: "3", exerciseList});
  })
  
// export default() => {
const [selectedIndex, setSelectedIndex] = useState(-1);
const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

return (
  <>
  <View>
    <Text style={styles.header}>{questionList[0].prompt}</Text>
  </View>

    <ButtonGroup
      buttons={questionList[0].choices}

      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      buttonStyle={{backgroundColor:"white"}}
      containerStyle={{width: 400, alignSelf: "center"}}
      vertical
    />

    <View style={{width: 200, alignSelf: "center"}}>
      <Button onPress={() => nextQuestion(item)} title="Next"></Button>
    </View>
    {/* <ButtonGroup
      buttons={['Multiple', 'Select', 'Button', 'Group']}
      selectMultiple
      selectedIndexes={selectedIndexes}
      onPress={(value) => {
        setSelectedIndexes(value);
      }}
    /> */}
  </>
)
}
  // return (
  //   // exercise buttons
  //     <View style={styles.container}>
  //       {/* <Text style={styles.header}>Exercise!</Text>
  //       <FlatList data={questions} renderItem={({item}) =>
  //         <View style={styles.buttons}>
  //           <Button onPress={() => goToExercise(item)} title={item.name} color="#4e92d3"></Button>
  //         </View>
  //       }/> */}
  //       <StatusBar style="auto" />
  //     </View>
  // )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9CBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center"
  },
  buttons: {
    marginBottom: 20,
  }
});

export default Question