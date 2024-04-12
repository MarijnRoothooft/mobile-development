import {Tabs} from 'expo-router'
import {FunctionComponent} from 'react'
import {Icon} from 'react-native-paper'

const TabsLayout: FunctionComponent = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="toBePlayedGames"
                options={{
                    title: 'future games',
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            source="calendar-clock"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="allGames"
                options={{
                    title: 'All games',
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            source="soccer-field"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="playedGames"
                options={{
                    title: 'Played games',
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            source="scoreboard"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
export default TabsLayout
