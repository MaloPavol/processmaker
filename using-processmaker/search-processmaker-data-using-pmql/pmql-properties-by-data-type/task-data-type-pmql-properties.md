---
description: >-
  Use these ProcessMaker Query Language (PMQL) properties for Task PMQL search
  queries.
---

# Task Data Type PMQL Properties

## Overview

The following ProcessMaker Query Language \(PMQL\) properties apply to the `Task` data type to perform PMQL search queries from any of the pages accessible from the **Tasks** top menu option. Selecting any PMQL search result displays the Task summary for that result.

* 
## `completed`: Datetime Task Completed

{% tabs %}
{% tab title="Description" %}
`completed` property represents when the Task completes. The `completed` property applies to Form Task, Manual Task, and/or Script Task elements from the Request that created the sought Task\(s\).

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

**Purpose of the search:** Find completed Tasks named Student Registration in the Student Enrollment Process that completed after they were due three days ago.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* This example uses the [`task` property](task-data-type-pmql-properties.md#task-task-name). The `task` property value \(`"Student Registration"`\) is not case-sensitive.
* This example uses the [`request` property](task-data-type-pmql-properties.md#request-request-name-associated-with-the-task). The `request` property value \(`"Student Enrollment Process"`\) is not case-sensitive.
* This example uses the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword-to-perform-temporal-comparisons-from-now) to represent the current datetime, and then uses the Less Than operator \(`<`\) to determine the datetime four \(4\) days ago for completed Tasks that completed later than when they were due three \(3\) days ago. Note that the unit of chronological measurements \(`day`\) is singular.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(task = "Student Registration") AND (request = "Student Enrollment Process") AND (completed < NOW -4 day)
```

### Example 2

**Purpose of the search:** Find completed Tasks named Submit Employment Application in the Candidate Review Process in which employment candidates had programming experience in at least JavaScript and Python and had "Manager" in a job title.

This example uses the [`LIKE` operator](../syntax-to-search-processmaker-data.md#like-operator-for-wildcard-pattern-matching) to find text in a specified JSON array within Request data. For example, PMQL finds the string `JavaScript` in the key name `CodingLanguages` regardless of what string precedes or follows the sought pattern because the `%` wildcard before and after the sought pattern disregards all content in the JSON array preceding and following that pattern, respectively.

This example uses the [`data` object](task-data-type-pmql-properties.md#data-object-search-request-data-for-specific-request-information) that represents Request data. The following Request variables store Request data that this PMQL search query references:

* **CodingLanguages:** The `CodingLanguages` Request variable stores one or more selections from a [Select List](../../../designing-processes/design-forms/screens-builder/control-descriptions/select-list-control-settings.md) control of programming languages in which the employment candidate has experience. The Request data stores the Select List control selection\(s\) in a JSON array that contains both the value and content for each option in the Select List control.
* **JobTitle:** The `JobTitle` Request variable stores the job title for each position the employment candidate held. A [Loop](../../../designing-processes/design-forms/screens-builder/control-descriptions/loop-control-settings.md) control called `Jobs` contains a set of controls to enter information about each position the candidate held, among them being a [Line Input](../../../designing-processes/design-forms/screens-builder/control-descriptions/line-input-control-settings.md) control called `JobTitle`.

```text
(status = "Completed") AND (task = "Submit Employment Application") AND (request = "Candidate Review Process") AND ((data.CodingLanguages LIKE "%JavaScript%") AND (data.CodingLanguages LIKE "%Python%")) AND (data.Jobs.JobTitle LIKE "%Manager%")
```
{% endtab %}
{% endtabs %}

## `created`: Task's Creation Datetime

{% tabs %}
{% tab title="Description" %}
`created` property represents when the Request creates the Task. The `created` property applies to Form Task, Manual Task, and/or Script Task elements from the Request that created the sought Task\(s\).

#### Datetime Format

Enter the datetime in the PMQL search query within quotation marks in the following format: `YYYY-MM-DD HH:MM:SS` using 24-hour time. Example: `"2020-07-01 14:25:15"`.

#### `NOW` Keyword

Use the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword) to dynamically compare the current datetime with a specified number of chronological units. Use the Less Than [operator](../syntax-to-search-processmaker-data.md#operators-and-grouping-multiple-criteria) \(`<`\) followed by the number of chronological units to search for Requests of that age. Note that the interval unit of time is singular. PMQL supports the following units of time:

* second
* minute
* hour
* day

{% hint style="info" %}
See Examples 1 and 2 how this property can apply to Service Level Agreement \(SLA\) contract compliance.
{% endhint %}
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find created Tasks from two hours ago named Package Purchased Items in the Fulfill Purchase Delivery Process that started less than 30 minutes ago.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* This example uses the [`task` property](task-data-type-pmql-properties.md#task-task-name). The `task` property value \(`"Package Purchased Items"`\) is not case-sensitive.
* This example uses the [`request` property](task-data-type-pmql-properties.md#request-request-name-associated-with-the-task). The `request` property value \(`"Fulfill Purchase Delivery Process"`\) is not case-sensitive.
* This example uses the [`started` property](task-data-type-pmql-properties.md#started-datetime-task-started) to find those Tasks that started 30 minutes ago.
* This example uses the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword-to-perform-temporal-comparisons-from-now) to represent the current datetime, and then uses the Less Than operator \(`<`\) to determine the datetime two \(2\) hours ago and 30 minutes ago that the applicable Task\(s\) was created and started, respectively. Note that the unit of chronological measurements \(`hour` and `minute`\) are singular.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(created < NOW -2 hour) AND (started < NOW -30 minute) AND (task = "Package Purchased Items") AND (request = "Fulfill Purchase Delivery Process")
```

{% hint style="info" %}
### Service Level Agreement \(SLA\) Use Case

Use a PMQL search query similar to this example to monitor how much time passes from when a Task was created and that Task starts. A PMQL query similar to this example can determine which Tasks are being started later than the sanctioned time period a Service Level Agreement \(SLA\) contract allows from when that Task was created. For example, if a SLA contract states that a Task applicable to the contract must start within 1.5 hours from when its Request creates it, use a PMQL search query similar to this example to find only those Tasks that started less than 30 minutes ago, therefore longer than the 1.5 hours allowed by the SLA contract.
{% endhint %}

### Example 2

**Purpose of the search:** Find created Tasks associated with the **Node Identifier** setting value `node_6` in Requests associated with Process ID 12 from two hours ago that have completed less than 30 minutes ago.

Note the following:

* This example uses the [`element_id` property](task-data-type-pmql-properties.md#element_id-task-node-identifier-from-the-process-model) to reference the **Node Identifier** setting value \(`node_6`\) from the Process model for the sought Task's element.
* This example uses the [`process_id` property](task-data-type-pmql-properties.md#process_id-process-id-number-associated-with-the-task) to reference the Process ID number \(`12`\) associated with the sought Task\(s\).
* This example uses the [`completed` property](task-data-type-pmql-properties.md#completed-datetime-task-completed). The `completed` property value compares the datetime that the Task completed.

```text
(created < NOW -2 hour) AND (completed < NOW -30 minute) AND (element_id = "node_6") AND (process_id = 12)
```

{% hint style="info" %}
### Service Level Agreement \(SLA\) Use Case

Use a PMQL search query similar to this example to monitor how much time passes from when a Task was created and that Task completes. A PMQL query similar to this example can determine which Tasks are being completed later than the sanctioned time period a Service Level Agreement \(SLA\) contract allows from when that Task was created. Unlike Example 1 that identifies the Task to monitor by its name, this example identifies the Task by its **Node Identifier** setting value in a specified Process model. Otherwise, this example serves a similar purpose to monitor SLA contract compliance as does Example 1.
{% endhint %}
{% endtab %}
{% endtabs %}

## `data` object: Search Request Data for Specific Request Information

{% tabs %}
{% tab title="Description" %}
Use the `data` JSON object to search for Request data associated with the sought Task\(s\). The `data` JSON object represents Request data: each Request's JSON data model contains the accumulation of all JSON objects and arrays for that Request. The `data` JSON object also contains the record data for a ProcessMaker Collection. The key names for each JSON object or array derive from the **Variable Name** setting values in the ProcessMaker Screens used for Tasks in each Request or any data injected into that Request's JSON data model by ProcessMaker Scripts run via Script Task elements or calls to the ProcessMaker RESTful Application Program Interface \(API\).

Using the `data` JSON object in PQML search queries helps answer the question "Which Request\(s\) have specific information in them for Tasks that I seek?" Use [operators](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to compare the value for a particular ProcessMaker Screen control to find Requests that only contain the value\(s\) you seek. For example:

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

**Purpose of the search:** Find in-progress Tasks named Approve Semester Courses in the Student Enrollment Process in which Business majors have enrolled in at least 18 credits this semester.

When submitting which courses to enroll that semester, each student must enter the following information into a ProcessMaker Screen that becomes Request data when that Screen is submitted:

* A [Select List](../../../designing-processes/design-forms/screens-builder/control-descriptions/select-list-control-settings.md) control of which its **Variable Name** setting is `Major` stores the JSON object value for the option that each student selects as a major.
* A [Line Input](../../../designing-processes/design-forms/screens-builder/control-descriptions/line-input-control-settings.md) control of which its **Variable Name** setting is `TotalCredits` stores as an integer the sum of all credits that the student selected for enrollment.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* This example uses the [`status` property](task-data-type-pmql-properties.md#status-task-status). The `status` property values \(such as `"in progress"`\) are not case-sensitive.
* This example uses the [`task` property](task-data-type-pmql-properties.md#task-task-name). The `task` property value \(`"Approve Semester Courses"`\) is not case-sensitive.
* This example uses the [`request` property](task-data-type-pmql-properties.md#request-request-name-associated-with-the-task). The `request` property value \(`"Student Enrollment Process"`\) is not case-sensitive.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(status = "in progress") AND (task = "Approve Semester Courses") AND (request = "Student Enrollment Process") AND (data.Major = "Business") AND (data.TotalCredits >= 18)
```

### Example 2

**Purpose of the search:** Find completed Tasks named Submit Leave Request in the Leave Request Process in which the reason those employees requested leave was illness between the dates March 15, 2020, and April 30, 2020.

When submitting a leave request, each employee must select from one of several options in a ~~Checkbox~~ control to indicate the reason for the leave request. The Checkbox control has a **Variable Name** setting of `LeaveType`; the option that indicates the reason is for medical leave has an option value of `Medical`. Therefore, to find those completed Tasks in which the reason for leave is illness, use the following in the PMQL search query: `data.LeaveType = "Medical"`. The PMQL search query is case sensitive.

Note the following:

* This example uses the [`completed` property](task-data-type-pmql-properties.md#completed-datetime-task-completed). Each use of the `completed` property compares the datetime that the Task completed.
* PMQL interprets strings in the format `YYYY-MM-DD HH:MM:SS` as dates and can be used in comparative queries if that string is in quotation marks \(`"2020-03-15 00:00:00"`\).

```text
(status = "completed") AND (task = "Submit Leave Request") AND (request = "Leave Request") AND (data.LeaveType = "Medical") AND (completed >= "2020-03-15 00:00:00") AND (completed <= "2020-04-30 00:00:00")
```
{% endtab %}
{% endtabs %}

## `due`: Datetime Task Is or Was Due

{% tabs %}
{% tab title="Description" %}
`due` property represents when the Task is or was due. The `due` property applies to Form Task, Manual Task, and/or Script Task elements from the Request that created the sought Task\(s\).

#### Datetime Format

Enter the datetime in the PMQL search query within quotation marks in the following format: `YYYY-MM-DD HH:MM:SS` using 24-hour time. Example: `"2020-07-01 14:25:15"`.

#### `NOW` Keyword

Use the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword) to dynamically compare the current datetime with a specified number of chronological units. Use the Less Than [operator](../syntax-to-search-processmaker-data.md#operators-and-grouping-multiple-criteria) \(`<`\) followed by the number of chronological units to search for Requests of that age. Note that the interval unit of time is singular. PMQL supports the following units of time:

* second
* minute
* hour

{% hint style="info" %}
See Example 2 how this property can apply to Service Level Agreement \(SLA\) contract compliance.
{% endhint %}
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find Tasks named Loan Review that are due in two days for the Loan Approval Process.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* This example uses the [`task` property](task-data-type-pmql-properties.md#task-task-name). The `task` property value \(`"Loan Review"`\) is not case-sensitive.
* This example uses the [`request` property](task-data-type-pmql-properties.md#request-request-name-associated-with-the-task). The `request` property value \(`"Loan Approval Process"`\) is not case-sensitive.
* This example uses the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword-to-perform-temporal-comparisons-from-now) to represent the current datetime, and then uses the Greater Than operator \(`>`\) to determine the datetime two \(2\) days from now for due Tasks. Note that the unit of chronological measurements \(`day`\) is singular.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(due > NOW +2 day) AND (task = "Loan Review") AND (request = "Loan Approval Process")
```

### Example 2

**Purpose of the search:** Find Tasks that completed 20 minutes ago that were past due for Requests associated with process ID 25.

Note the following:

* This example uses the [`completed` property](task-data-type-pmql-properties.md#completed-datetime-task-completed). The `completed` property compares the datetime that the Task completed. Since the PMQL search query finds completed Tasks past due, the `due` property uses the Greater Than operator \(`>`\) to find Tasks that were due later than 20 minutes ago. 
* This example uses the [`process_id` property](task-data-type-pmql-properties.md#process_id-process-id-number-associated-with-the-task) with a value of `25` to find Requests associated with that Process.

```text
(completed = NOW -20 minute) AND (due > NOW -20 minute) AND (process_id = 25)
```

{% hint style="info" %}
### Service Level Agreement \(SLA\) Use Case

Use a PMQL search query similar to this example to monitor which Tasks were due previously to when they completed, thereby determining which completed Tasks were not compliant with a Service Level Agreement \(SLA\) contract.
{% endhint %}
{% endtab %}
{% endtabs %}

## `element_id`: Task Node Identifier from the Process Model



## `id`: Task ID Number



## `process_id`: Process ID Number Associated with the Task



## `request`: Request Name Associated with the Task



## `started`: Datetime Task Started



## `status`: Task Status



## `task`: Task Name



## Related Topics





