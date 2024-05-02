import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import { handleIsLoggedIn } from "../redux/actions/action";

const WelcomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const goToNavigationScreen = () => navigation.navigate('Home');
    return(
        <View>
            <Text>WelcomeScreen</Text>

            <TouchableOpacity onPress={() => {
                goToNavigationScreen();
                dispatch(handleIsLoggedIn(true))
            }}>
                <Text>Go to main screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen;