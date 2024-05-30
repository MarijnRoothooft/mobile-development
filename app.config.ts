import {ExpoConfig, ConfigContext} from 'expo/config'

import 'dotenv/config'

export default ({config}: ConfigContext): ExpoConfig => {
    if (!config.android) {
        config.android = {}
    }

    config.android.googleServicesFile = process.env.GOOGLE_SERVICES_JSON

    if (!config.ios) {
        config.ios = {}
    }

    config.ios.googleServicesFile = process.env.GOOGLE_SERVICES_PLIST

    return config as ExpoConfig
}
