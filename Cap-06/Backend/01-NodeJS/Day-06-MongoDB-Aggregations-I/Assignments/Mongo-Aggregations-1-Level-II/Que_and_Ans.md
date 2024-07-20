# Mongo-Aggregations-1-Level-II

## Que. 01 : Write Mongo query to retrieve the documents from the orders where the customer_id is 1.

### Answer : `db.orders.aggregate([{$match: {customer_id: 1}}])`

## Que. 02 : Write Mongo query to retrieve documents from the products where supplier_id is 3. (In a data nothing present any product which is supplier_id is 3, but according to question below command is correct)

### Answer : `db.products.aggregate([{$match: {supplier_id: 3}}])`

## Que. 03 : Write Mongo query to retrieve the documents from the orders collection with "status": "shipped" .

### Answer : `db.orders.aggregate([{$match: {status: "shipped"}}])`

## Que. 04 : Write Mongo query to retrieve the amount and paymentMethod from payments where the paymentMethod is not UPI.

### Answer : `db.payments.aggregate([{$match: {paymentMethod: {$ne: "UPI"}}}])`

## Que. 05 : Write Mongo query to retrieve the paymentstatus where the amount is greater than 100.

### Answer : `db.payments.aggregate([{$match: {amount: {$gt: 100}}}, {$project: {paymentstatus: 1, _id: 0}}])`

## Que. 06 : Write Mongo query to retrieve the shipper_id and price from the order_details where the price is greater than 2000. (In a data nothing present any order which is price is greater than 2000, but according to question below command is correct)

### Answer : `db.order_details.aggregate([{$match: {price: {$gt: 2000}}}, {$project: {shipper_id: 1, _id: 0}}])`

## Que. 07 : Write Mongo query to retrieve the customer_id and \_id from the orders where the status is not shipped.

### Answer : `db.orders.aggregate([{$match: {status: {$ne: "shipped"}}},{$project: {customer_id: 1, _id: 1}}])`

## Que. 08 : Write Mongo query to retrieve documents from the products where category_id is 1 with out product \_id.

### Answer : `db.products.aggregate([{$match: {category_id: 1}},{$project: {_id: 0}}])`

## Que. 09 : Write Mongo query to retrieve name,quantity from the products where price greater than 1500. (In a data nothing present any product which is price is greater than 1500, but according to question below command is correct)

### Answer : `db.products.aggregate([{$match: {price: {$gt: 1500}}}, {$project: {name: 1, quantity: 1, _id: 0}}])`

## Que. 10 : Write Mongo query to retrieve the name from the shippers where the phone number is 1-800-742-5877.

### Answer : `db.shippers.aggregate([{$match: {phone: "1-800-742-5877"}}, {$project: {name: 1, _id: 0}}])`

## Que. 11 : Write Mongo query to retrieve the city and phone of the suppliers where the suppliers name is Sony.(In a data nothing present any supplier which is name is Sony, but according to question below command is correct)

### Answer : `db.suppliers.aggregate([{$match: {name: "Sony"}},{$project: {city: 1, phone: 1, _id: 0}}])`

## Que. 12 : Write Mongo query to retrieve the name of the suppliers where the city is Tokyo.(In a data nothing present any supplier which is city is Tokyo, but according to question below command is correct)

### Answer : `db.suppliers.aggregate([{$match: {city: "Tokyo"}},{$project: {name: 1, _id: 0}}])`

## Que. 13 : Write Mongo query to find amount of payment made through "UPI" ?

### Answer : `db.payments.aggregate([{$match: {paymentMethod: "UPI"}}, {$project: {amount: 1, _id: 0}}])`

## Que. 14 : Write Mongo query to find buyers city as key name "city" who uses hotmail ?

### Answer : `db.buyers.aggregate([{$match: {"email": /hotmail\.com$/}}, {$project: {city: "$address.city", _id: 0}}])`

## Que. 15 : Use MongoDB aggregation to retrieve the top 5 most recent orders that have been shipped, projecting the order date, status, and total amount. (In a data nothing present 5 orders which is status is shipped, but according to question below command is correct)

### Answer : `db.orders.aggregate([{$match: {status: "shipped"}}, {$sort: {order_date: -1}}, {$limit: 5}, {$project: {_id: 0, order_date: 1, status: 1, total: 1}}])`

## Que. 16 : Aggregate the first 3 payments with a "success" status, projecting the payment date, amount, and method.

### Answer : `db.payments.aggregate([{$match: {paymentstatus: "success"}}, {$limit: 3}, {$project: {_id: 0, payment_date: 1, amount: 1, paymentMethod: 1}}])`

## Que. 17 : Aggregate all pending orders, sort them by the order date in descending order, and project the customer ID, order date, and total amount.

### Answer : `db.orders.aggregate([{$match: {status: "pending"}}, {$sort: {order_date: -1}}, {$project: {_id: 0, customer_id: 1, order_date: 1, total: 1}}])`

## Que. 18 : Aggregate products, sort them by quantity in descending order, limit the result to the top 10 items, and project the product name and quantity.

### Answer : `db.products.aggregate([{$sort: {quantity: -1}}, {$limit: 10}, {$project: {name: 1, quantity: 1, _id: 0}}])`
