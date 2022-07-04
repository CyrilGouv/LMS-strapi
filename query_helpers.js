const qs = require('qs')

// Query name contains classroom_3 && (maxStudents > 25 || maxStudents < 10)

const query = qs.stringify(
    {
        filters: {
            $or: [
                {
                    maxStudents: {
                        $gt: 25,
                    }
                },
                {
                    maxStudents: {
                        $lt: 10,
                    }
                },
            ],
            name: {
                $containsi: 'classroom_3'
            },
        },
    },
    {
        encodeValuesOnly: true,
    }
)

console.log(query)