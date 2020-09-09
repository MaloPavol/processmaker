---
description: >-
  Use these ProcessMaker Query Language (PMQL) properties for ProcessMaker
  Collection record PMQL search queries.
---

# Collection Data Type PMQL Properties

## Overview

The following ProcessMaker Query Language \(PMQL\) properties apply to the `Collection` data type to perform PMQL search queries from any of the pages accessible from the **Collections** sidebar icon in the **Admin** top menu option. PMQL search queries apply to records within the displayed ProcessMaker Collection. Selecting any PMQL search result displays the ProcessMaker Collection record for that result.

* [`created` property](collection-data-type-pmql-properties.md#created-records-creation-date)
* [`data` object](collection-data-type-pmql-properties.md#data-object-search-collection-data-for-specific-record-information)
* [`id` property](collection-data-type-pmql-properties.md#id-collection-record-id-number)
* [`modified` property](collection-data-type-pmql-properties.md#modified-datetime-record-last-modified)

## `created`: Record's Creation Date

{% tabs %}
{% tab title="Description" %}
`created` property represents when the record was created from the currently displayed ProcessMaker Collection.

#### Datetime Format

Enter the datetime in the PMQL search query within quotation marks in the following format: `YYYY-MM-DD HH:MM:SS` using 24-hour time. Example: `"2020-07-01 14:25:15"`.

#### `NOW` Keyword

Use the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword) to dynamically compare the current datetime with a specified number of chronological units. Use the Less Than [operator](../syntax-to-search-processmaker-data.md#operators-and-grouping-multiple-criteria) \(`<`\) followed by the number of chronological units to search for Requests of that age. Note that the interval unit of time is singular. PMQL supports the following units of time:

* second
* minute
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find ProcessMaker Collection records created on or after March 14, 2020.

```text
created >= "2020-03-14 00:00:00"
```

### Example 2

**Purpose of the search:** Find ProcessMaker Collection records created one day ago for newly registered Freshmen students in which their academic interests include engineering-related majors except software engineering.

This example uses the [`data` object](collection-data-type-pmql-properties.md#data-object-search-collection-data-for-specific-record-information). The `data` object stores the accumulated data from ProcessMaker Screen controls used to create and edit records in its ProcessMaker Collection by referencing the controls' **Variable Name** setting values.

A [Select List](../../../designing-processes/design-forms/screens-builder/control-descriptions/select-list-control-settings.md) control in which its **Variable Name** setting value is `AcademicInterests` stores multiple options in a JSON object that each Freshman student selected as academic interests.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* This example uses `LIKE` operator with the `%` wildcard to search for any Task name that includes the characters `engineering` as an academic interest, but excludes those records with `software` preceding any academic interest.
* PMQL search queries are case sensitive. This example uses the `lower` function to ensure all options from `AcademicInterests` are evaluated regardless of their case sensitivity.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(created < NOW -1 day) AND (lower(data.AcademicInterest) LIKE "%engineering%") AND (lower(data.AcademicInterest) != "software engineering")
```
{% endtab %}
{% endtabs %}

## `data` object: Search Collection Data for Specific Record Information

{% tabs %}
{% tab title="Description" %}
Use the `data` JSON object to search for sought ProcessMaker Collection records. The `data` object stores the accumulated data from ProcessMaker Screen controls used to create and edit records in its ProcessMaker Collection by referencing the controls' **Variable Name** setting values.

 All JSON objects and arrays within the JSON object named `data` is the accumulation of data for each ProcessMaker Collection. Each Request also stores its Request data in a `data` JSON object. The key names for each JSON object or array derive from the **Variable Name** setting values in the ProcessMaker Screens used for that ProcessMaker Collection or any data injected into that Collection's JSON data model by ProcessMaker Scripts or calls to the ProcessMaker RESTful Application Program Interface \(API\).

Using the `data` JSON object in PQML search queries helps answer the question "Which ProcessMaker Collection records have specific information in them that I seek?" Use [operators](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to compare the value for a particular ProcessMaker Screen control to find records that only contain the value\(s\) you seek.

To determine what the **Variable Name** setting is for a control that stores ProcessMaker Collection record information you seek, view the ProcessMaker Screen that contains the control into which the sought data was entered and/or edited. ProcessMaker Collections use as many as two ProcessMaker Screens: one into which to enter data when a record in that Collection is created, and one from which record data is edited. The same ProcessMaker Screen may be used for both purposes. Note that your ProcessMaker user account or group membership must have the **Screens: View Screens** permission.

The `data` JSON object precedes the **Variable Name** setting value, as noted above. Use JSON dot notation to reference sub-properties in the referenced ProcessMaker Screen control if necessary. 
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find ProcessMaker Collection records in which Business majors have enrolled in at least 18 credits this semester.

When submitting which courses to enroll that semester, each student must enter the following information into a ProcessMaker Screen that becomes data in that ProcessMaker Collection record when that Screen is submitted:

* A [Select List](../../../designing-processes/design-forms/screens-builder/control-descriptions/select-list-control-settings.md) control of which its **Variable Name** setting is `Major` stores the JSON object value for the option that each student selects as a major.
* A [Line Input](../../../designing-processes/design-forms/screens-builder/control-descriptions/line-input-control-settings.md) control of which its **Variable Name** setting is `TotalCredits` stores as an integer the sum of all credits that the student selected for enrollment.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(data.Major = "Business") AND (data.TotalCredits >= 18)
```

### Example 2

**Purpose of the search:** Find ProcessMaker Collection records in which employment candidates had programming experience in at least JavaScript and Python and had "Manager" in a job title.

When submitting a job application, each candidate must enter the following information into a ProcessMaker Screen that becomes data in that ProcessMaker Collection record when that Screen is submitted:

* A Select List control of which its **Variable Name** setting is `CodingLanguages` stores the JSON object value of programming languages in which the employment candidate has experience.
*  A [Loop](../../../designing-processes/design-forms/screens-builder/control-descriptions/loop-control-settings.md) control contains a Line Input control that stores the job title for each position the employment candidate held. The **Variable Name** setting values for each control are **Jobs** and **JobTitle**, respectively.

```text
((data.CodingLanguages LIKE "%JavaScript%") AND (data.CodingLanguages LIKE "%Python%")) AND (data.Jobs.JobTitle LIKE "%Manager%")
```
{% endtab %}
{% endtabs %}

## `id`: Collection Record ID Number

{% tabs %}
{% tab title="Description" %}
`id` property represents the ID number for the sought record\(s\) from the currently displayed ProcessMaker Collection.

This id property only applies to Collection record-related PMQL search queries, and is distinct from the [`id` property for the `Request` data type](pmql-properties-for-the-request-data-type.md#id-request-id-number) or for the [`id` property for the `Task` data type](task-data-type-pmql-properties.md#task-task-name).
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find ProcessMaker Collection records that are newer than record ID 7.

```text
id > 7
```

### Example 2

**Purpose of the search:** Find ProcessMaker Collection records newer than Task ID 7 that were created after March 14, 2020.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* This example uses the [`created` property](collection-data-type-pmql-properties.md#created-records-creation-date) to search for which ProcessMaker Collections were created by a particular date. Note that PMQL interprets strings in the format `YYYY-MM-DD HH:MM:SS` as dates and can be used in comparative queries if that string is in quotation marks \(`"2020-03-14 00:00:00"`\).

```text
(id > 7) AND (created > "2020-03-14 00:00:00")
```
{% endtab %}
{% endtabs %}

## `modified`: Datetime Record Last Modified

{% tabs %}
{% tab title="Description" %}
`modified` property represents when the record was last modified from the currently displayed ProcessMaker Collection. A record modifies when the contents of the a record changes from any of the following:

* A record is manually changed by a ProcessMaker user that has permission to edit records in that record's ProcessMaker Collection.
* A ProcessMaker Script adds or modifies data in a record.
* A record is modified via the ProcessMaker RESTful API.

#### Datetime Format

Enter the datetime in the PMQL search query within quotation marks in the following format: `YYYY-MM-DD HH:MM:SS` using 24-hour time. Example: `"2020-07-01 14:25:15"`.

#### `NOW` Keyword

Use the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword) to dynamically compare the current datetime with a specified number of chronological units. Use the Less Than [operator](../syntax-to-search-processmaker-data.md#operators-and-grouping-multiple-criteria) \(`<`\) followed by the number of chronological units to search for Requests of that age. Note that the interval unit of time is singular. PMQL supports the following units of time:

* second
* minute
{% endtab %}

{% tab title="Examples" %}
### Example 1

**Purpose of the search:** Find ProcessMaker Collection records modified less than 30 minutes ago.

Note that this example uses the [`NOW` keyword](../syntax-to-search-processmaker-data.md#now-keyword-to-perform-temporal-comparisons-from-now) to represent the current datetime, and then uses the Less Than [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) \(`<`\) to determine the datetime 30 minutes ago that the applicable ProcessMaker Collection records were modified. Note that the unit of chronological measurement \(`minute`\) is singular.

```text
modified < NOW -30 minute
```

### Example 2

**Purpose of the search:** Find ProcessMaker Collection records modified one day ago associated with students whose graduation year is 2022 and who last met their advisor more than six months ago.

This example uses the [`data` object](collection-data-type-pmql-properties.md#data-object-search-collection-data-for-specific-record-information). The `data` object stores the accumulated data from ProcessMaker Screen controls used to create and edit records in its ProcessMaker Collection by referencing the controls' **Variable Name** setting values. The following ProcessMaker Screen controls store data that this PMQL search query references:

* **GraduationYear:** The `GraduationYear` control stores at which year a student graduates. This value is stored as a string.
* **AdvisorMeetingDate:** The `AdvisorMeetingDate` control stores at which date a student met with her or his advisor.

Note the following:

* This example uses the `AND` [operator](../syntax-to-search-processmaker-data.md#comparative-and-logical-operators) to require multiple property values for the search.
* This example uses the [`CAST` function](../syntax-to-search-processmaker-data.md#cast-function-to-convert-data-types) to convert the string to a number for comparison in the PMQL search.
* [Note when PMQL search queries are case sensitive](../syntax-to-search-processmaker-data.md#lower-function-to-disregard-case-sensitivity-in-strings-and-request-variables).

```text
(modified < NOW -1 day) AND (CAST(data.GraduationYear as number) = 2022) AND (dat
```
{% endtab %}
{% endtabs %}

## Related Topics

{% page-ref page="../what-is-pmql.md" %}

{% page-ref page="../syntax-to-search-processmaker-data.md" %}

{% page-ref page="../pmql-data-types-requests-tasks-and-collections.md" %}

{% page-ref page="pmql-properties-for-the-request-data-type.md" %}

{% page-ref page="task-data-type-pmql-properties.md" %}

