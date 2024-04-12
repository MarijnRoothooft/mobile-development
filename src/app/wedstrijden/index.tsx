import {Link, Redirect} from 'expo-router'
import {FunctionComponent} from 'react'
import {Button, Text} from 'react-native-paper'

interface WedstrijdenProps {}

const Index: FunctionComponent<WedstrijdenProps> = () => {
    return (
        <>
            <Text variant="displayMedium">Gamepage</Text>

            <Link href="../..">
                <Button>Back to home</Button>
            </Link>

            <Redirect href="/wedstrijden/(wedstrijden)/allGames" />
        </>
    )
}
export default Index
