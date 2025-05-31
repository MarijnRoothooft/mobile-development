import {FunctionComponent} from 'react'
import {FlatList} from 'react-native'

import {useGetCompletedWedstrijden, useGetWedstrijden} from '@/api/gamesAPi'
import WedstrijdItem from '@/app/wedstrijden/wedstrijdItem'

interface PlayedGamesProps {}

const GespeeldeWedstrijden: FunctionComponent<PlayedGamesProps> = () => {
    const {data: gespeeldeWedstrijden} = useGetCompletedWedstrijden()
    return (
        <FlatList
            data={gespeeldeWedstrijden}
            renderItem={w => <WedstrijdItem {...w.item} />}
            keyExtractor={w => w.id.toString()}
        />
    )
}

export default GespeeldeWedstrijden
