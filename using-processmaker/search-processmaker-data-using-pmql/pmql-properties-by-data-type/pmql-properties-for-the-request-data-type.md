---
description: >-
  Use these ProcessMaker Query Language (PMQL) properties for Request PMQL
  search queries.
---

# Request Data Type PMQL Properties

## Overview

The following ProcessMaker Query Language \(PMQL\) properties apply to the `Request` data type to perform PMQL search queries from any of the pages accessible from the **Requests** top menu option. Selecting any PMQL search result displays the Request summary for that result.

* [`completed` property](pmql-properties-for-the-request-data-type.md#completed-requests-completion-datetime)
* [`created` property](pmql-properties-for-the-request-data-type.md#created-requests-creation-datetime)
* [`data` object](pmql-properties-for-the-request-data-type.md#data-object-search-request-data-for-specific-request-information)
* [`id` property](pmql-properties-for-the-request-data-type.md#id-request-id-number)
* [`modified` property](pmql-properties-for-the-request-data-type.md#modified-datetime-request-was-last-modified)
* [`participant` property](pmql-properties-for-the-request-data-type.md#participant-request-participant-by-processmaker-user-name)
* [`process_id` property](pmql-properties-for-the-request-data-type.md#process_id-process-id-number-associated-with-the-request)
* [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name)
* [`requester` property](pmql-properties-for-the-request-data-type.md#requester-requesters-processmaker-user-name)
* [`started` property](pmql-properties-for-the-request-data-type.md#started-datetime-request-started)
* [`status` property](pmql-properties-for-the-request-data-type.md#status-request-status)

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

The `created` property is similar to the [`started` property](pmql-properties-for-the-request-data-type.md#started-datetime-request-started), in that when a Request starts, it is created. The `created` property applies to when the ProcessMaker API creates a Request, while the `started` property pertains to when a ProcessMaker user uses the ProcessMaker user interface to start a Request.

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

## `modified`: Datetime Request Was Last Modified

{% tabs %}
{% tab title="Description" %}
`modified` property represents when the Request was last modified. A Request modifies when its JSON object model is changed from a ProcessMaker Script, a ProcessMaker user action, an application program interface \(API\) call, or any other means.

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

**Purpose of the search:** Find Requests for the Student Enrollment Process that were modified on or after July 1, 2020 but before July 8, 2020.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to search for multiple required property values.
* This example uses the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(`"Student Enrollment Process"`\) is not case-sensitive.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Student Enrollment Process") AND (modified >= "2020-07-01 00:00:00") AND (modified < "2020-07-08 00:00:00")
```

### Example 2

**Purpose of the search:** Find modified Requests for the Student Enrollment Process for Seniors in all Engineering-related majors except Mechanical Engineering in which their grade point average \(GPA\) is or less than 2.5.

Note that PMQL search queries are case sensitive. This example uses the [`data` object](pmql-properties-for-the-request-data-type.md#data-object-search-request-data-for-specific-request-information) that represents Request data. The following Request variables store Request data that this PMQL search query references:

* **Grade:** The `Grade` Request variable stores which grade for each student is this year.
* **Major:** The `Major` Request variable stores the major for each student.
* **GPA:** The `GPA` Request variable stores the GPA for each student as a string. To do a numerical comparison, this example uses the [`CAST` function](../syntax-to-search-processmaker-data.md#cast-function-to-convert-data-types) to convert the text to a number.

```text
(request = "Student Enrollment Process") AND (data.Grade = "seniors") AND ((data.Major = "%Engineering") AND (data.Major != "Mechanical Engineering")) AND (CAST(data.GPA as number) <= 2.5)
```
{% endtab %}
{% endtabs %}

## `participant`: Request Participant by ProcessMaker User Name

{% tabs %}
{% tab title="Description" %}
`participant` property represents the ProcessMaker user name\(s\) of the person\(s\) that have participated in the sought Request. Request participants display in the **Participants** column of Request pages.

Enter the `participant` property value in quotation marks. Example: `"lcanera"`. The property value is not case-sensitive.
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find Requests that started two days ago associated with the Account Opening Process in which `lcanera` and `jlowell` have participated.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to search for multiple required property values.
* This example uses the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(`"Account Opening Process"`\) is not case-sensitive.
* This example uses the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword-to-perform-temporal-comparisons-from-now) to dynamically compare the current datetime with a specified number of chronological units. Use the Less Than operator \(`<`\) followed by the number of chronological units to search for Requests of that age. Note that the chronological unit of measurement is singular \(`day`\).
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Account Opening Process") AND (participant = "lcanera") AND (participant = "jlowell") AND (created < NOW -2 day)
```

### Example 2

**Purpose of the search:** Find all Requests for Processes with IDs 10 and 12 except those in which `bfrizzel` has participated.

Note that this example uses the [`process_id` property](pmql-properties-for-the-request-data-type.md#process_id-process-id-number-associated-with-the-request), which is the Process's ID number.

```text
(participant != "bfrizzel") AND (process_id = 10) AND (process_id = 12)
```
{% endtab %}
{% endtabs %}

## `process_id`: Process ID Number Associated with the Request

{% tabs %}
{% tab title="Description" %}
`process_ID` property represents the Process ID number associated with the sought Request\(s\).

Process IDs do not display in the **Processes** page. However, if you have [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions to edit Process models, then determine the Process ID by doing the following:

1. [View your Processes](../../../designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the Process model associated with the sought Requests. Process Modeler displays.
3. From the Web browser address bar, note the number immediately after `modeler/`. This number is the Process ID to use with the `process_id` property.
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find Requests associated with Process IDs are 3 and 7. This example uses the `OR` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to search for any of multiple properties.

```text
(process_id = 3 OR process_id = 7)
```

### Example 2

**Purpose of the search:** Find Requests that exclude those for Process ID 5. This example uses the Not Equal To operator \(`!=`\) to exclude Process ID 5.

```text
process_id != 5
```
{% endtab %}
{% endtabs %}

## `request`: Request Name

{% tabs %}
{% tab title="Description" %}
`request` property represents the name of the sought Request\(s\).

Request names display in the **Name** column of Request pages. The **Name** column displays the Process name associated with the Request.

Enter the `request` property value in quotation marks. Example: `"ProcessName"`. The property value is not case-sensitive.
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find all Requests associated with the Loan Approval Process. 

```text
request = "Loan Approval Process"
```

### Example 2

**Purpose of the search:** Find in-progress Requests associated with the Loan Approval Process and are at least three days old.

Note the following:

* This example uses the [`status` property](pmql-properties-for-the-request-data-type.md#status-request-status). The `status` property values \(such as `"in progress"`\) are not case-sensitive.
* This example uses the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword-to-perform-temporal-comparisons-from-now) to represent the current datetime, and then uses the Less Than [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) \(`<`\) to determine the datetime two days ago. Note that the unit of chronological measurement \(`day`\) is singular.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Loan Approval Process") AND (status = "in progress") AND (created < N
```
{% endtab %}
{% endtabs %}

## `requester`: Requester's ProcessMaker User Name

{% tabs %}
{% tab title="Description" %}
`requester` property represents the ProcessMaker user name of the person who started the sought Request \(called the requester\).

Enter the `requester` property value in quotation marks. Example: `"lcanera"`. The property value is not case-sensitive.
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find all Requests started by either `jlowell` or `sparkles`. This example uses the `OR` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to search for any of multiple properties.

```text
(requester = "jlowell") OR (requester = "sparkles")
```

### Example 2

**Purpose of the search:** Find canceled Requests started by either `jlowell` or `sparkles` on or after July 1, 2020 associated with Processes that contain "Course" followed by any five characters in its name.

Note the following:

* This example uses multiple operators: `AND` and `OR`. The `AND` operator searches for multiple required properties while the `OR` operator within one of the `AND` operators searches for any of multiple property values.
* This example uses the [`started` property](pmql-properties-for-the-request-data-type.md#started-datetime-request-started) to search for when Requests started by a particular date. Note that PMQL interprets strings in the format `YYYY-MM-DD HH:MM:SS` as dates and can be used in comparative queries if that string is in quotation marks \(`"2020-01-01 00:00:00"`\).
* This example uses the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(`"Course_____"`\) is not case-sensitive.
* This example uses the [`LIKE` operator](../syntax-to-search-processmaker-data.md#like-operator-for-wildcard-pattern-matching): functioning as a wildcard, each underscore character \(`_`\) represents one wildcard character up to the number of underscores in the string that is in quotation marks.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
((requester = "jlowell") OR (requester = "sparkles")) AND (status = "canceled") AND (started >= "2020-01-01 00:00:00") AND (request LIKE "Course_____")
```
{% endtab %}
{% endtabs %}

## `started`: Datetime Request Started

{% tabs %}
{% tab title="Description" %}
`started` property represents when the Request starts.

The `started` property is similar to the [`created` property](pmql-properties-for-the-request-data-type.md#created-requests-creation-datetime), in that when a Request starts, it is created. The `created` property applies to when the ProcessMaker API creates a Request, while the `started` property pertains to when a ProcessMaker user uses the ProcessMaker user interface to start a Request.

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

**Purpose of the search:** Find Requests for the Travel Request Process that started on or after January 1, 2020, but before March 1, 2020.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to search for multiple required property values.
* This example uses the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(`"Travel Request Process"`\) is not case-sensitive.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Travel Request Process") AND (started >= "2020-01-01 00:00:00") AND (started < "2020-03-01 00:00:00")
```

### Example 2

**Purpose of the search:** Find Requests for the Travel Request Process that started after March 1, 2020, in which their expected travel cost is at least $1,500, the departure date is later than March 7, 2020, and the return date is later than March 14, 2020. This example uses the [`data` object](pmql-properties-for-the-request-data-type.md#data-object-search-request-data-for-specific-request-information) that represents Request data.

Note the following:

* **TotalCost:** The `TotalCost` Request variable stores the calculated total cost of the travel request.
* **Departure:** The `Departure` Request variable stores the requested departure date.
* **Return:** The `Return` Request variable stores the requested return date from travel.

```text
(request = "Travel Request Process") AND (started >= "2020-03-01 00:00:00") AND (data.TotalCost > 1500) AND (data.Departure > "2020-03-01 00:00:00") AND (data.Return > "2020-03-14 00:00:00")
```
{% endtab %}
{% endtabs %}

## `status`: Request Status

{% tabs %}
{% tab title="Description" %}
`status` property represents the status\(es\) for the sought Request\(s\).

Enter the `status` property value in quotation marks. Example: `"in progress"`. Values for the status property are not case-sensitive.

Use the following values for the `status` property:

* **In Progress:** The sought Request is in-progress.
* **Completed:** The sought Request is completed. Using the `"completed"` value is identical to using the [`completed` property](pmql-properties-for-the-request-data-type.md#completed-requests-completion-datetime).
* **Canceled:** The sought Request has been canceled.
* **Error:** The sought Request has an error.
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find completed Requests associated with the Student Enrollment Process in which the either `lcanera` or `bfrizzel` are Request participants.

Note the following:

* This example uses multiple [operators](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators): `AND` and `OR`. The `AND` operator searches for multiple required properties while the `OR` operator within one of the `AND` operators searches for any of multiple property values.
* This example uses the [`request` property](pmql-properties-for-the-request-data-type.md#request-request-name). The `request` property value \(`"Student Enrollment Process"`\) is not case-sensitive.
* This example uses the [`participant` property](pmql-properties-for-the-request-data-type.md#participant-request-participant-by-processmaker-user-name). The `participant` property value \(such as `"lcanera"`\) is not case-sensitive.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(request = "Student Enrollment Process") AND (status = "completed") AND ((participant = "lcanera") OR (participant = "bfrizzel"))
```

### Example 2

**Purpose of the search:** Find completed Requests associated with the University Admission Process that completed at or prior to June 15, 2020.

Note that PMQL interprets strings in the format `YYYY-MM-DD HH:MM:SS` as dates and can be used in comparative queries if that string is in quotation marks \(`"2020-06-15 00:00:00"`\).

```text
(request = "University Admission Process") AND (status = "completed") AND (completed <= "2020-06-15 00:00:00")
```
{% endtab %}
{% endtabs %}

## Related Topics

{% page-ref page="../what-is-pmql.md" %}

{% page-ref page="../syntax-to-search-processmaker-data.md" %}

{% page-ref page="../pmql-data-types-requests-tasks-and-collections.md" %}

{% page-ref page="task-data-type-pmql-properties.md" %}

{% page-ref page="collection-data-type-pmql-properties.md" %}

{% page-ref page="../../../json-the-foundation-of-request-data/what-is-request-data.md" %}

{% page-ref page="../../../json-the-foundation-of-request-data/what-is-a-request-variable.md" %}

