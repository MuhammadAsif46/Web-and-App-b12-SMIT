import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
export default function About() {

    const goToHome = () =>{
        router.push("/home")
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "red" }}>This is About page</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={goToHome}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#dddddd',
        padding: 10,
        borderRadius:6
    },
});