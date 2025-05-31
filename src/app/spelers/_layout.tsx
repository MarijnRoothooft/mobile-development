import {DrawerActions} from '@react-navigation/native'
import {Link, Stack, useNavigation} from 'expo-router'
import {View} from 'react-native'
import {IconButton} from 'react-native-paper'

const SpelersLayout = () => {
    const navigation = useNavigation()
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen
                name="(spelers)/spelerLijst"
                options={{
                    title: 'Spelerspagina',
                    headerLeft: ({tintColor}) => (
                        <IconButton
                            icon="menu"
                            iconColor={tintColor}
                            style={{marginLeft: -10, marginRight: 20}}
                            size={25}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
                        />
                    ),
                    headerRight: ({tintColor}) => (
                        <Link href="../spelerDetail/-1">
                            <View style={{flexDirection: 'row'}}>
                                <IconButton
                                    icon="plus"
                                    iconColor={tintColor}
                                    size={25}
                                />
                            </View>
                        </Link>
                    ),
                }}
            />
            <Stack.Screen
                options={{
                    presentation: 'modal',
                    title: 'Nieuwe Speler',
                    headerRight: ({tintColor}) => (
                        <IconButton
                            icon="check"
                            iconColor={tintColor}
                            size={25}
                        />
                    ),
                }}
                name="spelerDetail/[spelerId]"
            />
        </Stack>
    )
}

export default SpelersLayout
