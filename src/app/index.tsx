import {Link} from 'expo-router'
import {FunctionComponent} from 'react'
import {Button, Text} from 'react-native-paper'

import ThemeProvider from '@/context/themeProvider'

const Index: FunctionComponent = () => {
    return (
        <>
            <Text variant="displayMedium">Welcome at the Thomas More football app</Text>

            <Link href="/spelers/spelers">
                <Button>Players</Button>
            </Link>

            <Link href="/wedstrijden/">
                <Button>Games</Button>
            </Link>
        </>
    )
}
export default Index
