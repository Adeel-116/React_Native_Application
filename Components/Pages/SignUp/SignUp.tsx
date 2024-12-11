import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground, TouchableOpacity, Alert } from "react-native"
import { Input } from "../../Input";
import { CameraAccess } from "../../CameraAccess";
import { Button } from "../../Button";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";


function SignUp() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const emailRegexValidation = (value) => {
        setEmail(value);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
            setEmailError("Invalid email address.");
        } else {
            setEmailError('');
        }
    };

    const passwordRegexValidation = (value) => {
        setPassword(value);
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,16}$/;
        if (!passwordRegex.test(value)) {
            setPasswordError("Password include a letter, number, special character, and be 8–16 chars.");
        } else {
            setPasswordError('');
        }
    };

    const confirmPasswordValidation = (value) => {
        setConfirmPassword(value);
        if (value === password) {
            setConfirmPasswordError(false);
        } else {
            setConfirmPasswordError("Passwords do not match.");
        }
    };


    const handleSignIn = () => {
        if (name && email && password && confirmPassword) {
            console.log(name, email, password, confirmPassword);
        } else {
            console.log("Kindly fill all the fields");
        }
    }

    return (
        <>

            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1E1F23"
                    barStyle="light-content"
                />
                <ImageBackground
                    source={require('../../../assets/Images/gym_signup.jpg')}
                    style={styles.bgImage}
                >
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon
                                name={'leftcircle'}
                                color="white"
                                size={33}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bgContainer}>

                        <View style={styles.textContainer}>
                            <Text style={styles.textHeading}>Sign Up</Text>
                            <Text style={styles.textParagraph}>Hi Welcome back, you’ve been miss your Chance, Get Register</Text>
                        </View>


                        <View style={styles.foam}>

                            <View style={styles.foamContainer}>

                                <View>
                                    <View style={{}}>
                                        <CameraAccess />
                                    </View>

                                    <Input placeHolder="Enter the name" value={name} labelText="Name" type="text" OnChangeText={setName} />
                                    <Input placeHolder="example@gmail.com" value={email} labelText="Email" type="email" OnChangeText={emailRegexValidation} />
                                    {emailError ? <Text style={{ color: 'red', paddingLeft: 15 }}>{emailError}</Text> : ''}
                                    <Input placeHolder="************" value={password} labelText="Password" type="password" OnChangeText={passwordRegexValidation} />
                                    {passwordError ? <Text style={{ color: 'red', paddingLeft: 15 }}>{passwordError}</Text> : ''}
                                    <Input placeHolder="************" value={confirmPassword} labelText="Confirm Password" type="password" OnChangeText={confirmPasswordValidation} />
                                    {confirmPasswordError ? <Text style={{ color: 'red', paddingLeft: 15 }}>{confirmPasswordError}</Text> : ''}
                                </View>

                                <View style={{}}>
                                    <Button buttonText="Sign Up" onPress={handleSignIn} />
                                </View>

                            </View>


                        </View>

                    </View>
                    <View style={styles.overlay}></View>
                </ImageBackground>




            </View>

        </>
    )
}

const styles = StyleSheet.create({
    backIcon: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        zIndex: 3,
    },
    foamContainer: {
        width: '95%',
        paddingVertical: 20,
        gap: 17,
    },
    foam: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    },

    textContainer: {
        width: '80%',
    },
    textHeading: {
        fontSize: 35,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 600,
        fontFamily: 'MontserratAlternates-Medium',
    },
    textParagraph: {
        fontSize: 14,
        color: '#EDEDED',
        textAlign: 'center',
        fontFamily: 'MontserratAlternates-Medium',
    },
    bgContainer: {
        width: '94%',
        flex: 1,
        alignItems: 'center',
        zIndex: 3,
        marginBottom: 13,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        objectFit: 'contain',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    }
})

export default SignUp