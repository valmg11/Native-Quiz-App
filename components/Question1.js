import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Question1({navigation, route}) {
  let questionList = route.params.questionList;
  let [score, setScore] = useState(0);

  // push score to next page
  let nextQuestion = useCallback(() => {
    navigation.push("Question 2",  {questionIndex: 1, questionList, score});
  })
  
  // -1 makes no choices selected
  let [selectedIndex, setSelectedIndex] = useState(-1);

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
        // add point for correct answer
        if (value === 2) {
          setScore(prevScore => prevScore + 1)
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

export default Question1