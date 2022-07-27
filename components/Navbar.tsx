import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Navbar = () => (
  <Appbar style={styles.bottom}>
    <View style={styles.itemContainer}>
      <Appbar.Action
      style={styles.item}
        icon="home-variant"
        onPress={() => console.log('Pressed archive')}
      />
      <Appbar.Action
      style={styles.item}
        icon="camera"
        onPress={() => console.log('Pressed mail')}
      />
      <Appbar.Action
      style={styles.item}
        icon="account"
        onPress={() => console.log('Pressed label')}
      />
      <Appbar.Action
      style={styles.item}
        icon="account-group"
        onPress={() => console.log('Pressed label')}
      />
    </View>
  </Appbar>
);

export default Navbar;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  itemContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    marginLeft: '20px',
    marginRight: '20px',
  },
});
