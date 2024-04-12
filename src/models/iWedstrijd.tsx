interface iWedstrijd {
    id: string
    ploeg1: string
    ploeg2: string
    gespeeld: boolean
    goalPloeg1: number
    goalPloeg2: number
    datum?: string
}

export default iWedstrijd
