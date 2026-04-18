import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Summary({navigation, route, score}) {
  let questionList = route.params.questionList;
  let totalScore = route.params.finalScore;

return (
  <>
  <View>
    <Text style={styles.header}>Summary</Text>
    <Text style={styles.score}>Score: {totalScore}/3</Text>

    {/* map question prompts and answer choices */}
    <Text style={styles.summaryPrompts}>{questionList[0].prompt}</Text>
    {questionList[0].choices.map((choice, index) => (
      <Text key={index}
      style={{textAlign: "center",
        // correct answer
        color: index === 2 ? "green" : "black",
        fontWeight: index === 2 ? "bold" : "normal"}}
        >{choice}</Text>
    ))}

    <Text style={styles.summaryPrompts}>{questionList[1].prompt}</Text>
    {questionList[1].choices.map((choice, index) => (
      <Text key={index}
      style={{textAlign: "center",
        // correct answer
        color: index === 1 || index === 3 ? "green" : "black",
        fontWeight: index === 1 || index === 3 ? "bold" : "normal"}}
        >{choice}</Text>
    ))}

    <Text style={styles.summaryPrompts}>{questionList[2].prompt}</Text>
    {questionList[2].choices.map((choice, index) => (
      <Text key={index}
      style={{textAlign: "center",
        // correct answer
        color: index === 0 ? "green" : "black",
        fontWeight: index === 0 ? "bold" : "normal"}}
        >{choice}</Text>
    ))}
  </View>
  </>
)}

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
  score: {
    fontSize: 22,
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center"
  },
  summaryPrompts: {
    fontSize: 15,
    fontWeight: "bold",
    // marginBottom: 20,
    marginTop: 10,
    textAlign: "center"
  }
});

export default Summary