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
    prompt: "Where is Tokkari Center located?",
  type: "multiple-choice",
  choices: [
    "Toba, Mie, Japan",
    "Point Pleasant Beach, New Jersey",
    "Monbetsu, Hokkaido, Japan",
    "Lauwersoog, Netherlands",
  ],
  correct: 0
  },
    {
    prompt: "Who are Tokkari Center's youngest seals?",
  type: "multiple-answer",
  choices: [
    "Katsunori",
    "Tsuki",
    "Agu",
    "Mashiro",
  ],
  correct: [1,3]
  },
    {
    prompt: "Tokkari Center is a seal protection facility",
  type: "true-false",
  choices: [
    "True",
    "False",
  ],
  correct: 0
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
