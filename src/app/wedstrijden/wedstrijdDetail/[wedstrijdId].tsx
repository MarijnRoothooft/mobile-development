import {useLocalSearchParams} from 'expo-router'
import {FunctionComponent} from 'react'

import WedstrijdForm from '@/app/wedstrijden/wedstrijdForm'

const TaskDetail: FunctionComponent = () => {
    const {wedstrijdId} = useLocalSearchParams<{wedstrijdId: string}>()

    return <WedstrijdForm id={wedstrijdId === '-1' ? undefined : wedstrijdId} />
}
