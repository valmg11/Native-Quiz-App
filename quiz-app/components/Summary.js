import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useCallback, useState } from 'react';
import { ButtonGroup } from '@rneui/themed';

function Summary({navigation, route, score}) {
  let questionList = route.params.questionList;
  // let score = route.params.score;

return (
  <>
  {/* change to map */}
  <View>
    <Text style={styles.header}>Summary</Text>
    <Text style={styles.text}>Score: {score}/3</Text>

    <Text style={styles.text}>{questionList[0].prompt}</Text>
    {questionList[0].choices.map((choice, index) => (
      <Text key={index} style={styles.summaryAnswers}>{choice}</Text>
    ))}

    <Text style={styles.text}>{questionList[1].prompt}</Text>
    {questionList[1].choices.map((choice, index) => (
      <Text key={index} style={styles.summaryAnswers}>{choice}</Text>
    ))}

    <Text style={styles.text}>{questionList[2].prompt}</Text>
    {questionList[2].choices.map((choice, index) => (
      <Text key={index} style={styles.summaryAnswers}>{choice}</Text>
    ))}

    {/* <FlatList
    data={questionList}
    renderItem={({item}) => <Text>{item.prompt}
    </Text>}/>
    <FlatList
    data={questionList}
    renderItem={({item}) => <Text>{item.choices}
    </Text>}/> */}
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
  text: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center"
  },
  summaryAnswers: {
    fontSize: 15,
    // marginBottom: 20,
    marginTop: 10,
    textAlign: "center"
  },
  buttons: {
    marginBottom: 20,
  }
});

export default Summary