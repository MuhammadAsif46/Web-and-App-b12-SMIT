import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" hidden={true} />
      <Text style={styles.heading}>Hello World</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="default"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262a3a", flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20
  }
});
