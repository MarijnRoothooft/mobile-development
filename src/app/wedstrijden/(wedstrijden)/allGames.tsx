import {FunctionComponent} from 'react'
import {FlatList} from 'react-native'

import WedstrijdItem from '@/app/wedstrijden/wedstrijdItem'
import useWedstrijden from '@/hooks/useWedstrijden'

interface AllGamesProps {}

const AllGames: FunctionComponent<AllGamesProps> = () => {
    const {Wedstrijden} = useWedstrijden()
    return (
        <FlatList
            data={Wedstrijden}
            renderItem={w => <WedstrijdItem {...w.item} />}
            keyExtractor={w => w.id}
        />
    )
}

export default AllGames
