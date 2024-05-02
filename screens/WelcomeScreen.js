import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text,TouchableOpacity} from "react-native";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const goToNavigationScreen = () => navigation.navigate('Home');
    return(
        <View>
            <Text>WelcomeScreen</Text>

            <TouchableOpacity onPress={goToNavigationScreen}>
                <Text>Go to main screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen;