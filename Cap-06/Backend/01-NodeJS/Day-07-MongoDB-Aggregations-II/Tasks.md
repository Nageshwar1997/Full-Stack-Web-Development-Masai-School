# Questions & Answers :

## Que 01. Give me all the unique genders from customers collection

### Answer : `db.customers.aggregate([{$group: {_id: "$gender"}}])`

## Que 02. Give me all the unique genders and the number of people from each gender, from customers collection

### Answer : `db.customers.aggregate([{$group: {_id: "$gender", numberOfPeoples: {$count: {}}}}])`

## Que 03. Give me all the unique gender and the average age of every gender from customers collection

### Answer : `db.customers.aggregate([{$group: {_id: "$gender", averageAge: {$avg: "$age"}}}])`

## Que 04. Give me all the unique gender and the average salary of every gender from customers collection

### Answer : `db.customers.aggregate([{$group: {_id: "$gender", averageSalary: {$avg: "$salary"}}}])`

## Que 05. Make a group of all data & give me a average age of all the people

### Answer : `db.customers.aggregate({ $match: { age: { $gt: 20, $lt: 25 } }}, { $group: { _id: null, averageAge: { $avg: "$age" } } })` OR ` db.customers.aggregate([{$match: {$and: [{age: {$gt: 20}}, {age: {$lt: 25}}]}},{$group: {_id: "$name", avgAge: {$avg: "$age"}}}])`

## Que 06. Get the unique gender of people who are above the age 50 & their average salary

### Answer : `db.customers.aggregate([{$match: {age: {$gte: 50}}}, {$group: {_id: "$gender", avgSalary: {$avg: "$salary"}, count: {$count: {}}}}])`

## Que 07. Get the unique genders and their average salary where the average salary is greater than or equal to 25000

### Answer : `db.customers.aggregate([{$group: {_id: "$gender", averageSalary: {$avg:"$salary"}}}, {$match: {averageSalary: {$gte: 25000}}}])`

## Que 08. Get the unique genders and grouped whole document

### Answer : `db.customers.aggregate([{$group: {_id: "$gender", documents: {$push: "$$ROOT"}}}])`

## Que 09. Get the unique genders and grouped documents & project only first_name and last_name

### Answer : `db.customers.aggregate([{$group: {_id: "$gender", documents: {$push: {first_name:"$first_name", last_name: "$last_name"}}}}])`