import {show} from 'cli-cursor'
import {useNavigation, useRouter} from 'expo-router'
import React, {FunctionComponent, useEffect, useState} from 'react'
import {ScrollView, View, Image} from 'react-native'
import {useMMKVObject} from 'react-native-mmkv'
import {IconButton} from 'react-native-paper'
import {PhotoFile} from 'react-native-vision-camera'
import {set} from 'yaml/dist/schema/yaml-1.1/set'

import SpelerCard from '@/app/spelers/(spelers)/spelerCard'
import CameraUI from '@/camera/cameraUI'
import useSpelers from '@/hooks/useSpelers'

const SpelerLijst: FunctionComponent = () => {
    const {spelers} = useSpelers()
    const router = useRouter()
    const navigation = useNavigation()
    const [showCamera, setShowCamera] = useState<boolean>(false)
    const [photos, setPhotos] = useMMKVObject<PhotoFile[]>('playersPhotos')

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
                    <IconButton
                        iconColor={tintColor}
                        icon="camera-plus"
                        onPress={() => setShowCamera(true)}
                    />
                </View>
            ),
        })
    }, [navigation, router])
    return (
        <>
            <ScrollView>
                {spelers.map(s => (
                    <SpelerCard
                        key={s.id}
                        rugnummer={s.rugnummer}
                        voornaam={s.voornaam}
                        achternaam={s.achternaam}
                        geboortedatum={s.geboortedatum}
                        onPress={() =>
                            router.navigate({
                                pathname: '../spelerDetail/[spelerId]',
                                params: {spelerId: s.id},
                            })
                        }
                    />
                ))}
            </ScrollView>

            {/*{showCamera && (
                <CameraUI
                    showCamera={showCamera}
                    cameraType="front"
                    onClose={photo => {
                        if (photo) {
                            setPhotos([...(photos ?? []), photo])
                        }
                        setShowCamera(false)
                    }}
                />
            )}
            <ScrollView>
                <View>
                    {photos?.map((photo, index) => (
                        <Image
                            source={{...photo, uri: photo.path}}
                            key={index}
                            resizeMode="contain"
                        />
                    ))}
                </View>
            </ScrollView>*/}
        </>
    )
}

export default SpelerLijst
