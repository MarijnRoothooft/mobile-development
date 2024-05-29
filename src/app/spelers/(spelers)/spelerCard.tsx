import {Card} from '@rneui/base'
import {FunctionComponent} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

interface SpelerCardProps {
    rugnummer: number
    voornaam: string
    achternaam: string
    geboortedatum: Date | undefined
    foto: string
    onPress: () => void
}

const SpelerCard: FunctionComponent<SpelerCardProps> = ({
    rugnummer,
    voornaam,
    achternaam,
    geboortedatum,
    foto,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card>
                <Card.Title>{rugnummer}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{padding: 0}}
                    source={{uri: foto}}
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
