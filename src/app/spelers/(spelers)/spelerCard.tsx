import {Card} from '@rneui/base'
import {FunctionComponent} from 'react'
import {Text} from 'react-native'

interface SpelerCardProps {
    rugnummer: number
    voornaam: string
    achternaam: string
    geboortedatum: Date | undefined
}
const SpelerCard: FunctionComponent<SpelerCardProps> = ({rugnummer, voornaam, achternaam, geboortedatum}) => {
    return (
        <Card>
            <Card.Title>{rugnummer}</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{padding: 0}}
                source={{uri: ''}} // Replace with actual image URI if available
            />
            <Text style={{marginBottom: 10}}>
                Full name: {voornaam} {achternaam}
                {'\n'}
                Birth date: {geboortedatum?.toDateString()}
            </Text>
        </Card>
    )
}

export default SpelerCard
