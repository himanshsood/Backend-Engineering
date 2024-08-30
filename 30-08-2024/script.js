name> db.new.updateMany({sub:"eng"}, {$set:{sub:"datascience"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
name> db.new.updateMany({}, {$set:{address:"Chitkara University"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 9,
  modifiedCount: 9,
  upsertedCount: 0
}
name> db.new.updateOne({name:"ofdge"},  { $set: { grade: "A" } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
name> db.new.updateOne({name:"ankur"},  { $set: { grade: "B" } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
name> db.students.find(
...    {
...       age: 22,
...       marks: 90
... })

name> db.students.fnd({})
TypeError: db.students.fnd is not a function
name> db.students.fnd({age:40}, {marks:99})
TypeError: db.students.fnd is not a function
name> db.students.find({age:40}, {marks:99})

name> db.students.find({age:40,marks:99})

name> db.new.find({age:40,marks:99})
[
  {
    _id: ObjectId('66cebecc1ea7bc58f52710bd'),
    name: 'dksdf',
    age: 40,
    marks: 99,
    sub: 'datascience',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66cff755b3a15a229a2710bd'),
    name: 'dksdf',
    age: 40,
    marks: 99,
    sub: 'datascience',
    address: 'Chitkara University'
  }
]
name> db.new.find({age:{$gte 18},marks:{$gte 80}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:23)

> 1 | db.new.find({age:{$gte 18},marks:{$gte 80}})
    |                        ^
  2 |

name> db.new.find({age:{$gte:18},marks:{$gte:80}})
[
  {
    _id: ObjectId('66cebecc1ea7bc58f52710bd'),
    name: 'dksdf',
    age: 40,
    marks: 99,
    sub: 'datascience',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66cebecc1ea7bc58f52710be'),
    name: 'ofdge',
    age: 20,
    marks: 80,
    sub: 'math',
    address: 'Chitkara University',
    grade: 'A'
  },
  {
    _id: ObjectId('66cff755b3a15a229a2710bd'),
    name: 'dksdf',
    age: 40,
    marks: 99,
    sub: 'datascience',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66cff755b3a15a229a2710be'),
    name: 'ofdge',
    age: 20,
    marks: 80,
    sub: 'math',
    address: 'Chitkara University'
  }
]
name> db.new.find({grade:A})
ReferenceError: A is not defined
name> db.new.find({grade:"A"})
[
  {
    _id: ObjectId('66cebecc1ea7bc58f52710be'),
    name: 'ofdge',
    age: 20,
    marks: 80,
    sub: 'math',
    address: 'Chitkara University',
    grade: 'A'
  }
]
name>

name> db.new.find({$or:[{age: {$gte:30}, marks:{$gte:80}}])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:52)

> 1 | db.new.find({$or:[{age: {$gte:30}, marks:{$gte:80}}])
    |                                                     ^
  2 |

name> db.new.find({$or:[{age: {$gte:30}, marks:{$gte:80+}}]})
Uncaught:
SyntaxError: Unexpected token (1:50)

> 1 | db.new.find({$or:[{age: {$gte:30}, marks:{$gte:80+}}]})
    |                                                   ^
  2 |

name> db.new.find({$or:[{age: {$gte:30}}, {marks:{$gte:80}}]})
[
  {
    _id: ObjectId('66cebecc1ea7bc58f52710bd'),
    name: 'dksdf',
    age: 40,
    marks: 99,
    sub: 'datascience',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66cebecc1ea7bc58f52710be'),
    name: 'ofdge',
    age: 20,
    marks: 80,
    sub: 'math',
    address: 'Chitkara University',
    grade: 'A'
  },
  {
    _id: ObjectId('66cebecc1ea7bc58f52710bf'),
    name: 'dfgae',
    age: 30,
    marks: 70,
    sub: 'dso',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66cebecc1ea7bc58f52710c0'),
    name: 'jjksd',
    age: 50,
    marks: 60,
    sub: 'dfgad',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66cff755b3a15a229a2710bd'),
    name: 'dksdf',
    age: 40,
    marks: 99,
    sub: 'datascience',
    address: 'Chitkara University'
  },
  {
    _id: ObjectId('66cff755b3a15a229a2710be'),
    name: 'ofdge',
    age: 20,
    marks: 80,
    sub: 'math',
    address: 'Chitkara University'
  }
]
name>