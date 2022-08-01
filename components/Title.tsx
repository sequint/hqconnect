import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Title = () => (
    <Appbar.Header style={styles.header}>
       <Appbar.Content title="HQConnect" />
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
