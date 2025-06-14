import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Drawer} from 'expo-router/drawer'
import {FunctionComponent} from 'react'
import {useTheme} from 'react-native-paper'

import ThemeProvider from '@/context/themeProvider'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !__DEV__,
            staleTime: Infinity,
        },
    },
})

const ThemeWrapper: FunctionComponent = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <Layout />
            </ThemeProvider>
        </QueryClientProvider>
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
                    name="index"
                    options={{title: 'Hoofdpagina'}}
                />
                <Drawer.Screen
                    name="spelers"
                    options={{title: 'Spelers', headerShown: false}}
                />
                <Drawer.Screen
                    name="wedstrijden"
                    options={{title: 'Wedstrijden', headerShown: false}}
                />
            </Drawer>
        </ThemeProvider>
    )
}

export default ThemeWrapper
