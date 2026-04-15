import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Question from './components/Question';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Summary from './components/Summary';

const Stack = createNativeStackNavigator();

export default function App() {
  // let score = 0;
  // const [score, setScore] = useState(0);

  let questionList = [
    {
    prompt: "Question 1",
  type: "multiple-choice",
  choices: [
    "A",
    "B",
    "C",
    "D",
  ],
  correct: 0
  },
    {
    prompt: "Question 2",
  type: "multiple-answer",
  choices: [
    "A",
    "B",
    "C",
    "D",
  ],
  correct: [0,2]
  },
    {
    prompt: "Question 3",
  type: "true-false",
  choices: [
    "True",
    "False",
  ],
  correct: 1
  },
  ]
  return (
    // screens
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Question" component={Question} initialParams={{questionList}}/>
        <Stack.Screen name="Question 2" component={Question2} initialParams={{questionList}}/>
        <Stack.Screen name="Question 3" component={Question3} initialParams={{questionList}}/>
        <Stack.Screen name="Summary" component={Summary} initialParams={{questionList}}/>      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
