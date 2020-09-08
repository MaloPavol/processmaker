---
description: >-
  Use these ProcessMaker Query Language (PMQL) properties for Request PMQL
  search queries.
---

# Request Data Type PMQL Properties

## Overview

The following ProcessMaker Query Language \(PMQL\) properties apply to the `Request` data type to perform PMQL search queries from any of the pages accessible from the **Requests** top menu option. Selecting any PMQL search result displays the Request summary for that result.

* 
## `completed`: Request's Completion Datetime

{% tabs %}
{% tab title="Description" %}
`completed` property represents when the Request completes.

#### Datetime Format

Enter the datetime in the PMQL search query within quotation marks in the following format: `YYYY-MM-DD HH:MM:SS` using 24-hour time. Example: `"2020-07-01 14:25:15"`.

#### `NOW` Keyword

Use the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword) to dynamically compare the current datetime with a specified number of chronological units. Use the Less Than [operator](../syntax-to-search-processmaker-data.md#operators-and-grouping-multiple-criteria) \(`<`\) followed by the number of chronological units to search for Requests of that age. Note that the interval unit of time is singular. PMQL supports the following units of time:

* second
* minute
* hour
* day

{% hint style="info" %}
See Example 2 how this property can apply to Service Level Agreement \(SLA\) contract compliance.
{% endhint %}
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find completed Requests for the Purchase Request Process between February 3, 2020, and February 10, 2020.

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to search for multiple required property values.
* This example uses the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(`"Purchase Request Process"`\) is not case-sensitive.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Purchase Request Process") AND (completed > "2020-02-03 00:00:00") AND (completed < "2020-02-10 00:00:00")
```

### Example 2

**Purpose of the search:** Find completed Requests for the "SLA for Purchase Request Process" that started on or after March 1, 2020, but did not complete on or prior to March 4, 2020, for purchase orders submitted through the New York or Chicago branches that are at least $10 million.

This example uses the [`data` object](pmql-properties-for-the-request-data-type.md#data-object-search-request-data-for-specific-request-information) that represents Request data. The following Request variables store Request data that this PMQL search query references:

* **Branch:** The `Branch` Request variable stores to which company branch office a purchase request was submitted. Different branch offices might have different Service Level Agreement \(SLA\) contract requirements for which they must comply. For example, the New York and Chicago offices must complete a purchase request within three \(3\) days; the Charlotte office must complete requests within five \(5\) days.
* **TotalCost:** The `TotalCost` Request variable stores the total amount for the purchase request.

This example uses the `OR` operator to search for any of multiple properties within an `AND` operator to find those Requests associated with either the New York or Chicago branches.

```text
(request = "SLA for Purchase Request Process") AND (started >= "2020-03-01 00:00:00") AND (completed >= "2020-03-04 00:00:00") AND ((data.Branch = "New York") OR (data.Branch = "Chicago")) AND (data.TotalCost >= 10,000,000,000)
```

{% hint style="info" %}
### Service Level Agreement \(SLA\) Use Case

Use a PMQL search query similar to this example to monitor which Requests completed past the sanctioned time period a SLA contract allows. In this example, if a Request completes three \(3\) days or later from when it starts for high-profile purchase requests and/or for flagship offices, then a company executive can apologize to the client for the late service delivery.
{% endhint %}
{% endtab %}
{% endtabs %}

## `created`: Request's Creation Datetime

{% tabs %}
{% tab title="Description" %}
`created` property represents when the Request was created.

The `created` property is similar to the [`started` property](), in that when a Request starts, it is created. The `created` property applies to when the ProcessMaker API creates a Request, while the `started` property pertains to when a ProcessMaker user uses the ProcessMaker user interface to start a Request.

#### Datetime Format

Enter the datetime in the PMQL search query within quotation marks in the following format: `YYYY-MM-DD HH:MM:SS` using 24-hour time. Example: `"2020-07-01 14:25:15"`.

#### `NOW` Keyword

Use the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword) to dynamically compare the current datetime with a specified number of chronological units. Use the Less Than [operator](../syntax-to-search-processmaker-data.md#operators-and-grouping-multiple-criteria) \(`<`\) followed by the number of chronological units to search for Requests of that age. Note that the interval unit of time is singular. PMQL supports the following units of time:

* second
* minute
* hour
* day
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find Requests for the Employee Onboarding Process that were created on or after July 1, 2020.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to search for multiple required property values.
* This example uses the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(`"Employee Onboarding Process"`\) is not case-sensitive.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Employee Onboarding Process") AND (created >= "2020-07-01 00:00:00")
```

### Example 2

**Purpose of the search:** Find created Requests for the Student Enrollment Process that have been canceled or encountered an error.

Note the following:

* This example uses multiple operators: `AND` and `OR`. The `AND` operator searches for multiple required properties while the `OR` operator within one of the `AND` operators searches for any of multiple property values.
* This example uses the [`status` property](pmql-properties-for-the-request-data-type.md#status-request-status) that uses the `canceled` and `error` values.

```text
(request = "Student Enrollment Process") AND ((status = "canceled") OR (status = "error"))
```
{% endtab %}
{% endtabs %}

## `data` object: Search Request Data for Specific Request Information

{% tabs %}
{% tab title="Description" %}
Use the `data` JSON object to search for Request data associated with the sought Request\(s\). The `data` JSON object represents Request data: each Request's JSON data model contains the accumulation of all JSON objects and arrays for that Request. The `data` JSON object also contains the record data for a ProcessMaker Collection. The key names for each JSON object or array derive from the **Variable Name** setting values in the ProcessMaker Screens used for Tasks in each Request or any data injected into that Request's JSON data model by ProcessMaker Scripts run via Script Task elements or calls to the ProcessMaker RESTful Application Program Interface \(API\).

Using the `data` JSON object in PQML search queries helps answer the question "Which Request\(s\) have specific information in them that I seek?" Use [operators](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to compare the value for a particular ProcessMaker Screen control to find Requests that only contain the value\(s\) you seek. For example:

* Search for Requests that apply to a specific customer in a Loan Request Process.
* Search for Requests in a Purchase Request Process in which a purchase request amount is greater than $500 but less than $10,000.
* Search for which registered conference attendees that were required to enter their job title are similar to "Product Manager," such as "Project Manager."

To determine what the **Variable Name** setting is for a control that stores Request information you seek, do one of the following:

* View the ProcessMaker Screen for the Task in which Request participants enter the information you seek, and then make note of the pertinent control's **Variable Name** setting. Note that your ProcessMaker user account or group membership must have the **Screens: View Screens** permission.
* View the [**Data** tab in the summary for a completed Request](../../requests/request-details/summary-for-completed-requests.md#editable-request-data) to view the data from a completed Request, and then use the specific key name \(represented in red-colored text\) to search Request information from that control. Spaces are allowed between operators. Example: `data.last_name = "Canera"`. Note that your ProcessMaker user account or group membership must have the [Requests: Edit Request Data](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) permission. Ask your ProcessMaker Administrator if you do not see the **Data** tab in completed Requests.

The `data` JSON object precedes the **Variable Name** setting value, as noted above. Use JSON dot notation to reference sub-properties in the referenced ProcessMaker Screen control if necessary. 
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find Requests that the business customer named Acme Products submitted in a Loan Request Process.

When submitting a business loan request, the business must enter the business's name into a Line Input control of which its **Variable Name** setting is `BusinessName`.

Note the following:

* The examples for the `data` object use the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require all properties in the PMQL search query to be required.
* These examples also use the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(such as`"Loan Request Process"`\) is not case-sensitive.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Loan Request Process") AND (data.BusinessName = "Acme Products")
```

### Example 2

**Purpose of the search:** Find Requests associated with the Purchase Request Process in which the total purchase request cost amount is greater than $500 but less than $10,000.

A [Line Input](../../../designing-processes/design-forms/screens-builder/control-descriptions/line-input-control-settings.md) control of which its **Variable Name** setting is `TotalCost` stores the total cost amount of the purchase request. This example uses two AND operators, one which determines the cost range.

```text
(request = "Purchase Request Process") AND ((data.TotalCost > 500) AND (data.TotalCost < 10000))
```
{% endtab %}
{% endtabs %}

## `id`: Request ID Number

{% tabs %}
{% tab title="Description" %}
`id` property represents the Request ID number associated with the sought Request's Process as displayed in the **\#** column of Request pages.

This `id` property only applies to Request-related PMQL search queries, and is distinct from the [`id` property for the `Task` data type](task-data-type-pmql-properties.md#id-task-id-number) or for the [`id` property for the `Collection` data type](collection-data-type-pmql-properties.md#id-collection-record-id-number).
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find Requests that are newer than Request ID 5.

```text
id > 5
```

### Example 2

**Purpose of the search:** Find Requests newer than Request ID 5 but older or the same as Request ID 10.

This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.

```text
(id > 5) AND (id <= 10)
```
{% endtab %}
{% endtabs %}



## `request`: Request Name



## `status`: Request Status



## Related Topics



