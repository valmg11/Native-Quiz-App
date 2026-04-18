import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Question3({navigation, route}) {
  let questionList = route.params.questionList;
  let updatedScore2 = route.params.newScore;
  
  // update score
  let [finalScore, setFinalScore] = useState(updatedScore2);

  // push score to next page
  let nextQuestion = useCallback(() => {
    navigation.push("Summary",  {questionIndex: 3, questionList, finalScore});
  })
  
  // -1 makes no choices selected
  let [selectedIndex, setSelectedIndex] = useState(-1);

return (
  <>
  <View>
    <Text style={styles.header}>{questionList[2].prompt}</Text>
  </View>

    <ButtonGroup
      buttons={questionList[2].choices}

      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
        // add point for correct answer
        if (value === 0) {
          setFinalScore(updatedScore2 + 1)
        }
      }}
      buttonStyle={{backgroundColor:"white"}}
      containerStyle={{width: 400, alignSelf: "center"}}
      vertical
    />

    <View style={{width: 150, alignSelf: "center"}}>
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
  }
});

export default Question3