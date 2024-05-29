import {useNavigation} from 'expo-router'
import {FunctionComponent, useEffect, useMemo, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import DatePicker from 'react-native-date-picker'
import {IconButton, TextInput} from 'react-native-paper'

import useSpelers from '@/hooks/useSpelers'

interface SpelerFormProps {
    id?: string
}
const Spelerform: FunctionComponent<SpelerFormProps> = ({id}) => {
    const {createSpeler, updateSpeler, getSpelerById} = useSpelers()
    const activeSpeler = useMemo(() => getSpelerById(id), [id])
    const [voornaam, setVoornaam] = useState(activeSpeler?.voornaam ?? '')
    const [achternaam, setAchternaam] = useState(activeSpeler?.achternaam ?? '')
    const [rugnummer, setRugnummer] = useState(activeSpeler?.rugnummer ?? 0)
    const [geboortedatum, setGeboorteDatum] = useState<Date | undefined>(
        activeSpeler?.geboortedatum ? new Date(activeSpeler?.geboortedatum) : undefined,
    )
    const navigation = useNavigation()

    const handleCreateUpdate = () => {
        if (id) {
            updateSpeler({id, voornaam, achternaam, rugnummer, geboortedatum})
        } else {
            createSpeler(voornaam, achternaam, rugnummer, geboortedatum)
        }
        navigation.goBack()
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor}: {tintColor: string}) => (
                <IconButton
                    icon="check"
                    iconColor={tintColor}
                    size={25}
                    onPress={handleCreateUpdate}
                />
            ),
        })
    }, [navigation, handleCreateUpdate])

    return (
        <View style={[styles.formContainer]}>
            <TextInput
                mode="outlined"
                label="Voornaam"
                value={voornaam}
                onChangeText={setVoornaam}
            />

            <TextInput
                mode="outlined"
                label="Achternaam"
                value={achternaam}
                onChangeText={setAchternaam}
            />

            <TextInput
                mode="outlined"
                label="Rugnummer"
                keyboardType="numeric"
                value={rugnummer.toString()}
                onChangeText={t => setRugnummer(parseInt(t))}
            />

            <DatePicker
                mode="date"
                date={geboortedatum || new Date()}
                onConfirm={selectedDate => setGeboorteDatum(selectedDate)}
                onDateChange={setGeboorteDatum}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        margin: 10,
        display: 'flex',
        rowGap: 10,
    },
})
export default Spelerform
