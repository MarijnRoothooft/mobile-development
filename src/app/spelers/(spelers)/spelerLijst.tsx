import {useNavigation, useRouter} from 'expo-router'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {ScrollView, View, Image} from 'react-native'
import {useMMKVObject} from 'react-native-mmkv'
import {IconButton} from 'react-native-paper'
import {PhotoFile} from 'react-native-vision-camera'

import SpelerCard from '@/app/spelers/(spelers)/spelerCard'
import useSpelers from '@/hooks/useSpelers'

const SpelerLijst: FunctionComponent = () => {
    const {spelers} = useSpelers()
    console.log('text debug')
    console.log(spelers)
    const router = useRouter()
    const navigation = useNavigation()
    const [foto] = useMMKVObject<PhotoFile[]>('spelers')

    useEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor}: {tintColor: string}) => (
                <View style={{flexDirection: 'row'}}>
                    <IconButton
                        icon="plus"
                        iconColor={tintColor}
                        onPress={() =>
                            router.navigate({
                                pathname: '../spelerDetail/-1',
                            })
                        }
                    />
                </View>
            ),
        })
    }, [navigation, router])
    return (
        <>
            <ScrollView>
                {spelers?.map(s => {
                    const defaultFoto =
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fgrass-sport-game-green-soccer-football-sports-equipment-net-ball-927727.jpg&f=1&nofb=1&ipt=01c280c6d4945444d85fe60f41a59de24ce28b3f3107a133ed966d6b2d8c998d&ipo=images'
                    const spelerFoto = s.foto ? s.foto : defaultFoto

                    return (
                        <SpelerCard
                            key={s.id}
                            rugnummer={s.rugnummer}
                            voornaam={s.voornaam}
                            achternaam={s.achternaam}
                            geboortedatum={s.geboortedatum}
                            foto={s.foto}
                            onPress={() =>
                                router.navigate({
                                    pathname: '../spelerDetail/[spelerId]',
                                    params: {spelerId: s.id},
                                })
                            }
                        />
                    )
                })}
            </ScrollView>
        </>
    )
}

export default SpelerLijst
