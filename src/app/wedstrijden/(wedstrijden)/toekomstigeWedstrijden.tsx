import {FunctionComponent} from 'react'
import {FlatList} from 'react-native'

import {useGetCompletedWedstrijden, useGetUnplayedGames} from '@/api/gamesAPi'
import WedstrijdItem from '@/app/wedstrijden/wedstrijdItem'

interface ToBePlayedGamesProps {}

const ToekomstigeWedstrijden: FunctionComponent<ToBePlayedGamesProps> = () => {
    const {data: ongespeeldeWedstrijden} = useGetUnplayedGames()
    return (
        <FlatList
            data={ongespeeldeWedstrijden}
            renderItem={w => <WedstrijdItem {...w.item} />}
            keyExtractor={w => w.id.toString()}
        />
    )
}

export default ToekomstigeWedstrijden
