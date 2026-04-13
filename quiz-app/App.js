import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Question from './components/Question';

const Stack = createNativeStackNavigator();

export default function App() {
  let questions = [
    {
    "prompt": "This is the question...",
  "type": "multiple-choice",
  "choices": [
    "choice 1",
    "choice 2",
    "choice 3",
    "choice 4",
  ],
  "correct": 0
  },
  {
    "prompt": "This is another  question...",
  "type": "multiple-answer",
  "choices": [
    "choice 1",
    "choice 2",
    "choice 3",
    "choice 4",
  ],
  "correct": [0,2]
  },
  {
  "prompt": "This is the third question...",
  "type": "true-false",
  "choices": [
    "choice 1",
    "choice 2",
  ],
  "correct": 1
  },
  ]
  return (
    // screens
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Question" component={Question} initialParams={{questions}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
