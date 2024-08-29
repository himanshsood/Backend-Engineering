const data = [
    { "name": "Karan Aujla", "age": 22, "marks": 85 },
    { "name": "Navaan Sandhu", "age": 24, "marks": 92 },
    { "name": "Arjan dhillon", "age": 20, "marks": 78 },
    { "name": "Prem dhillon", "age": 23, "marks": 64 },
    { "name": "Babbu Maan", "age": 21, "marks": 88 }
]


//Commands for mongo db database (collections)

/* 

1. Show database : show db
2. db.createCollections()
3. Using already created database : use db --(if collection not created already it creates a new collection)
4. Showing collection: show collection()



=> COMMANDS FOR 'CREATE'

1. db.col_name.insertOne({})
2. db.col_name.insertMany({}) and data is stored in objects , array of objects

const obj={
    name:"Ankur",
    age:18
}

const arr=[{name:"Harsh",age:20}]


3. db.col_name.insertOne({date:ISODate()})
What will this command do ??
db.col_name.insertOne() is a MongoDB method used to insert a single document into a collection.
{data: ISODate()} is the document being inserted, where:
data is the field name.
ISODate() is a MongoDB function that generates the current date and time in ISO 8601 format.





*/