import {Link} from 'expo-router'
import {FunctionComponent} from 'react'
import {Button, Text} from 'react-native-paper'

interface SpelersProps {}

const Spelers: FunctionComponent<SpelersProps> = () => {
    return (
        <>
            <Text variant="displayMedium">Player page</Text>

            <Link href="../">
                <Button>Back to home</Button>
            </Link>
        </>
    )
}
export default Spelers
