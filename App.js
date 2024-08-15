import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.block}>
      
      <View style={[styles.block, styles.br]}>
        <View style={[styles.textBox]}>
          <Text style={[styles.textStyle, {textAlign: "left", color: 'blue'}]}>Top Left</Text>
        </View>
      </View>
      
      <View style={[styles.block, styles.container, styles.bg]}>
        <View style={[styles.circle, styles.container, {flex: 0}]}>
          <Text style={[styles.textStyle, {color: 'red'}]}>Center</Text>
        </View>
      </View>

      <View style={[styles.block, styles.bb, {justifyContent: 'flex-end'}]}>
        <View style={[styles.textBox, {flex: 0.3}]}>
            <Text style={[styles.textStyle, {textAlign: "right", color: 'green'}]}>Bottom Right</Text>
          </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15
  },
  block: {
    flex: 1
  },
  textBox: {
    borderWidth: 3,
    margin: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  circle: {
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  br: {
    backgroundColor: "red"
  },
  bg: {
    backgroundColor: "green"
  },
  bb: {
    backgroundColor: "blue"
  }
});
