import {FunctionComponent, useEffect, useState} from 'react'
import {useMMKVObject} from 'react-native-mmkv'
import uuid from 'react-native-uuid'

import IWedstrijd from '../models/iWedstrijd'

type useWedstrijdReturnValue = {
    Wedstrijden: IWedstrijd[]
    maakWedstrijd: (
        ploeg1: string,
        ploeg2: string,
        gespeeld: boolean,
        goalPloeg1: number,
        goalPloeg2: number,
        datum?: string | undefined,
    ) => void
    toggleWedstrijd: (id: string) => void
    deleteWedstrijd: (id: string) => void
    updateWedstrijd: (newWedstrijd: Partial<IWedstrijd> & {id: string}) => void
    getWestrijdById: (id: string | undefined) => IWedstrijd | undefined
}

const UseWedstrijden = (key: string = 'Wedstrijden'): useWedstrijdReturnValue => {
    const [wedstrijden, setWedstrijden] = useMMKVObject<IWedstrijd[]>(key)
    const isUndefined = wedstrijden === undefined

    const maakWedstrijd = (
        ploeg1: string,
        ploeg2: string,
        gespeeld: boolean,
        goalPloeg1: number,
        goalPloeg2: number,
        datum?: string,
    ) => {
        setWedstrijden([
            ...(wedstrijden ?? []),
            {
                ploeg1,
                ploeg2,
                gespeeld: false,
                goalPloeg1,
                goalPloeg2,
                datum: datum?.toString(),
                id: uuid.v4().toString(),
            },
        ])
    }

    const toggleWedstrijd = (id: string) => {
        const wedstrijd = wedstrijden?.find(w => w.id === id)
        if (wedstrijd) {
            wedstrijd.gespeeld = !wedstrijd.gespeeld
            setWedstrijden(wedstrijden)
        }
    }

    const deleteWedstrijd = (id: string) => {
        if (wedstrijden) {
            setWedstrijden(wedstrijden.filter(w => w.id !== id))
        }
    }

    const updateWedstrijd = (newWedstrijd: Partial<IWedstrijd> & {id: string}) => {
        setWedstrijden(wedstrijden?.map(w => (w.id === newWedstrijd.id ? {...w, ...newWedstrijd} : w)))
    }

    const getWestrijdById = (id: string | undefined): IWedstrijd | undefined => {
        if (!id) return undefined
        return wedstrijden?.find(w => w.id === id)
    }

    return {
        Wedstrijden: wedstrijden ?? [],
        maakWedstrijd,
        toggleWedstrijd,
        deleteWedstrijd,
        updateWedstrijd,
        getWestrijdById,
    }
}

export default UseWedstrijden
