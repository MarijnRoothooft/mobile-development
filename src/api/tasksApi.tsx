import IWedstrijd from '@/models/iWedstrijd'
import {database} from '@/api/database'
import iWedstrijd from '@/models/iWedstrijd'

async function createWedstrijd({ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum}: IWedstrijd: Promise<IWedstrijd> {
    const queryResult = await database.executeAsync(
        `INSERT INTO Wedstrijd (ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum) values(?,?,?,?,?,?) returning * `,
        [ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum?.getTime()],
    )
    return queryResult.rows?._array[0] as IWedstrijd
}

async function updateWedstrijd({id, ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum, completed}: iWedstrijd):Promise<IWedstrijd>{
    const queryResult = await database.executeAsync(
        `update Wedstrijd set ploeg1=?; ploeg2=?, gespeeld=?,goalPloeg1=?,Goalploeg2=?, datum=?, completed=?`
    )
}
