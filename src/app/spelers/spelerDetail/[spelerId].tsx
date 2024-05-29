import {useLocalSearchParams} from 'expo-router'
import {FunctionComponent} from 'react'
import {View} from 'react-native'
import {IconButton} from 'react-native-paper'

import SpelerForm from '@/app/spelers/spelerForm'
import useSpelers from '@/hooks/useSpelers'

const SpelerDetail: FunctionComponent = () => {
    const {spelerId} = useLocalSearchParams<{spelerId: string}>()
    const {deleteSpeler} = useSpelers()

    const handleDelete = () => {
        if (spelerId && spelerId !== '-1') {
            deleteSpeler(spelerId)
        }
    }

    return (
        <View>
            <IconButton
                icon="delete"
                size={24}
                onPress={handleDelete}
            />
            <SpelerForm id={spelerId === '-1' ? undefined : spelerId} />
        </View>
    )
}

export default SpelerDetail
