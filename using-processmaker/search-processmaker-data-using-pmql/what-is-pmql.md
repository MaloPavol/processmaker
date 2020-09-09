---
description: Understand what ProcessMaker Query Language (PMQL) is.
---

# What is PMQL?

## Overview

ProcessMaker Query Language \(PMQL\) is a custom ProcessMaker language to search ProcessMaker data. Similar in ways to search query language \(SQL\), which is a standard language for storing, manipulating and retrieving data in databases, use PMQL to find [Requests](../requests/what-is-a-request.md), [Tasks](../task-management/what-is-a-task.md), and ProcessMaker [Collection](../../collections/what-is-a-collection.md) record information.

Use PMQL in the following ways:

* **Requests:** Perform [advanced searches to find Request summaries](../requests/search-for-a-request.md#advanced-search-for-a-request).
* **Tasks:** Perform [advanced searches through your Tasks](../task-management/search-for-a-task.md#advanced-search-for-a-task).
* **ProcessMaker Collection records:** [Search through the records](../../collections/manage-records-in-a-collection/search-for-a-record-in-a-collection.md#search-records-in-a-processmaker-collection) in a ProcessMaker Collection.
* **ProcessMaker Scripts:** Include PMQL searches in a [ProcessMaker Script](../../designing-processes/scripts/what-is-a-script.md) such that the search occurs when the Script runs.

To understand how to use PQML, understand the basic concepts how to compose a PMQL search query:

* **Syntax:** [Syntax](syntax-to-search-processmaker-data.md) specifies how to compare, combine, exclude, or group the "building blocks" of a PMQL search query. An example of a comparative operator is to compare if the last name of a Request participant is \(or is not\) "Canera".
* **Data types:** [Data types](pmql-data-types-requests-tasks-and-collections.md) specify which type of ProcessMaker data to search. There are three data types in PMQL: [`Request`](pmql-data-types-requests-tasks-and-collections.md#pmql-data-type-request), [`Task`](pmql-data-types-requests-tasks-and-collections.md#pmql-data-type-task), and [`Collection`](pmql-data-types-requests-tasks-and-collections.md#pmql-data-type-collection).
* **Properties:** [Properties](pmql-properties-by-data-type/) are the "building blocks" from which to compose PMQL queries regardless of which data type a PMQL query applies. Some PMQL properties are a Process name, Request or Task status, who started a Request \(also known as the requester\), Request participants, and dates associated with Requests, Tasks, or ProcessMaker Collection records.

## Related Topics

{% page-ref page="syntax-to-search-processmaker-data.md" %}

{% page-ref page="pmql-data-types-requests-tasks-and-collections.md" %}

{% page-ref page="pmql-properties-by-data-type/pmql-properties-for-the-request-data-type.md" %}

{% page-ref page="pmql-properties-by-data-type/task-data-type-pmql-properties.md" %}

{% page-ref page="pmql-properties-by-data-type/collection-data-type-pmql-properties.md" %}

{% page-ref page="../../json-the-foundation-of-request-data/what-is-request-data.md" %}

{% page-ref page="../../json-the-foundation-of-request-data/what-is-a-request-variable.md" %}



