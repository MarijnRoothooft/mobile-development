import auth, {firebase} from '@react-native-firebase/auth'
import {Link} from 'expo-router'
import {FunctionComponent, useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, Text} from 'react-native-paper'

import useUser from '@/hooks/useUser'

const Index: FunctionComponent = () => {
    const user = useUser()

    return (
        <View style={styles.container}>
            <Text
                variant="displayMedium"
                style={styles.welcomeText}>
                {'Welkom op de GGB voetbal app\n' + user?.displayName}
            </Text>

            <View style={styles.buttonContainer}>
                <Link href="/spelers/(spelers)/spelerLijst">
                    <Button
                        mode="contained"
                        style={styles.button}>
                        Spelers
                    </Button>
                </Link>
            </View>

            <View style={styles.buttonContainer}>
                <Link href="/wedstrijden/(wedstrijden)/alleWedstrijden">
                    <Button
                        mode="contained"
                        style={styles.button}>
                        Wedstrijden
                    </Button>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
    },
    welcomeText: {
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    button: {
        width: 200,
    },
})

export default Index
