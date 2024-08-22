import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={[styles.block1, styles.block]}>
        <Text style={[styles.font]}>Top Left</Text>
      </View>

      <View style={[styles.container, {flexDirection: "row"}]}>
        <View style={[styles.block2, styles.block]}>
          <Text style={[styles.font]}>Bottom Left</Text>
        </View>
      
        <View>
          <View style={styles.block3}>
            <Text style={[styles.font]}>Right Top</Text>
          </View>
          
          <View style={styles.block4}>
            <Text style={[styles.font]}>Right Bottom</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  font: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 15,
    color: "rgb(0,255,255)"
  },
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  block1: {
    backgroundColor: "rgb(242,254,124)"
  },
  block2: { 
    backgroundColor: "rgb(53,229,118)"
  },
  block3: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(236,53,227)"
  },
  block4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(39,119,170)"
  },
});