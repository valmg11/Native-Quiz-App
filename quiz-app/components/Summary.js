import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Summary({navigation, route}) {
  let questionList = route.params.questionList;
  // next question
//   let nextQuestion = useCallback(() => {
//     navigation.push("Question 4",  {questionIndex: 3, questionList});
//   })
  // let currentQuestion = questionList.find(q => q.index === questionIndex);
  
// const [selectedIndex, setSelectedIndex] = useState(-1);

return (
  <>
  {/* change to map */}
  <View>
    <Text style={styles.header}>Summary</Text>
    <Text style={styles.text}>{questionList[0].prompt}</Text>
    <Text style={styles.text}>{questionList[0].choices}</Text>

    <Text style={styles.text}>{questionList[1].prompt}</Text>
    <Text style={styles.text}>{questionList[1].choices}</Text>

    <Text style={styles.text}>{questionList[2].prompt}</Text>
    <Text style={styles.text}>{questionList[2].choices}</Text>
  </View>

    {/* <ButtonGroup
      buttons={questionList[2].choices}

      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      buttonStyle={{backgroundColor:"white"}}
      containerStyle={{width: 400, alignSelf: "center"}}
      vertical
    />

    <View style={{width: 200, alignSelf: "center"}}>
      <Button onPress={() => nextQuestion()} title="Next"></Button>
    </View> */}
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
  text: {
    fontSize: 15,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center"
  },
  buttons: {
    marginBottom: 20,
  }
});

export default Summary