import {FunctionComponent, useState} from 'react'
import {Divider, IconButton, List} from 'react-native-paper'

import useWedstrijden from '@/hooks/useWedstrijden'
import IWedstrijd from '@/models/iWedstrijd'

const WedstrijdItem: FunctionComponent<IWedstrijd> = ({
    id,
    ploeg1,
    ploeg2,
    gespeeld,
    goalPloeg1,
    goalPloeg2,
    datum,
}) => {
    const {toggleWedstrijd, deleteWedstrijd} = useWedstrijden()
    const [showActionSheet, setShowActionSheet] = useState<boolean>(false)

    const handleClose = () => setShowActionSheet(false)

    return (
        <>
            <List.Item
                title={`${ploeg1} vs ${ploeg2}`}
                description={`Gespeeld: ${gespeeld ? 'Ja' : 'Nee'}, Goals: ${goalPloeg1}-${goalPloeg2}`}
                right={props => (
                    <IconButton
                        icon="soccer"
                        iconColor={gespeeld ? 'green' : props.color}
                        onPress={() => setShowActionSheet(true)}
                    />
                )}
            />
        </>
    )
}

export default WedstrijdItem
