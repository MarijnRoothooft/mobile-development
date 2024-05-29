import {Card} from '@rneui/base'
import {FunctionComponent} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

interface SpelerCardProps {
    rugnummer: number
    voornaam: string
    achternaam: string
    geboortedatum: Date | undefined
    onPress: () => void
}

const SpelerCard: FunctionComponent<SpelerCardProps> = ({rugnummer, voornaam, achternaam, geboortedatum, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card>
                <Card.Title>{rugnummer}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{padding: 0}}
                    source={{uri: ''}} // Replace with actual image URI if available
                />
                <Text style={{marginBottom: 10}}>
                    Volledige naam: {voornaam} {achternaam}
                    {'\n'}
                    Geboortedatum: {geboortedatum?.toString().substring(0, 10)}
                </Text>
            </Card>
        </TouchableOpacity>
    )
}

export default SpelerCard
