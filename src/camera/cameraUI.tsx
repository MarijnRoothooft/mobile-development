import {CameraRoll} from '@react-native-camera-roll/camera-roll'
import {FunctionComponent, useEffect, useRef, useState} from 'react'
import {Linking, Modal, Pressable, StyleSheet, View} from 'react-native'
import {IconButton, Snackbar, TouchableRipple, useTheme} from 'react-native-paper'
import {Camera, PhotoFile, useCameraDevice, useCameraPermission} from 'react-native-vision-camera'

interface CameraUIProps {
    showCamera: boolean
    cameraType: 'front' | 'back'
    onClose: (photo: PhotoFile | undefined) => void
}

const iconSize = 30

const CameraUI: FunctionComponent<CameraUIProps> = ({showCamera, cameraType, onClose}) => {
    const theme = useTheme()
    const {hasPermission: haveCameraPermission, requestPermission: requestCameraPermission} = useCameraPermission()
    const [haveRequestedCameraPermission, setHaveRequestedCameraPermission] = useState<boolean>(false)
    const [activeCamera, setActiveCamera] = useState<'front' | 'back'>(cameraType === 'front' ? 'front' : 'back')
    const cameraDevice = useCameraDevice(activeCamera)
    const camera = useRef<Camera>(null)

    useEffect(() => {
        if (showCamera && !haveCameraPermission) {
            requestCameraPermission().then(() => setHaveRequestedCameraPermission(true))
        }
    }, [haveCameraPermission, showCamera, requestCameraPermission])

    if (!haveCameraPermission && haveRequestedCameraPermission) {
        return (
            <Snackbar
                action={{
                    label: 'Geef toegang',
                    onPress: () => Linking.openSettings(),
                }}
                onDismiss={() => {}}
                visible>
                Geef aub toegang tot de camera om de app te laten functioneren
            </Snackbar>
        )
    }

    return (
        <Modal
            visible={showCamera}
            transparent>
            <View style={[styles.cameraContainer]}>
                <IconButton
                    icon="close"
                    style={[styles.closeButton, {backgroundColor: theme.colors.surface}]}
                    onPress={() => onClose(undefined)}
                    iconColor={theme.colors.onSurface}
                    size={iconSize}
                />

                <IconButton
                    icon="camera-flip"
                    onPress={() => setActiveCamera(activeCamera === 'front' ? 'back' : 'front')}
                    style={[styles.switchButton, {backgroundColor: theme.colors.surface}]}
                    iconColor={theme.colors.onSurface}
                    size={iconSize}
                />

                <Camera
                    ref={camera}
                    style={[styles.absoluteFill]}
                    device={cameraDevice!}
                    isActive={showCamera}
                    photo
                />

                <TouchableRipple
                    onPress={async () => {
                        const photo = await camera.current?.takePhoto()
                        if (photo) {
                            const galleryPhoto = await CameraRoll.saveAsset(`file://${photo.path}`, {type: 'photo'})
                            onClose({...photo, path: galleryPhoto.node.image.uri})
                        }
                        onClose(undefined)
                    }}
                    background={{radius: 40}}
                    centered
                    style={[
                        styles.actionButton,
                        {
                            borderColor: theme.colors.outlineVariant,
                            //backgroundColor: changeRgbaOpacity(theme.colors.surface, 0.5),
                        },
                    ]}>
                    <View />
                </TouchableRipple>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    absoluteFill: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    actionButton: {
        borderWidth: 2,
        height: 80,
        width: 80,
        borderRadius: 50,
        bottom: 20,
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 40,
    },
    switchButton: {
        position: 'absolute',
        right: 20,
        bottom: 30,
    },
    cameraContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
})
export default CameraUI
