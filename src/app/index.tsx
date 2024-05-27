import {Link} from 'expo-router'
import {FunctionComponent} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, Text} from 'react-native-paper'

const Index: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text
                variant="displayMedium"
                style={styles.welcomeText}>
                Welkom op de GGB voetbal app
            </Text>

            <View style={styles.buttonContainer}>
                <Link href="/spelers/">
                    <Button
                        mode="contained"
                        style={styles.button}>
                        Spelers
                    </Button>
                </Link>
            </View>

            <View style={styles.buttonContainer}>
                <Link href="/wedstrijden/">
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
