import {FunctionComponent, useState} from 'react'
import {Divider, IconButton, List} from 'react-native-paper'

import {useDeleteWedstrijden, useToggleWedstrijdStatus} from '@/api/gamesAPi'
import IWedstrijd from '@/models/IWedstrijd'

const WedstrijdItem: FunctionComponent<IWedstrijd> = ({
    id,
    ploeg1,
    ploeg2,
    gespeeld,
    goalPloeg1,
    goalPloeg2,
    datum,
}) => {
    const deleteMutation = useDeleteWedstrijden()
    const toggleMutation = useToggleWedstrijdStatus()
    const [showActionSheet, setShowActionSheet] = useState<boolean>(false)

    const handleClose = () => setShowActionSheet(false)

    const handleDelete = () => {
        deleteMutation.mutate({id})
        handleClose()
    }

    const handleToggle = () => {
        toggleMutation.mutate({id})
        handleClose()
    }

    return (
        <>
            <List.Item
                title={`${ploeg1} vs ${ploeg2}`}
                description={`Gespeeld: ${gespeeld ? 'Ja' : 'Nee'}, Goals: ${goalPloeg1}-${goalPloeg2}`}
                right={props => (
                    <IconButton
                        icon="soccer"
                        iconColor={gespeeld ? 'green' : props.color}
                        onPress={handleToggle}
                    />
                )}
            />
        </>
    )
}

export default WedstrijdItem
