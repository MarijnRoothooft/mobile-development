import {Drawer} from 'expo-router/drawer'
import {FunctionComponent} from 'react'
import {useTheme} from 'react-native-paper'

import ThemeProvider from '@/context/themeProvider'

const ThemeWrapper: FunctionComponent = () => {
    return (
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    )
}

const Layout: FunctionComponent = () => {
    const theme = useTheme()
    return (
        <ThemeProvider>
            <Drawer
                screenOptions={{
                    headerTintColor: theme.colors.onSurface,
                }}>
                <Drawer.Screen
                    redirect
                    name="index"
                    options={{title: 'Home'}}
                />
                <Drawer.Screen
                    name="spelers/spelers"
                    options={{title: 'Players'}}
                />
                <Drawer.Screen
                    name="wedstrijden"
                    options={{title: 'Games', headerShown: false}}
                />
            </Drawer>
        </ThemeProvider>
    )
}

export default ThemeWrapper
