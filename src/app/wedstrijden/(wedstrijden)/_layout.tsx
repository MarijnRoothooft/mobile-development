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
                name="toekomstigeWedstrijden"
                options={{
                    title: 'Toekomstige',
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
                name="alleWedstrijden"
                options={{
                    title: 'Alle',
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
                name="gespeeldeWedstrijden"
                options={{
                    title: 'Gespeeld',
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
