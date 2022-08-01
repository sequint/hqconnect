import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Title, Navbar } from './components';

const App = () => {
  return (
    <NavigationContainer>
      <Title />
      <Navbar />
    </NavigationContainer>
  );
}

export default App;
