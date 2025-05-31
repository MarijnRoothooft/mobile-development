import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker'
import {useNavigation} from 'expo-router'
import {FunctionComponent, useMemo, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Checkbox, TextInput} from 'react-native-paper'

interface WedstrijdFormProps {
    id?: number
}

const WedstrijdForm: FunctionComponent<WedstrijdFormProps> = ({id}) => {
    return <></>
}

/*
    const [showDatePicker, setShowDatePicker] = useState(false)
    const navigation = useNavigation()

    const handleCreateUpdate = () => {
        if (id) {
            updateWedstrijd({id, ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum})
        } else {
            maakWedstrijd(ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum?.toISOString())
        }
        navigation.goBack()
    }

    return (
        <View style={[styles.formContainer]}>
            <TextInput
                mode="outlined"
                label="Ploeg 1"
                value={ploeg1}
                onChangeText={setPloeg1}
            />

            <TextInput
                mode="outlined"
                label="Ploeg 2"
                value={ploeg2}
                onChangeText={setPloeg2}
            />

            <Checkbox.Item
                label="Gespeeld"
                status={gespeeld ? 'checked' : 'unchecked'}
                onPress={() => setGespeeld(!gespeeld)}
            />

            <TextInput
                mode="outlined"
                label="Goal Ploeg 1"
                value={goalPloeg1.toString()}
                onChangeText={value => setGoalPloeg1(Number(value))}
            />

            <TextInput
                mode="outlined"
                label="Goal Ploeg 2"
                value={goalPloeg2.toString()}
                onChangeText={value => setGoalPloeg2(Number(value))}
            />

            {showDatePicker && (
                <DateTimePicker
                    value={datum ?? new Date()}
                    mode="date"
                    display="default"
                    onChange={(event: DateTimePickerEvent, selectedDate?: Date | undefined) => {
                        setShowDatePicker(false)
                        if (selectedDate) {
                            setDatum(selectedDate)
                        }
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        margin: 10,
        display: 'flex',
        rowGap: 10,
    },
})*/

export default WedstrijdForm
