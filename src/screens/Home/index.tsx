import {Text, TextInput, View} from "react-native";
import {styles} from "./style";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>What do you want to watch?</Text>
            <View>
                <TextInput style={styles.containerInput} placeholder="Search"/>
            </View>
        </View>
    )
}