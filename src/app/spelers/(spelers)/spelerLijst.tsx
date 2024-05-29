import {useNavigation, useRouter} from 'expo-router'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {ScrollView, View, Image} from 'react-native'
import {useMMKVObject} from 'react-native-mmkv'
import {IconButton} from 'react-native-paper'

import {SpelerPhotoFile} from '../spelerDetail/[spelerId]'

import SpelerCard from '@/app/spelers/(spelers)/spelerCard'
import useSpelers from '@/hooks/useSpelers'

const SpelerLijst: FunctionComponent = () => {
    const {spelers} = useSpelers()
    const router = useRouter()
    const navigation = useNavigation()
    const [photos] = useMMKVObject<SpelerPhotoFile[]>('playersPhotos')

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
                {spelers.map(s => {
                    const photo = photos?.find(photo => photo.spelerId === s.id)
                    const foto = photo
                        ? photo.path
                        : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fgrass-sport-game-green-soccer-football-sports-equipment-net-ball-927727.jpg&f=1&nofb=1&ipt=01c280c6d4945444d85fe60f41a59de24ce28b3f3107a133ed966d6b2d8c998d&ipo=images'
                    return (
                        <SpelerCard
                            key={s.id}
                            rugnummer={s.rugnummer}
                            voornaam={s.voornaam}
                            achternaam={s.achternaam}
                            geboortedatum={s.geboortedatum}
                            foto={foto}
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
