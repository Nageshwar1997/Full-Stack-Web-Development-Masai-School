# Implementation-of-CRUD-I

## Que-1 : How do you list all the databases present in your MongoDB server?

### Answer : `show dbs` or `show databases`

## Que-2 : What command is used to create or switch to a database in MongoDB?

### Answer : `use databaseName`

## Que-3 : How can you create a collection named "students" in your MongoDB database?

### Answer : `db.createCollection("students")`

## Que-4 : Write the command to insert a single document into the "students" collection with at least three fields: name, age, and course.

### Answer : `db.students.insertOne({name: "John Doe", age: 25, course: "Full Stack Mobile Development"})`

## Que-5 : How would you insert multiple documents into the "students" collection in a single command?

### Answer : `db.students.insertMany([{name: "Nageshwar Pawar", age: 26, course: "Full Stack Web Development"},{name: "Sanket Pawar", age: 24, course: "Full Stack Software Development"},{name: "Santosh Pawar", age: 23, course: "Full Stack Java Development"}])`

## Que-6 : What command is used to find or read all documents in the "students" collection?

### Answer : `db.students.find()`

## Que-7 : How can you read or find the first document in the "students" collection?

### Answer : `db.students.findOne()`

## Que-8 : Describe the command to update the course field of a specific student named "John Doe" to "Data Science".

### Answer : `db.students.updateOne({name: "John Doe"},{$set: {course: "Data Science"}})`

## Que-9 : What command would you use to increment the age field of all documents in the "students" collection by 1?

### Answer : `db.students.updateMany({}, {$inc: {age: 1}})`

## Que-10 : How can you delete a document with a specific name from the "students" collection?

### Answer : `db.students.deleteOne({name: "John Doe"})`

## Que-11 : Write the command to delete all documents from the "students" collection where the age is greater than or equal to a specific value.

### Answer : `db.students.deleteMany({age: {$gte: 50}})` // "50 is my given specific value"

## Que-12 : How do you find documents in the "students" collection where the course field is "Data Science"?

### Answer : `db.students.find({course: "Data Science"})`