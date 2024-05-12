import {useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult} from '@tanstack/react-query'

import {database} from '@/api/database'
import IWedstrijd from '@/models/IWedstrijd'
/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export function useGetWedstrijden(): UseQueryResult<IWedstrijd[], Error> {
    return useQuery({
        queryKey: ['wedstrijden'],
        queryFn: getWedstrijden,
    })
}

export function useCreateWedstrijden(): UseMutationResult<IWedstrijd, Error, createWedstrijdParams> {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createWedstrijd,
        onSuccess: data => {
            queryClient.setQueryData<IWedstrijd[]>(['wedstrijden'], old => [...(old ?? []), data])
        },
    })
}

export function useDeleteWedstrijden(): UseMutationResult<void, Error, deleteWedstrijdParams> {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteWedstrijd,
        onSuccess: (_, {id}) => {
            queryClient.setQueryData<IWedstrijd[]>(['wedstrijden'], old =>
                (old ?? []).filter(wedstrijd => wedstrijd.id !== id),
            )
        },
    })
}

export function useGetCompletedWedstrijden(): UseQueryResult<IWedstrijd[], Error> {
    return useQuery({
        queryKey: ['wedstrijden'],
        queryFn: getWedstrijden,
        select: wedstrijden => wedstrijden.filter(wedstrijd => wedstrijd.gespeeld),
    })
}

export function useGetUnplayedGames(): UseQueryResult<IWedstrijd[], Error> {
    return useQuery({
        queryKey: ['wedstrijden'],
        queryFn: getWedstrijden,
        select: wedstrijden => wedstrijden.filter(wedstrijd => !wedstrijd.gespeeld),
    })
}

export function useGetWedstrijdenById(id: number, enabled: boolean): UseQueryResult<IWedstrijd | undefined, Error> {
    return useQuery({
        queryKey: ['wedstrijden'],
        queryFn: getWedstrijden,
        select: wedstrijden => wedstrijden.find(wedstrijd => wedstrijd.id === id),
        enabled,
    })
}

export function useUpdateWedstrijden(): UseMutationResult<IWedstrijd, Error, IWedstrijd> {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateWedstrijd,
        onSuccess: data => {
            queryClient.setQueryData<IWedstrijd[]>(['wedstrijden'], old =>
                (old ?? []).map(wedstrijd => (wedstrijd.id === data.id ? data : wedstrijd)),
            )
        },
    })
}

export function useToggleWedstrijdStatus(): UseMutationResult<IWedstrijd, Error, ToggleStatusParams> {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: toggleWedstrijdStatus,
        onSuccess: data => {
            queryClient.setQueryData<IWedstrijd[]>(['wedstrijden'], old =>
                (old ?? []).map(wedstrijd => (wedstrijd.id === data.id ? data : wedstrijd)),
            )
        },
    })
}

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */
async function getWedstrijden(): Promise<IWedstrijd[]> {
    const queryResult = await database.executeAsync('Select * FROM Wedstrijd ORDER BY id ')
    return queryResult.rows?._array as IWedstrijd[]
}

interface createWedstrijdParams {
    ploeg1: string
    ploeg2: string
    gespeeld: boolean
    goalPloeg1: number
    goalPloeg2: number
    datum: Date | undefined
}
async function createWedstrijd({
    ploeg1,
    ploeg2,
    gespeeld,
    goalPloeg1,
    goalPloeg2,
    datum,
}: createWedstrijdParams): Promise<IWedstrijd> {
    const queryResult = await database.executeAsync(
        `INSERT INTO Wedstrijd (ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum) values(?,?,?,?,?,?) returning * `,
        [ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum?.getTime()],
    )
    return queryResult.rows?._array[0] as IWedstrijd
}

interface deleteWedstrijdParams {
    id: number
}
async function deleteWedstrijd({id}: deleteWedstrijdParams): Promise<void> {
    await database.executeAsync(`DELETE FROM Wedstrijd WHERE id = ?`, [id])
}

async function updateWedstrijd({
    id,
    ploeg1,
    ploeg2,
    gespeeld,
    goalPloeg1,
    goalPloeg2,
    datum,
}: IWedstrijd): Promise<IWedstrijd> {
    const queryResult = await database.executeAsync(
        `update Wedstrijd set ploeg1=?; ploeg2=?, gespeeld=?,goalPloeg1=?,Goalploeg2=?, datum=?,WHERE id = ? RETURNING *`,
        [ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum?.getTime(), id],
    )
    return queryResult.rows?._array?.at(0) as IWedstrijd
}

interface ToggleStatusParams {
    id: number
}
async function toggleWedstrijdStatus({id}: ToggleStatusParams): Promise<IWedstrijd> {
    const queryResult = await database.executeAsync(
        `UPDATE Wedstrijd SET gespeeld = NOT gespeeld WHERE id = ? RETURNING *`,
        [id],
    )

    return queryResult.rows?._array?.at(0) as IWedstrijd
}
