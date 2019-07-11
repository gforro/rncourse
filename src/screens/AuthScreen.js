import React from 'react';
import {Button, Dimensions, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import startMainTabs from "./startMainTabs";
import DefaultInput from "../components/UI/DefaultInput";
import HeadingText from "../components/UI/HeadingText";
import MainText from "../components/UI/MainText";
import backgroundImage from '../assets/background.jpg';
import ButtonWithBackground from "../components/UI/ButtonWithBackground";
import useViewMode from "../components/hooks/useViewMode";

const AuthScreen = () => {
    const viewMode = useViewMode();

    let headingText = null;
    if (viewMode === "portrait") {
        headingText = (
            <MainText>
                <HeadingText>Please Log In</HeadingText>
            </MainText>
        );
    }
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                {headingText}
                <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>
                    Switch to Login
                </ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput
                        placeholder="Your E-Mail Address"
                        style={styles.input}
                    />
                    <View
                        style={
                            viewMode === "portrait"
                                ? styles.portraitPasswordContainer
                                : styles.landscapePasswordContainer
                        }
                    >
                        <View
                            style={
                                viewMode === "portrait"
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper
                            }
                        >
                            <DefaultInput placeholder="Password" style={styles.input}/>
                        </View>
                        <View
                            style={
                                viewMode === "portrait"
                                    ? styles.portraitPasswordWrapper
                                    : styles.landscapePasswordWrapper
                            }
                        >
                            <DefaultInput
                                placeholder="Confirm Password"
                                style={styles.input}
                            />
                        </View>
                    </View>
                </View>
                <ButtonWithBackground color="#29aaf4" onPress={startMainTabs}>
                    Submit
                </ButtonWithBackground>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});

export default AuthScreen;