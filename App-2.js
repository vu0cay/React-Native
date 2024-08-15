import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.block}>
      
      <View style={[styles.block, styles.by]}>
        <Text style={[styles.font]}>Top Left</Text>
      </View>
      
      <View style={[styles.block, {flexDirection: "column"}]}>
        <View style={[styles.bg, {flexDirection: "column"}]}>
          <Text style={[styles.font]}>Bottom Left</Text>
        </View>
        
        <View>
          <View style={[styles.bp]}>
            <Text style={[styles.font]}>Right Top</Text>
          </View>
          
          <View style={[styles.bb]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
    color: "rgb(0,255,255)"
  },
  block: {
    flex: 1
  },
  by: {
    backgroundColor: "rgb(242,254,124)"
  },
  bg: {
    backgroundColor: "rgb(53,229,118)"
  },
  bp: {
    backgroundColor: "rgb(236,53,227)"
  },
  bb: {
    backgroundColor: "rgb(39,119,170)"
  },
  bbl: {
    backgroundColor: "rgb(0,255,255)"
  }
});
