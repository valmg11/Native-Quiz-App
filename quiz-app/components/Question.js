import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Question({navigation, route}) {
  let questionList = route.params.questionList;
  let [score, setScore] = useState(0);


  // next question
  let nextQuestion = useCallback(() => {
    navigation.push("Question 2",  {questionIndex: 1, questionList, score});
  })
  
  const [selectedIndex, setSelectedIndex] = useState(-1);

return (
  <>
  <View>
    <Text style={styles.header}>{questionList[0].prompt}</Text>
    {/* <Text>{score}</Text> */}
  </View>

    <ButtonGroup
      buttons={questionList[0].choices}

      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
        if (value === 2) {
          setScore(prevScore => prevScore + 1)
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

export default Question