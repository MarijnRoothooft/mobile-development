import {useLocalSearchParams} from 'expo-router'
import React, {FunctionComponent, useState} from 'react'
import {ScrollView, View, Image} from 'react-native'
import {useMMKVObject} from 'react-native-mmkv'
import {IconButton} from 'react-native-paper'
import {PhotoFile} from 'react-native-vision-camera'

import SpelerForm from '@/app/spelers/spelerForm'
import CameraUI from '@/camera/cameraUI'
import useSpelers from '@/hooks/useSpelers'
import ISpeler from '@/models/ISpeler'

const SpelerDetail: FunctionComponent = () => {
    const {spelerId} = useLocalSearchParams<{spelerId: string}>()
    const {deleteSpeler} = useSpelers()
    const [showCamera, setShowCamera] = useState<boolean>(false)
    const [fotos, setFotos] = useState<PhotoFile>()

    const handleDelete = () => {
        if (spelerId && spelerId !== '-1') {
            deleteSpeler(spelerId)
        }
    }

    const onPhotoTaken = (foto: PhotoFile) => {
        const spelerFoto: PhotoFile = {...foto}
        setFotos(spelerFoto)
    }

    return (
        <View>
            <IconButton
                icon="delete"
                size={24}
                onPress={handleDelete}
            />
            <IconButton
                icon="camera-plus"
                size={24}
                onPress={() => setShowCamera(true)}
            />

            {showCamera && (
                <CameraUI
                    showCamera={showCamera}
                    cameraType="front"
                    onClose={foto => {
                        if (foto) {
                            onPhotoTaken(foto)
                        }
                        setShowCamera(false)
                    }}
                />
            )}
            <ScrollView style={{maxHeight: '30%'}}>
                <View style={{maxHeight: '30%'}}>
                    <Image
                        source={{...fotos}}
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>
            <SpelerForm
                id={spelerId === '-1' ? undefined : spelerId}
                foto={fotos}
            />
        </View>
    )
}

export default SpelerDetail
