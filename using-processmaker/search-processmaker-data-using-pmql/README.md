---
description: >-
  Use PMQL to search through Requests, Tasks, and Collection records in your
  ProcessMaker organization.
---

# Search ProcessMaker Data Using ProcessMaker Query Language \(PMQL\)

## Overview

ProcessMaker Query Language \(PMQL\) is a custom ProcessMaker language to search through ProcessMaker data in your organization. Similar in ways to SQL, which is a standard language for storing, manipulating and retrieving data in databases, use PMQL to find [Requests](../requests/what-is-a-request.md), [Tasks](../task-management/what-is-a-task.md), and ProcessMaker [Collection](../../collections/what-is-a-collection.md) record information. PMQL uses both [common SQL syntax](./#standard-sql-syntax-pmql-supports) as well as custom syntax parameters to find ProcessMaker data.

Use PMQL in the following ways:

* **Requests:** Perform [advanced searches to find Request summaries](../requests/search-for-a-request.md#advanced-search-for-a-request).
* **Tasks:** Perform [advanced searches through your Tasks](../task-management/search-for-a-task.md#advanced-search-for-a-task).
* **ProcessMaker Collection records:** [Search through the records](../../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection) in a ProcessMaker Collection.
* **ProcessMaker Scripts:** Include PMQL searches in a [ProcessMaker Script](../../designing-processes/scripts/what-is-a-script.md) such that the search occurs when the Script runs.

PMQL is customized with particular syntax parameters to find ProcessMaker data unique to each of these ProcessMaker data. See the following sections regarding how to use PMQL:

* [PMQL in Request searches](./#pmql-syntax-for-requests)
* [PMQL in Task searches](./#pmql-syntax-for-tasks)
* [PMQL in ProcessMaker Collection searches](./#pmql-syntax-for-processmaker-collections)
* [Standard SQL Syntax that PMQL supports](./#standard-sql-syntax-pmql-supports)

## PMQL Syntax for Requests

Use [standard SQL syntax](./#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to perform [advanced Request searches](../requests/search-for-a-request.md#advanced-search-for-a-request).

{% hint style="warning" %}
PMQL queries are case sensitive. For example, if querying for a string, PMQL returns results only if the case exactly matches your query. Bypass case-sensitivity evaluation by using the `lower(RequestVariable)` syntax where `RequestVariable` is the Request variable name. Example: `lower(data.job_title) LIKE "prod%" OR lower(data.job_title) LIKE "proj%"`
{% endhint %}

### Processes Associated with the Request

Use the following syntax as a guide to include one Process in your search criteria:

`(request = "exact Process name including spaces")`

Use the following syntax as a guide to include two or more Processes in your search criteria:

`(request = "Process name 1" OR request = "Process name 2")`

### Request Information

Use the following syntax as a guide to reference Request-related information in your search criteria.

`data.RequestData`

`data.` represents that what follows derives from Request information, as is used in JSON dot notation. To derive that Request information, view the [**Data** tab in the summary for a completed Request](../requests/request-details/summary-for-completed-requests.md#editable-request-data) to view the data from a completed Request, and then use the specific key name \(represented in red-colored text\) in place of `RequestData` in this syntax. Spaces are allowed between operators. Example: `data.last_name = "Canera"`. Note that your ProcessMaker user account or group membership must have the [Requests: Edit Request Data](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) permission. Ask your ProcessMaker Administrator if you do not see the **Data** tab in completed Requests.

### ProcessMaker Magic Variables

Following the same syntax as referencing Request-related information, reference ProcessMaker [Magic Variables](../../designing-processes/reference-global-variables-in-your-processmaker-assets.md) in your search criteria. See [Magic Variable Descriptions](../../designing-processes/reference-global-variables-in-your-processmaker-assets.md#global-variable-descriptions).

### Request Status

Use the following syntax as a guide to include one Request status in your search criteria:

`(status = "In Progress")`

Use the following syntax as a guide to include two or more Request statuses in your search criteria:

`(status = "Completed" OR status = "Canceled")`

### Requesters

Use the following syntax as a guide to include one requester in your search criteria:

`(requester = "Username1")`

Use the following syntax as a guide to include two or more requesters in your search criteria:

`(requester = "Username1" OR requester = "Username2")`

### Request Participants

Use the following syntax as a guide to include one Request participant in your search criteria:

`(participant = "Username3")`

Use the following syntax as a guide to include two or more Request participants in your search criteria:

`(participant = "Username3" OR participant = "Username4")`

### Request or Task Age

PMQL interprets strings in the format `YYYY-MM-DD` as dates and can be used in comparative queries. Dates can be compared dynamically in PMQL queries based on the current time by using the `NOW` keyword.

Use `updated_at < NOW` to represent how old the sought after Request or Task is, then use `-` followed by a number to specify that time. PMQL supports the following intervals of time: `second`, `minute`, `hour` and `day`.

Furthermore, perform arithmetic operations on dates by using the following syntax:

`date` `operator` `+` or `-number` `interval`

where:

* `date` represents the date
* `operator` represents the comparative operator
* `+` or `-` represents the addition or subtraction \(respectively\) from the `date`
* `number` represents the number to add or subtract from the `date`
* `interval` is the interval of time

#### Request and Task Age Usage Examples

Use the following PMQL query to find Requests or Tasks that are up to two \(2\) days old:

`updated_at < NOW -2 day`

Use the `NOW` keyword in the following PMQL query to find Requests or Tasks that contain data for persons that are presently 25 years old or younger as stored in a Request variable called `DOB` that contains the date of birth by subtracting 9125 days \(365 \* 25 = 9125\):

`dob > NOW -9125 day`

## PMQL Syntax for Tasks

Use [standard SQL syntax](./#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to perform [advanced Task searches](../task-management/search-for-a-task.md#advanced-search-for-a-task).

{% hint style="warning" %}
PMQL queries are case sensitive. For example, if querying for a string, PMQL returns results only if the case exactly matches your query. Bypass case-sensitivity evaluation by using the `lower(RequestVariable)` syntax where `RequestVariable` is the Request variable name. Example: `lower(data.job_title) LIKE "prod%" OR lower(data.job_title) LIKE "proj%"`
{% endhint %}

### Processes Associated with the Task's Request

See [Processes Associated with the Request](./#processes-associated-with-the-request).

### Request Information

See [Request Information](./#request-information).

### ProcessMaker Magic Variables

See [ProcessMaker Magic Variables](./#processmaker-magic-variables).

### Task Name

Use the following syntax as a guide to include one Task name in your search criteria:

`(task = "exact Task name including spaces")`

Use the following syntax as a guide to include two or more Task names in your search criteria:

`(task = "Task name 1" OR task = "Task name 2")`

### Task Status

Use the following syntax as a guide to include one Task status in your search criteria:

`(status = "In Progress")`

Use the following syntax as a guide to include two or more Task statuses in your search criteria:

`(status = "In Progress" OR status = "Completed")`

### Task Age

See [Request or Task Age](./#request-or-task-age).

### Task Due

Use the following syntax as a guide to include when a Task is due in your search criteria:

`due < NOW -2 day`

Use `due < NOW` to represent when a Task is due, then use `-` followed by an integer to specify that time. The units of time `second`, `minute`, `hour` and `day` are supported.

## PMQL Syntax for ProcessMaker Collections

{% hint style="info" %}
### ProcessMaker Package Required

To search records in a ProcessMaker Collection, the [Collections package](../../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance. The [Collections](../../collections/what-is-a-collection.md) package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.
{% endhint %}

Use [standard SQL syntax](./#standard-sql-syntax-pmql-supports) that ProcessMaker Query Language \(PMQL\) supports in conjunction with the following PMQL parameters to [search records](../../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection) in a ProcessMaker Collection.

{% hint style="warning" %}
PMQL queries are case sensitive. For example, if querying for a string, PMQL returns results only if the case exactly matches your query. Bypass case-sensitivity evaluation by using the `lower(RequestVariable)` syntax where `RequestVariable` is the Request variable name. Example: `lower(data.job_title) LIKE "prod%" OR lower(data.job_title) LIKE "proj%"`
{% endhint %}

### Record ID

Use the following syntax as a guide to include one record in your search criteria based on its ID \(as noted in the **\#** column when [viewing the Collection's records](../../collections/manage-records-in-a-collection/view-all-records-in-a-collection.md#view-all-records-in-a-collection)\):

`id = 4`

Use the following syntax to include all records in your search criteria since record IDs begin with `1`:

`id > 0`

### Record Information

Use the following syntax as a guide to reference record-related information in your search criteria.

`data.RecordData`

`data.` represents that what follows derives from record information, as is used in JSON dot notation. Record data is derived from the **Variable Name** setting values in the ProcessMaker [Screens](../../designing-processes/design-forms/what-is-a-form.md) that are used to [create, edit and view records in this Collection](../../collections/manage-collections/create-a-new-collection.md#overview). Use these **Variable Name** setting values in place of `RecordData` in this syntax. Spaces are allowed between operators. Example: `data.last_name = "Canera"`. Note that your ProcessMaker user account or group membership must have the [appropriate permissions to view and edit ProcessMaker Screens](../../collections/edit-a-collection.md#edit-a-processmaker-screen-for-a-collection) to view **Variable Name** setting values. Ask your ProcessMaker Administrator if you do not have the appropriate permissions.

### Record Age

PMQL interprets strings in the format `YYYY-MM-DD` as dates and can be used in comparative queries. Dates can be compared dynamically in PMQL queries based on the current time by using the `NOW` keyword.

Use `updated_at < NOW` to represent how old the sought after record is, then use `-` followed by a number to specify that time. PMQL supports the following intervals of time: `second`, `minute`, `hour` and `day`.

Furthermore, perform arithmetic operations on dates by using the following syntax:

`date` `operator` `+` or `-number` `interval`

where:

* `date` represents the date
* `operator` represents the comparative operator
* `+` or `-` represents the addition or subtraction \(respectively\) from the `date`
* `number` represents the number to add or subtract from the `date`
* `interval` is the interval of time

## Standard SQL Syntax PMQL Supports

ProcessMaker Query Language \(PMQL\) supports the following standard SQL syntax:

* [Operators and grouping multiple criteria](./#operators-and-grouping-multiple-criteria)
* [Pattern matching wildcard syntax Using LIKE operator](./#pattern-matching-wildcard-syntax-using-like-operator)
* [CAST function](./#casting-function)

### Operators and Grouping Multiple Criteria

PMQL supports the following operators in and between search criterion. The example for each comparative or logical operator assumes that the PMQL query searches against Request data for a Request variable \(such as `last_name`,  `experience`, and `job_title`\). See [Request Information](./#request-information) why `data.` precedes each Request variable in each example.

{% hint style="warning" %}
### PMQL Syntax Style Considerations

PMQL operators are not case-sensitive, but is in all capitalization in this information for easier readability.

Spaces are allowed between operators. Example: `data.last_name = "Canera"`.

### PMQL Query Case Sensitivity

PMQL queries are case sensitive. For example, if querying for a string, PMQL returns results only if the case exactly matches your query. Bypass case-sensitivity evaluation by using the `lower(RequestVariable)` syntax where `RequestVariable` is the Request variable name. Example: `lower(data.job_title) LIKE "prod%" OR lower(data.job_title) LIKE "proj%"`
{% endhint %}

| Operator Description | Syntax | Example |
| :--- | :--- | :--- |
| Equal to | `=` | `data.last_name = "Canera"` |
| Not equal to | `!=` | `data.last_name != "Canera"` |
| Less than | `<` | `data.experience < 2` |
| Greater than | `>` | `data.experience > 2` |
| Less than or equal to | `<=` | `data.experience <= 2` |
| Greater than or equal to | `>=` | `data.experience >= 2` |
| Search multiple required criteria \(logical operator\) | `AND` | `data.last_name = "Canera" AND data.experience > 2` |
| Search for any of multiple criteria \(logical operator\) | `OR` | `data.experience <= 2 OR data.experience >= 5` |
| Group multiple logical operators | n/a | `(data.job_title = "product manager" OR data.job_title = "project manager") AND data.experience > 5` |
| Pattern matching | `LIKE` | See [Pattern Matching Wildcard Syntax Using LIKE Operator](./#pattern-matching-wildcard-syntax-using-like-operator). |

### Pattern Matching Wildcard Syntax Using LIKE Operator

Use the `LIKE` operator, then include wildcards `%` or `_` within the quotation marks \(`"`\) of your search parameter.

{% hint style="info" %}
The `LIKE` operator is not case sensitive, but is in all capitalization in this information for easier readability.
{% endhint %}

The `%` wildcard represents zero, one, or more characters. The `_` wildcard represents exactly one character.

#### Wildcard Usage Examples

* `request LIKE "P%"` finds Requests associated with all Processes that begin with `P`.
* `status LIKE "c%"` finds Requests with both Completed and Canceled statuses.
* `data.last_name LIKE "Ca%"` finds all values from Requests that begin with `Ca` in the `last_name` Request variable.
* `data.last_name LIKE "Ca___"` finds all values from Requests that begin with `Ca` and those that match three following characters in the `last_name` Request variable.
* `task LIKE "T%"` finds all Tasks that begin with `T`.

### CAST Function

The `CAST` function is a standard SQL syntax that PMQL supports for specific data types.

{% hint style="info" %}
The `CAST` function is not case sensitive, but is in all capitalization in this information for easier readability.
{% endhint %}

The `CAST` function converts data from one data type to another. PMQL supports the `CAST` function for the following data types:

* **Text:** If the Request data stores the Request variable in the PMQL query as an integer \(such as `2`\), convert that value to text \("2"\).
* **Number:** If the Request data stores the Request variable in the PMQL query as text \(such as "2"\), convert that value to a number \(`2`\). For example, use the `CAST` function in a PMQL query to  perform a numerical comparison to the `Experience` Request variable that stores a job candidate's experience in an industry to find job candidates with two \(2\) years of experience or greater, use the following PMQL query: `CAST(Experience as number) >= 2`.

## Related Topics

{% page-ref page="../requests/search-for-a-request.md" %}

{% page-ref page="../task-management/search-for-a-task.md" %}

{% page-ref page="../../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md" %}

{% page-ref page="../../json-the-foundation-of-request-data/what-is-request-data.md" %}

{% page-ref page="../../json-the-foundation-of-request-data/what-is-a-request-variable.md" %}

