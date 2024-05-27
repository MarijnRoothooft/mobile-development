import React, {FunctionComponent} from 'react'
import {ScrollView} from 'react-native'

import SpelerCard from '@/app/spelers/(spelers)/spelerCard'
import useSpelers from '@/hooks/useSpelers'

const SpelerLijst: FunctionComponent = () => {
    const {spelers} = useSpelers()

    return (
        <ScrollView>
            {spelers.map(s => (
                <SpelerCard
                    key={s.id}
                    {...s}
                />
            ))}
        </ScrollView>
    )
}

export default SpelerLijst
