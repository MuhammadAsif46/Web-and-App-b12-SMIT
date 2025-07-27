import { Link } from "expo-router";
import { View } from "react-native";

export default function Home() {
    return (
        <View style={{ flex:1 ,backgroundColor: "red"}}>
            <Text>This is Home page</Text>
            <Link href={"/about"} style={{margin:20 }}>
                <Text style={{color:"white", backgroundColor:"red"}}>Go to About</Text>
            </Link>
        </View>
        
    )
}