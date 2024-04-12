import {
    ThemeProvider as NavigationThemeProvider,
    DarkTheme as NavigationDark,
    DefaultTheme as NavigationLight,
} from '@react-navigation/native'
import {FunctionComponent, PropsWithChildren} from 'react'
import {StyleSheet, useColorScheme, View} from 'react-native'
import {adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper'

const {LightTheme} = adaptNavigationTheme({reactNavigationLight: NavigationLight, materialLight: MD3LightTheme})
const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: NavigationDark})

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
    const colorScheme = useColorScheme()

    const isDark = colorScheme === 'dark'
    const paperTheme = isDark ? MD3DarkTheme : MD3LightTheme
    const navigationTheme = isDark ? DarkTheme : LightTheme

    return (
        <NavigationThemeProvider value={navigationTheme}>
            <PaperProvider theme={paperTheme}>
                <View style={[styles.container, {backgroundColor: paperTheme.colors.background}]}>{children}</View>
            </PaperProvider>
        </NavigationThemeProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ThemeProvider
