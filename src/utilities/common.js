
export const data = {
    columns: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'Prénom', width: 150 },
        { field: 'lastName', headerName: 'Nom', width: 150 },
        {
            field: 'age',
            headerName: 'Âge',
            type: 'number',
            width: 110,
        },
    ],
    rows: [
        { id: 1, lastName: 'Durand', firstName: 'Jean', age: 35 },
        { id: 2, lastName: 'Martin', firstName: 'Sophie', age: 42 },
        { id: 3, lastName: 'Bernard', firstName: 'Luc', age: 29 },
        { id: 4, lastName: 'Robert', firstName: 'Claire', age: 30 },
    ]
}
