import {Link, Redirect} from 'expo-router'
import {FunctionComponent} from 'react'
import {Button, Text} from 'react-native-paper'

interface WedstrijdenProps {}

const Index: FunctionComponent<WedstrijdenProps> = () => {
    return (
        <>
            <Redirect href="/wedstrijden/(wedstrijden)/allGames" />
        </>
    )
}
export default Index
