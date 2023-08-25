# buildSQLQuery

通过自定义表名、列名、条件和排序，你可以根据实际需求生成不同的 SQL 查询语句。

## 示例

```javascript
// 引入 buildSQLQuery 函数
import { buildSQLQuery } from "tool-assistant";

// 示例：只查询一个表，无条件，无排序。
const tableName = "customers";
const columnsToSelect = ["id", "name", "email"];
const conditions = [];

const query = buildSQLQuery(tableName, columnsToSelect, conditions);
console.log(query);
//SELECT id, name, email FROM customers

// 示例：查询一个表，带条件，无排序。
const tableName = "products";
const columnsToSelect = ["id", "name", "price"];
const conditions = ['category = "Electronics"', "price > 100"];

const query = buildSQLQuery(tableName, columnsToSelect, conditions);
console.log(query);
// SELECT id, name, price FROM products WHERE category = "Electronics" AND price > 100

// 示例：查询多个表，带条件，带排序。
const tableNames = "orders o, customers c";
const columnsToSelect = ["o.order_id", "o.order_date", "c.customer_name"];
const conditions = ["o.customer_id = c.customer_id", "o.order_total > 500"];
const orderByColumns = ["o.order_date DESC"];

const query = buildSQLQuery(
  tableNames,
  columnsToSelect,
  conditions,
  orderByColumns
);
console.log(query);
// SELECT o.order_id, o.order_date, c.customer_name FROM orders o, customers c WHERE o.customer_id = c.customer_id AND o.order_total > 500 ORDER BY o.order_date DESC
```

## 说明

该方法生成的 SQL 查询语句是通用的，可以适用于多种 SQL 数据库，包括 MySQL 和 Oracle。然而，需要注意的是，在实际应用中，不同的数据库可能具有一些语法和功能上的差异。因此，一些复杂的查询和特定的数据库特性可能需要进行适当的调整和处理。

通用的 SQL 语法通常是大多数主流数据库共通的部分，比如 SELECT、FROM、WHERE、ORDER BY 等关键字。这些关键字的用法和语法在不同的数据库中通常是一致的。

然而，仍然有一些差异存在。例如，MySQL 使用的是 LIMIT 语句限制查询结果的数量，而 Oracle 使用的是 ROWNUM 来实现类似的功能。在处理分页查询时，语法差异可能需要根据所使用的具体数据库进行调整。

另外，不同数据库厂商也可能支持不同的函数、语法扩展和特性。这些特定的功能可能需要根据目标数据库进行调整，以确保生成的 SQL 查询语句在特定数据库中能够正确运行和达到预期效果。

因此，在使用通用的函数生成 SQL 查询语句时，建议结合特定数据库的文档和规范来进行相应的调整和优化，以确保生成的 SQL 在所使用的数据库中正确有效。
