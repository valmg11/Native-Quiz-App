import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Question3({navigation, route}) {
  let questionList = route.params.questionList;
  // next question
  let nextQuestion = useCallback(() => {
    navigation.push("Summary",  {questionIndex: 3, questionList});
  })
  // let currentQuestion = questionList.find(q => q.index === questionIndex);
  
  const [selectedIndex, setSelectedIndex] = useState(-1);

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

export default Question3