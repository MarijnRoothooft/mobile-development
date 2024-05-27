import {FunctionComponent} from 'react'
import {useMMKVObject} from 'react-native-mmkv'
import uuid from 'react-native-uuid'

import ISpeler from '@/models/ISpeler'

type useSpelerReturnValue = {
    spelers: ISpeler[]
    createSpeler: (voornaam: string, achternaam: string, rugnummer: number, geboortedatum: Date | undefined) => void
    updateSpeler: (newSpeler: Partial<ISpeler> & {id: string}) => void
    deleteSpeler: (id: string) => void
    getSpelerById: (id: string | undefined) => ISpeler | undefined
}

const UseSpelers = (key: string = 'spelers'): useSpelerReturnValue => {
    const [spelers, setSpelers] = useMMKVObject<ISpeler[]>(key)
    const isUndefined = spelers === undefined

    const createSpeler = (voornaam: string, achternaam: string, rugnummer: number, geboortedatum: Date | undefined) => {
        setSpelers([
            ...(spelers ?? []),
            {
                voornaam,
                achternaam,
                rugnummer,
                geboortedatum,
                id: uuid.v4.toString(),
            },
        ])
    }

    const updateSpeler = (newSpeler: Partial<ISpeler> & {id: string}) => {
        setSpelers(spelers?.map(s => (s.id === newSpeler.id ? {...s, newSpeler} : s)))
    }
    const deleteSpeler = (id: string) => {
        if (spelers) {
            setSpelers(spelers.filter(s => s.id !== id))
        }
    }

    const getSpelerById = (id: string | undefined): ISpeler | undefined => {
        if (!id) return undefined

        return spelers?.find(s => s.id === id)
    }

    return {
        spelers: spelers ?? [],
        createSpeler,
        updateSpeler,
        deleteSpeler,
        getSpelerById,
    }
}
export default UseSpelers
