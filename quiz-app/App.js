import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Question from './components/Question';

const Stack = createNativeStackNavigator();

export default function App() {
  let questionList = [
    {
    prompt: "When does Tomodachi Life: Living the Dream release?",
  type: "multiple-choice",
  choices: [
    "April 14, 2026",
    "April 16, 2026",
    "April 20, 2026",
    "April 28, 2026",
  ],
  correct: 0
  },
  {
    prompt: "This is another  question...",
  type: "multiple-answer",
  choices: [
    "choice 1",
    "choice 2",
    "choice 3",
    "choice 4",
  ],
  correct: [0,2]
  },
  {
  prompt: "This is the third question...",
  type: "true-false",
  choices: [
    "choice 1",
    "choice 2",
  ],
  correct: 1
  },
  ]
  return (
    // screens
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Question" component={Question} initialParams={{questionList}}/>
        <Stack.Screen name="Question 2" component={Question} initialParams={{questionList}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
