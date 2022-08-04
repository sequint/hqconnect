import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { appTitle } from '../constants/titles';

const Title = () => (
    <Appbar.Header style={styles.header}>
       <Appbar.Content title={appTitle} />
    </Appbar.Header>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#B7ADCF',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Title;
