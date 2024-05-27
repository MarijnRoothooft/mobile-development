import {useLocalSearchParams} from 'expo-router'
import {FunctionComponent} from 'react'

import WedstrijdForm from '@/app/wedstrijden/wedstrijdForm'

const WedstrijdDetail: FunctionComponent = () => {
    const {wedstrijdId} = useLocalSearchParams<{wedstrijdId: string}>()

    const wedstrijdIdNum = Number(wedstrijdId)

    return <WedstrijdForm id={wedstrijdIdNum === -1 ? undefined : wedstrijdIdNum} />
}

export default WedstrijdDetail
