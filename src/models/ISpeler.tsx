import {PhotoFile} from 'react-native-vision-camera'

interface ISpeler {
    id: string
    voornaam: string
    achternaam: string
    rugnummer: number
    geboortedatum: Date | undefined
    foto: PhotoFile | undefined
}

export default ISpeler
