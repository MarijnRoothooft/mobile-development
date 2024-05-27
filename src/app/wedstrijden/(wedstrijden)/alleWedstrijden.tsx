import {FunctionComponent} from 'react'
import {FlatList} from 'react-native'

import {useGetWedstrijden} from '@/api/gamesAPi'
import WedstrijdItem from '@/app/wedstrijden/wedstrijdItem'

interface AllGamesProps {}

const AlleWedstrijden: FunctionComponent<AllGamesProps> = () => {
    const {data: wedstrijden} = useGetWedstrijden()

    return (
        <FlatList
            data={wedstrijden}
            renderItem={w => <WedstrijdItem {...w.item} />}
            keyExtractor={w => w.id.toString()}
        />
    )
}

export default AlleWedstrijden
