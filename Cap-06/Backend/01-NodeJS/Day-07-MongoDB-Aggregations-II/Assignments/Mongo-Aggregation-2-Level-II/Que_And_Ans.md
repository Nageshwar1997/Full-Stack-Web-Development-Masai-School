# Level 2: MongoDB Aggregations - 2

## Que 01. Write Mongo query to retrieve documents from the orders in ascending order by total.

### Answer : `db.orders.find().sort({total: 1})`

## Que 02. Write Mongo query to retrieve the oldest paymentMethod from the payments collection as "\_id".

### Answer : ` db.payments.aggregate([{$sort: {payment_date: 1}}, {$limit: 1}, {$project: {_id: "$paymentMethod"}}])`

## Que 03. Write Mongo query to retrieve 2nd and 3rd buyers from the buyers collection.

### Answer : `db.buyers.find().skip(1).limit(2)`

## Que 04. Write Mongo query to retrieve the most Expensive product from order_details.

### Answer : `db.order_details.aggregate([{$sort: {price: -1}}, {$limit: 1}])`

## Que 05. Write Mongo query to retrieve the first order from the orders as per the order_date.

### Answer : `db.orders.find().sort({order_date: 1}).limit(1)`

## Que 06. Write Mongo query to retrieve the last 3 orders from the orders collection who have less total amount.

### Answer : `db.orders.find().sort({total: 1}).limit(3)`

## Que 07. Write Mongo query to retrieve the most recent shipped order from the orders collection.

### Answer : `db.orders.find({status: "shipped"}).sort({ship_date: -1}).limit(1)`

## Que 08. Write Mongo query to get the total revenue from all orders

### Answer : `db.orders.aggregate([{$group: {_id: null, totalRevenue: {$sum: "$total"}}}, {$project: {_id: 0, totalRevenue: 1}}])`

## Que 09. Write Mongo query to retrieve all the orders that shipped before 2022-05-26

### Answer : `db.orders.find({ship_date: { $lt: ISODate("2022-05-26")}})`

## Que 10. Write Mongo query to find the maximum price as maxPrice of products and their names as name for each category.

### Answer : `db.products.aggregate([{$group: {_id: "$category_id", maxPrice: {$max: "$price"}, name: {$first: "$name"}}}])`

## Que 11. Write Mongo query to find Most used payment Method as paymentMethod and the number of time it is used as count.

### Answer : `db.payments.aggregate([{$group: {_id: "$paymentMethod", count: {$sum: 1}}}, {$sort: {count: -1}}, {$limit: 1}])`

## Que 12. Write Mongo query to find the total count of orders by status.

### Answer : `db.orders.aggregate([{$group: {_id: "$status", count: {$sum: 1}}}])`

## Que 13. Write Mongo query to retrieve the orders grouped by customer_id with the max total

### Answer : `db.orders.aggregate([{$group: {_id: "$customer_id", maxTotal: {$max: "$total"}}}])`

## Que 14.Assess the impact of RAM capacity on laptop prices and ratings. Group laptops by RAM capacity and analyze the average price and rating for each group. Identify any significant trends or outliers.

### Answer : `db.newProducts.aggregate([{$group: {_id: "ram_memory", averagePrice: {$avg: "$Price"}, averageRating: {$avg: "$Rating"}}}, {$sort: {_id: 1}}])`

## Que 15.Investigate the price and rating distribution for gaming laptops. Identify which brands are leading in the gaming laptop market by comparing the average price, rating, GPU type, and RAM capacity for laptops categorized as gaming.

### Answer : `db.newProducts.aggregate([{$match: {gpu_type: "dedicated"}}, {$group: {_id: "$brand", averagePrice: {$avg: "$Price"}, averageRating: {$avg: "$Rating"}, gpuType: {$addToSet: "$gpu_type"}, averageRam: {$avg: "$ram_memory"}}}, {$sort: {averageRating: -1}}])`

## Que 16.Analyze the warranty periods offered by different brands and their correlation with laptop prices and ratings. Identify any patterns or insights regarding how warranty periods influence consumer ratings and pricing strategies.

### Answer : `db.newProducts.aggregate([{$group: {_id: {brand: "$brand", warranty: "$year_of_warranty"}, averagePrice: {$avg: "$Price"}, averageRating: {$avg: "$Rating"}}}, {$sort: {"_id.warranty": 1, "_id.brand": 1}}])`

## Que 17.Examine the relationship between processor brand (Intel, AMD, Apple) and laptop price, rating, and primary storage capacity. Group the laptops by processor brand and compare their average price, rating, and storage statistics to identify key differences.

### Answer : `db.newProducts.aggregate([{$group: {_id: "$processor_brand", averagePrice: {$avg: "$Price"}, averageRating: {$avg: "$Rating"}, averagePrimaryStorage: {$avg: "$primary_storage_capacity"}}}, {$sort: {_id: 1}}])`
