import {DrawerActions} from '@react-navigation/native'
import {Stack, useNavigation} from 'expo-router'
import {IconButton} from 'react-native-paper'

import SpelerLijst from '@/app/spelers/(spelers)/spelerLijst'

const SpelersLayout = () => {
    const navigation = useNavigation()
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen
                name="(spelers/spelersLijst)"
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
                }}
            />
        </Stack>
    )
}

export default SpelersLayout
