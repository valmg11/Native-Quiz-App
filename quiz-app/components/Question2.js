import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Question2({navigation, route, score}) {
  let questionList = route.params.questionList;
  let updatedScore = route.params.score;
  
  let [newScore, setNewScore] = useState(updatedScore);
  let nextQuestion = useCallback(() => {
    navigation.push("Question 3",  {questionIndex: 2, questionList, newScore});
  })

  const [selectedIndexes, setSelectedIndexes] = useState([-1]);

return (
  <>
  <View>
    <Text style={styles.header}>{questionList[1].prompt}</Text>
    {/* <Text>{updatedScore}</Text> */}
  </View>

    <ButtonGroup
      buttons={questionList[1].choices}
      selectMultiple
      selectedIndexes={selectedIndexes}
      onPress={(value) => {
        setSelectedIndexes(value);
        if (value.includes(1)) {
          setNewScore(updatedScore + 1);
        }
        if (value.includes(3)) {
          setNewScore(updatedScore + 1);
        }
      }}
      buttonStyle={{backgroundColor:"white"}}
      containerStyle={{width: 400, alignSelf: "center"}}
      vertical
    />
    <View style={{width: 200, alignSelf: "center"}}>
      <Button onPress={() => nextQuestion()} title="Next"></Button>
    </View>
  </>
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
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center"
  },
  buttons: {
    marginBottom: 20,
  }
});

export default Question2