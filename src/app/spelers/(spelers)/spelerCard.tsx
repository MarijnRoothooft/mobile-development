import {Card} from '@rneui/base'
import {FunctionComponent} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {PhotoFile} from 'react-native-vision-camera'

interface SpelerCardProps {
    rugnummer: number
    voornaam: string
    achternaam: string
    geboortedatum: Date | undefined
    foto: PhotoFile | undefined
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
                    source={{uri: foto?.path}}
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
