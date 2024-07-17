# Level 1: Introduction to MongoDB | CRUD

## Que 1. What is a NoSQL Database, and explain the types of NoSQL database?

Answer:- `A NoSQL database is a type of database designed for flexible data models, scalability, and high performance. Unlike traditional SQL databases, NoSQL can handle unstructured or semi-structured data.`

## Que 2. What is the difference between SQL and NoSQL databases?

Answer :-
SQL -> `SQL databases use structured data with fixed schemas and support complex queries.`
NoSQL -> `NoSQL databases use unstructured or semi-structured data with flexible schemas and support flexible queries.`

## Que 3. How to choose between MongoDB and MySQL based on your requirements?

Answer :- -`Choose MongoDB if your data structure is flexible, you need high scalability, or you're working with complex, nested data types like JSON. It’s ideal for real-time analytics and applications that require fast reads and writes.` -`On the other hand, choose MySQL if your data is highly structured and requires a predefined schema. It's best for complex queries involving joins and when data integrity and consistency are critical, such as in financial applications. Additionally, MySQL offers a mature ecosystem with robust community support.`

## Que 4. What are collections and documents in a MongoDB database?

Answer :-
Collections - `A collection is a group of related documents, similar to a table in a relational database. Collections can store multiple documents and do not require a fixed schema, allowing for flexibility in the data structure.`
Documents - `A document is a single record within a collection, stored in a format like JSON or BSON. Each document can have a unique structure, consisting of key-value pairs, which makes it easy to represent complex data.`

## Que 5. What is BSON? What is the difference between BSON and JSON?

Answer :- -`BSON (Binary JSON) is a binary format used by MongoDB that extends JSON with additional data types.` -`The main differences are that BSON is a binary format, supports more data types, is typically more compact, offers faster performance, and is used internally by MongoDB, while JSON is a text format commonly used for web APIs and data interchange.`

## Que 6. What are MongoDB Compass and MongoDB Shell used for?

Answer :- -`MongoDB Compass is a graphical user interface (GUI) for MongoDB that allows users to visualize and analyze data, create and modify documents, and perform queries without needing to write code.` -`MongoDB Shell is a command-line interface (CLI) that enables users to interact directly with the MongoDB database, execute queries, and perform administrative tasks using JavaScript syntax.`

## Que 7. How to create collections in MongoDB?

Answer :- -`To create collections in MongoDB using MongoDB Compass, open Compass, connect to your instance, select the database, click "Create Collection," enter the collection name, and click "Create."` -`Using the MongoDB Shell, switch to your database with use yourDatabaseName and create a collection with db.createCollection("collectionName").`

## Que 8. What is the difference between insertMany and insertOne?

Answer :- -`The difference between insertMany and insertOne in MongoDB is that insertOne is used to insert a single document into a collection, while insertMany is used to insert multiple documents at once.` -`insertOne returns the inserted document, whereas insertMany returns information about the multiple documents inserted, including their IDs.`

## Que 9. What is the difference between deleteOne and deleteMany?

Answer :- -`The difference between deleteOne and deleteMany in MongoDB is that deleteOne removes a single document that matches the specified filter, while deleteMany removes all documents that match the filter.` -`deleteOne stops after deleting one document, whereas deleteMany can delete multiple documents in a single operation.`

## Que 10. How to read data in MongoDB? What is the difference between find and findOne?

Answer :- `To read data in MongoDB, you can use the find() method to query documents from a collection.` -`The find() method returns all documents that match the query. The findOne() method returns the first document that matches the query.` -`The find() method can be used to query documents based on a specific field, while the findOne() method can be used to query documents based on a specific field and return the first result.`

## Que 11. What is $set in MongoDB?

Answer :- `"$set" in MongoDB is an update operator used to modify specific fields in a document. It can update existing fields or add new fields if they do not already exist.`

## Que 12. How to filter data using MongoDB?

Answer :- `To filter data in MongoDB, we can use the find() method with query parameters to specify your criteria. Here are some common ways to filter data:`

- Find documents with specific field values eg. `($eq, $ne, $gt, $lt, $gte, $lte, $in, $nin)`
- Filter using operators eg. `($gt, $lt, $gte, $lte, $eq, $ne, $in, $nin)`
- Using logical operators eg. `($and, $or, $not)`
