import {Link, Redirect} from 'expo-router'
import {FunctionComponent} from 'react'
import {Button, Text} from 'react-native-paper'

import SpelerCard from '@/app/spelers/(spelers)/spelerCard'
import SpelerLijst from '@/app/spelers/(spelers)/spelerLijst'

interface SpelersProps {}

const Index: FunctionComponent<SpelersProps> = () => {
    return (
        <>
            <Redirect href="/spelers/(spelers)/spelerLijst" />
        </>
    )
}
export default Index
