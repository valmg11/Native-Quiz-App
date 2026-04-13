import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import question1 from './components/question1';

const Stack = createNativeStackNavigator();

export default function App() {
  let questions = [
    {
      prompt: "question",
      type: "multiple-choice",
      
      choices: [
        "choice 1",
        "choice 2",
        "choice 3",
        "choice 4",
      ],
      correct: 0,
    },
    {
      name: "Running",
      key: "2",
    },
    {
      name: "Push Ups",
      key: "3",
    },
  ]
  return (
    // screens
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="question1" component={question1} initialParams={{questions}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
