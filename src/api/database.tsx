import {OPSQLiteConnection, open, SQLBatchTuple} from '@op-engineering/op-sqlite'

function connectToDb(): OPSQLiteConnection {
    const db = open({
        name: 'thomasmore.db',
    })

    db.execute('PRAGMA foreign_keys = ON;')

    db.executeBatch([
        [
            `CREATE TABLE IF NOT EXISTS Wedstrijd
             (
                 id          INTEGER PRIMARY KEY AUTOINCREMENT,
                 ploeg1        TEXT    NOT NULL UNIQUE,
                 ploeg2        TEXT    NOT NULL UNIQUE,
                 gespeeld      BOOL NOT NULL DEFAULT NO,
                 goalPloeg1    INTEGER NOT NULL DEFAULT 0,
                 goalPloeg2    INTEGER NOT NULL DEFAULT 0,
                 datum        INTEGER
             ) STRICT;`,
        ],
        ...(Array(200)
            .fill(0)
            .map((_, i) => [
                `INSERT OR IGNORE INTO Wedstrijd (ploeg1, ploeg2, gespeeld, goalPloeg1, goalPloeg2, datum)
                 VALUES ('Team ${i + 1}', 'Opponent ${i + 1}', ${i % 2}, ${i * 2}, ${i * 3}, ${Date.now()})`,
            ]) as SQLBatchTuple[]),
    ])

    return db
}
export const database = connectToDb()
