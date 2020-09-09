---
description: >-
  Understand the standard SQL syntax from which to search ProcessMaker data
  using ProcessMaker Query Language (PMQL).
---

# PMQL Syntax to Search ProcessMaker Data

## Overview

ProcessMaker Query Language \(PMQL\) builds upon standard search query language \(SQL\) syntax to use properties unique to ProcessMaker. PMQL supports the following SQL syntax:

* [Operators and grouping multiple criteria](./#operators-and-grouping-multiple-criteria)
* [`CAST` function to convert data types](syntax-to-search-processmaker-data.md#cast-function-to-convert-data-types)
* [`NOW` keyword to perform temporal comparisons from now](syntax-to-search-processmaker-data.md#now-keyword-to-perform-temporal-comparisons-from-now)

## Operators and Grouping Multiple Criteria

PMQL supports the following operators in and between each search criterion. The example for each comparative or logical operator assumes that the PMQL query searches against Request data for a Request variable \(such as `last_name`,  `experience`, and `job_title`\). See [Request Information](./#request-information) why `data.` precedes each Request variable in each example.

### `LOWER` Function to Disregard Case Sensitivity in Strings and Request Variables

PMQL queries are case sensitive in regard to comparative and logical operators. If querying for a string or the value of a Request variable name, PMQL returns results only if the case exactly matches your query. Use the `lower` function to disregard case-sensitivity evaluation by lower-casing strings and Request variable names. The `lower` function is useful for when you are unsure of the case sensitivity of the comparing string or Request variable name.

#### Usage

`lower(RequestVariable)` where `RequestVariable` is the Request variable name

#### Example

`lower(data.job_title) LIKE "prod%" OR lower(data.job_title) LIKE "proj%"`

### Comparative and Logical Operators

PMQL operators such as `AND`, `OR`, and `LIKE` are not case-sensitive. PMQL operators are capitalized in this document for easier readability.

Spaces are allowed between operators. Example: `data.last_name = "Canera"`

| Operator Description | Syntax | Example |
| :--- | :--- | :--- |
| Equal to | `=` | `data.last_name = "Canera"` |
| Not equal to | `!=` | `data.last_name != "Canera"` |
| Less than | `<` | `data.experience < 2` |
| Greater than | `>` | `data.experience > 2` |
| Less than or equal to | `<=` | `data.experience <= 2` |
| Greater than or equal to | `>=` | `data.experience >= 2` |
| Search multiple required properties \(logical operator\) | `AND` | `data.last_name = "Canera" AND data.experience > 2` |
| Search for any of multiple properties \(logical operator\) | `OR` | `data.experience <= 2 OR data.experience >= 5` |
| Group multiple logical operators | n/a | `(data.job_title = "product manager" OR data.job_title = "project manager") AND data.experience > 5` |
| Pattern matching | `LIKE` | See [`LIKE` Operator for Wildcard Pattern Matching](syntax-to-search-processmaker-data.md#like-operator-for-wildcard-pattern-matching). |

### `LIKE` Operator for Wildcard Pattern Matching

Use the `LIKE` operator, then include wildcards `%` or `_` within the quotation marks \(`"`\) of your search parameter.

{% hint style="info" %}
The `LIKE` operator is not case sensitive. However, this operator is capitalized in this document for easier readability.
{% endhint %}

The `%` wildcard represents zero, one, or more characters. The `_` wildcard represents exactly one character.

#### Wildcard Usage Examples

* `request LIKE "P%"` finds Requests associated with all Processes that begin with `P`.
* `status LIKE "c%"` finds Requests with both Completed and Canceled statuses.
* `data.last_name LIKE "Ca%"` finds all values from Requests that begin with `Ca` in the `last_name` Request variable.
* `data.last_name LIKE "Ca___"` finds all values from Requests that begin with `Ca` and those that match three following characters in the `last_name` Request variable.
* `task LIKE "T%"` finds all Tasks that begin with `T`.

#### Find Data in JSON Arrays

Use the `LIKE` operator with the `%` wildcard to find text in a specified JSON array within Request data. Consider the following JSON array in Request data that contains two JSON objects. Each JSON object contains the first name, last name, and email address.

```text
"Personal": [
  {
    "FirstName": "Louis",
    "LastName": "Canera",
    "Email": "lcanera@mycompany.com",
  },
  {
    "FirstName": "Jane",
    "LastName": "Lowell",
    "Email": "jlowell@yourcompany.com"
  }
]
```

Use the following PMQL search query to find both persons in Request data based on the email address domain name in the `Email` key name. PMQL finds the string `company` in the key name `Email` regardless of what string precedes or follows the sought pattern because the `%` wildcard disregards all content in the JSON array preceding and following that pattern.

```text
data.Personal.Email LIKE "%company%"
```

See Example 2 for the [`completed` Task](pmql-properties-by-data-type/task-data-type-pmql-properties.md#completed-datetime-task-completed) property for another example.

## `CAST` Function to Convert Data Types

The `CAST` function is a standard SQL syntax that PMQL supports for specific data types.

{% hint style="info" %}
The `CAST` function is not case sensitive. However, this function is capitalized in this document for easier readability.
{% endhint %}

The `CAST` function converts data from one data type to another. PMQL supports the `CAST` function for the following data types:

* **Text:** If the Request data stores the Request variable in the PMQL query as an integer \(such as `2`\), convert that value to text \("2"\).
* **Number:** If the Request data stores the Request variable in the PMQL query as text \(such as "2"\), convert that value to a number \(`2`\). For example, use the `CAST` function in a PMQL query to  perform a numerical comparison to the `Experience` Request variable that stores a job candidate's experience in an industry to find job candidates with two \(2\) years of experience or greater, use the following PMQL query: `CAST(data.Experience as number) >= 2`.

## `NOW` Keyword to Perform Temporal Comparisons from Now

{% hint style="info" %}
The `NOW` keyword is not case sensitive. However, this keyword is capitalized in this document for easier readability.
{% endhint %}

The `NOW` keyword represents the current datetime. Use the `NOW` keyword in PMQL search queries to find Requests or Tasks in the following ways:

* Dynamically compare the age of a Request or Task from the current datetime based on when the sought Request or Task was created or last modified. PMQL supports the following intervals of time:

  * `second`
  * `minute`
  * `hour`
  * `day`

  Perform arithmetic operations on dates by using the following syntax:

  `date` `operator` `+` or `-number` `interval`

  where:

  * `date` represents the date
  * `operator` represents the comparative operator
  * `+` or `-` represents the addition or subtraction \(respectively\) from the `date`
  * `number` represents the number to add or subtract from the `date`
  * `interval` is the interval of time

  See [Example to Find Request Last Modified](syntax-to-search-processmaker-data.md#example-to-find-request-last-modified). See also the following property examples:

  * [`participant` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#participant-request-participant-by-processmaker-user-name) for the `Request` data type
  * [`request` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#request-request-name) for the `Request` data type
  * [`completed` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#completed-datetime-task-completed) for the `Task` data type
  * [`created` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#created-tasks-creation-datetime) for the `Task` data type
  * [`due` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#due-datetime-task-is-or-was-due) for the `Task` data type
  * [`element_id` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#element_id-task-node-identifier-from-the-process-model) for the `Task` data type
  * [`modified` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#modified-datetime-task-last-modified) for the `Task` data type
  * [`request` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#request-request-name-associated-with-the-task) for the `Task` data type
  * [`started` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#started-datetime-task-started) for the `Task` data type
  * [`status` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#status-task-status) for the `Task` data type
  * [`modified` property](pmql-properties-by-data-type/collection-data-type-pmql-properties.md#modified-datetime-record-last-modified) for the `Collection` data type

* Dynamically determine a chronological value of a Request variable from Request data as part of the PMQL search query. See [Example Using Request Data](syntax-to-search-processmaker-data.md#example-using-request-data).

### Example to Find Request Last Modified

Use the following PMQL query search query to find Requests for `ProcessName` that are not more than two \(2\) days old:

```text
(modified < NOW -2 day) AND (request = "ProcessName")
```

### Example Using Request Data

Find Requests from `ProcessName` in which its Request participants are 25 years old or younger by only having their date of birth in a Request variable called `DOB`, use the following PQML search parameter:

```text
(data.DOB > NOW -9125 day) AND (request = "ProcessName")
```

Calculate the date of birth by subtracting 9125 days from the current datetime \(365 \* 25 = 9125\).

## Related Topics



