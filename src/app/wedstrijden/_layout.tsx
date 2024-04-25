import {DrawerActions} from '@react-navigation/native'
import {Link, Stack, useNavigation} from 'expo-router'
import {FunctionComponent} from 'react'
import {IconButton} from 'react-native-paper'

import wedstrijden from '@/app/wedstrijden/index'

const Wedstrijdlayout: FunctionComponent = () => {
    const navigation = useNavigation()
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen
                name="(wedstrijden)"
                options={{
                    title: 'Gamepage',
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
                        <Link href="../wedstrijdDetail/-1">
                            <IconButton
                                icon="plus"
                                iconColor={tintColor}
                                size={25}
                            />
                        </Link>
                    ),
                }}
            />

            <Stack.Screen
                options={{
                    presentation: 'modal',
                    title: 'New Wedstrijd',
                    headerRight: ({tintColor}) => (
                        <IconButton
                            icon="check"
                            iconColor={tintColor}
                            size={25}
                        />
                    ),
                }}
                name="wedstrijdDetail/[wedstrijdId]"
            />
        </Stack>
    )
}

export default Wedstrijdlayout
