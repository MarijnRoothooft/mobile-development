interface IWedstrijd {
    id: number
    ploeg1: string
    ploeg2: string
    gespeeld: boolean
    goalPloeg1: number
    goalPloeg2: number
    datum: Date | undefined
}

export default IWedstrijd
