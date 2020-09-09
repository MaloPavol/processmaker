---
description: >-
  ProcessMaker Query Language (PMQL) data types indicate the type of
  ProcessMaker information to find: for Requests, Tasks, or ProcessMaker
  Collection records.
---

# PMQL Data Types: Request, Task, and Collection

## Overview

ProcessMaker Query Language \(PMQL\) uses three [data types](https://en.wikipedia.org/wiki/Data_type). A data type specifies to which ProcessMaker data the PMQL syntax applies. Syntax indicates how to interpret \(parse\) that data.

## PMQL Data Type: `Request`

When performing PMQL search queries from any of the pages accessible from the **Requests** top menu option, PMQL uses the `Request` data type to apply PMQL syntax. Selecting any PMQL search result displays the Request summary for that result.

The `Request` PMQL data type can use the following PMQL properties:

* [`completed` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#completed-requests-completion-datetime)
* [`created` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#created-requests-creation-datetime)
* [`data` object](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#data-object-search-request-data-for-specific-request-information)
* [`id` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#id-request-id-number)
* [`modified` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#modified-datetime-request-was-last-modified)
* [`participant` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#participant-request-participant-by-processmaker-user-name)
* [`process_id` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#process_id-process-id-number-associated-with-the-request)
* [`request` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#request-request-name)
* [`requester` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#requester-requesters-processmaker-user-name)
* [`started` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#started-datetime-request-started)
* [`status` property](pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md#status-request-status)

## PMQL Data Type: `Task`

When performing PMQL search queries from any of the pages accessible from the **Tasks** top menu option, PMQL uses the `Task` data type to apply PMQL syntax. Selecting any PMQL search result displays the Task summary for that result.

The `Task` PMQL data type can use the following PMQL properties:

* [`completed` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#completed-datetime-task-completed)
* [`created` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#created-tasks-creation-datetime)
* [`data` object](pmql-properties-by-data-type/task-data-type-pmql-properties.md#data-object-search-request-data-for-specific-request-information)
* [`due` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#due-datetime-task-is-or-was-due)
* [`element_id` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#element_id-task-node-identifier-from-the-process-model)
* [`id` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#id-task-id-number)
* [`modified` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#modified-datetime-task-last-modified)
* [`process_id` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#process_id-process-id-number-associated-with-the-task)
* [`request` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#request-request-name-associated-with-the-task)
* [`started` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#started-datetime-task-started)
* [`status` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#status-task-status)
* [`task` property](pmql-properties-by-data-type/task-data-type-pmql-properties.md#task-task-name)

## PMQL Data Type: `Collection`

When performing PMQL search queries from any ProcessMaker Collection accessible from the **Collections** sidebar icon in the **Admin** top menu option, PMQL uses the `Collection` data type to apply PMQL syntax. PMQL search queries apply to records within the displayed ProcessMaker Collection. Selecting any PMQL search result displays the ProcessMaker Collection record for that result.

The `Collection` PMQL data type can use the following PMQL properties:

* [`created` property](pmql-properties-by-data-type/collection-data-type-pmql-properties.md#created-records-creation-date)
* [`data` object](pmql-properties-by-data-type/collection-data-type-pmql-properties.md#data-object-search-collection-data-for-specific-record-information)
* [`id` property](pmql-properties-by-data-type/collection-data-type-pmql-properties.md#id-collection-record-id-number)
* [`modified` property](pmql-properties-by-data-type/collection-data-type-pmql-properties.md#modified-datetime-record-last-modified)

## Related Topics



