import {FunctionComponent} from 'react'
import {FlatList} from 'react-native'

import {useGetWedstrijden} from '@/api/gamesAPi'
import WedstrijdItem from '@/app/wedstrijden/wedstrijdItem'

interface AllGamesProps {}

const AllGames: FunctionComponent<AllGamesProps> = () => {
    const {data: Wedstrijden} = useGetWedstrijden()
    return (
        <FlatList
            data={Wedstrijden}
            renderItem={w => <WedstrijdItem {...w.item} />}
            keyExtractor={w => w.id.toString()}
        />
    )
}

export default AllGames
