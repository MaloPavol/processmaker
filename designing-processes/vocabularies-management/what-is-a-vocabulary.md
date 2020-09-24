---
description: Understand what a Vocabulary is in ProcessMaker.
---

# What is a Vocabulary?

## Overview

Use the [Vocabularies package](../../package-development-distribution/package-a-connector/vocabularies.md) to ensure your Processes comply with specific data structures or regulatory specifications. ProcessMaker Vocabularies apply to ProcessMaker assets, including [Processes](../viewing-processes/what-is-a-process.md), [ProcessMaker Scripts](../scripts/what-is-a-script.md), and [ProcessMaker Screens](../design-forms/what-is-a-form.md).

{% hint style="info" %}
### ProcessMaker Package Required

The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

## Why Use ProcessMaker Vocabularies?

ProcessMaker uses a schema-less JSON data model from which to read, write, and store [Request data](../../json-the-foundation-of-request-data/what-is-request-data.md). Since the JSON data model is schema-less \(meaning that it does not require a specific schema or structure from which ProcessMaker assets must conform\), the JSON data model is structured from the JSON objects in ProcessMaker assets used in a Request: the **Variable Name** setting values in a [ProcessMaker Screen](../design-forms/what-is-a-form.md) or variables a [ProcessMaker Script](../scripts/what-is-a-script.md) creates. When an in-progress Request routes through the Process, Request data aggregates into the JSON data model, thereby becoming Request data.

Use ProcessMaker Vocabularies to ensure Request data complies with a specific data structure. This is often mandatory for many types of business sectors including banking and healthcare. Ensure the quality and compliance of Request data. For example, during a Loan Application process, ensure that personal information has been included in the Request to that moment in that in-progress Request.

See an example in the following video how to use a ProcessMaker Vocabulary.

* **Intended audience:** Process designers, software developers, and coding engineers
* **Viewing time:** 15 minutes; contains narration

{% embed url="https://vimeo.com/461560220" caption="Video demonstration how to use a ProcessMaker Vocabulary" %}

## What is a ProcessMaker Vocabulary?

A ProcessMaker Vocabulary is a JSON schema. The JSON schema describes the data objects, properties data types, and structure in both a machine- and human-readable format. Apply one or more ProcessMaker Vocabularies to your ProcessMaker assets including the following:

* Process models and/or specific BPMN 2.0 elements in your Process models to ensure the JSON data model in [Request data](../../json-the-foundation-of-request-data/what-is-request-data.md) complies with the data structure outlined in the Vocabulary's JSON schema.
* [ProcessMaker Screens](../design-forms/what-is-a-form.md) to ensure that designers comply with the ProcessMaker Vocabulary when they design Screens, and therefore validate that Request participants and [ProcessMaker Collection](../../processmaker-administration/processmaker-collections/what-is-a-collection.md) records also comply with the JSON schema's data structure.

Complying with the ProcessMaker Vocabulary's JSON schema ensures that you meet regulatory specifications and ensures that Request data and/or Collection records contains required information.

{% hint style="info" %}
Need to learn how to design JSON schemas? Start with [JSON Schema](https://json-schema.org/). Need to learn how to convert valid JSON to a JSON schema? Use the [JSON Schema Tool](https://jsonschema.net), though do not use JSON intended for production on this free GitHub application. 
{% endhint %}

## How Do ProcessMaker Vocabularies Work?

Each moment ProcessMaker evaluates workflow routing for an in-progress Request, ProcessMaker also evaluates the Request data's conformity to the ProcessMaker Vocabularies applied to the Process and/or a specific BPMN 2.0 element in the Process model. The Request's JSON data model must conform to the ProcessMaker Vocabulary's JSON schema.

During an in-progress Request, if ProcessMaker evaluates that the Request data no longer complies with all ProcessMaker Vocabularies to that moment, the Request status changes from In Progress to Error. The error displays in the [Request summary](../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md). ProcessMaker Vocabularies are cumulative in an in-progress Request: as the Request progresses, if Request data does not conform with any Vocabulary's JSON schema to that moment in the Request, the Request errors.

## How Would I Use ProcessMaker Vocabularies?

ProcessMaker Vocabularies can be granular, in that they evaluate compliance only for specific objects in an in-progress Request's JSON data model. As a best practice, develop granular ProcessMaker Vocabularies so that they can be re-used in multiple Processes and business sectors in your organization. Since you can add more than one ProcessMaker Vocabulary to a Process or supporting BPMN 2.0 element, add as many smaller ProcessMaker Vocabularies as necessary to target compliance. If you use ProcessMaker Vocabularies that contain large JSON schemas, they will not be as re-usable to as many Processes.

Use ProcessMaker Vocabularies throughout your organization in the following ways:

* **Set Vocabulary permissions:** Determine which ProcessMaker users and/or groups have permission to view, create, edit or delete Vocabularies. See [Vocabulary permissions](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#vocabularies).
* **Manage your ProcessMaker Vocabularies:** Manage your organization's ProcessMaker Vocabularies based on business sector, organizational department, or any way you want to maintain regulatory compliance in your ProcessMaker assets. See [Manage Your Vocabularies](manage-your-vocabularies/).
* **Configure which elements within a Process use a ProcessMaker Vocabulary:** After [creating](../environment-variable-management/manage-your-environment-variables/create-a-new-environment-variable.md#create-a-new-processmaker-environment-variable) one or more ProcessMaker Vocabularies, apply them to specific types of BPMN 2.0 elements and/or configuration within a [Process](../viewing-processes/what-is-a-process.md). See the following topics:
  * [Process configuration](../viewing-processes/view-the-list-of-processes/edit-the-name-description-category-or-status-of-a-process.md#configure-which-vocabularies-are-available-to-a-process)
  * Event elements
    * [Start Event element](../process-design/model-your-process/add-and-configure-an-event-element.md#assign-processmaker-vocabularies-that-apply-to-this-element)
    * [Intermediate Message Catch Event element](../process-design/model-your-process/add-and-configure-intermediate-message-catch-event-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
  * Task elements
    * [Task element](../process-design/model-your-process/add-and-configure-task-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
    * [Manual Task element](../process-design/model-your-process/add-and-configure-manual-task-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
    * [Script Task element](../process-design/model-your-process/add-and-configure-script-task-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
  * [Sub Process element](../process-design/model-your-process/add-and-configure-sub-process-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)

## Guidelines and Best Practices in ProcessMaker Vocabulary Design

Consider the following guidelines and best practices when designing ProcessMaker Vocabularies:

* **Upload your JSON schema or design in ProcessMaker:** You may design your JSON schema before you create your ProcessMaker Vocabulary or design it in ProcessMaker. ProcessMaker provides a graphical interface in the **Visual** tab of a ProcessMaker Vocabulary that non-developers may find easier to design a ProcessMaker Vocabulary. This may be helpful if you are not familiar with coding a JSON schema but understand the design compliance your ProcessMaker assets must meet. If you are familiar with designing JSON schemas, you may code your JSON schema in the **Code** tab. Changes made in one tab reflect in the other tab.
* **ProcessMaker Vocabularies design in ProcessMaker are named `mainSchema`:** If you design ProcessMaker Vocabularies in ProcessMaker instead of uploading one when a Vocabulary is created, the root name of the ProcessMaker Vocabulary is `mainSchema`. `mainSchema` represents the top of the JSON schema object and contains the properties of that ProcessMaker Vocabulary. If you upload your own JSON schema, its root name remains unchanged. JSON schema root names must begin with a letter, followed by any number of letters, integers \(`0` through `9`\]\), hyphens \(`-`\), underscores \(`_`\), colons \(`:`\), or periods \(`.`\).
* **Design your ProcessMaker Vocabularies modularly:** As a best practice, design your ProcessMaker Vocabularies as segmented, minimal pieces rather than large encompassing JSON schemas. Small, modular ProcessMaker Vocabularies can be re-used across multiple ProcessMaker assets for a variety of Processes and business solutions. More specifically, ProcessMaker Vocabularies can inherit their properties from other Vocabularies to build on one another, yet extend from those inherited Vocabularies.

  For example, a Purchase Request Process may require billing information as well as shipping information. These groups of information may be designed in segmented, separate [ProcessMaker Screens](../design-forms/what-is-a-form.md) modularly and then incorporated into a third ProcessMaker Screen that uses [Nested Screen](../design-forms/screens-builder/control-descriptions/nested-screen-control-settings.md) controls to incorporate these segmented Screens for easier re-use and maintenance. Likewise, each of these ProcessMaker Screens may use its own ProcessMaker Vocabulary to validate required and conforming information for each. As a different design approach for this example, the ProcessMaker Vocabulary that validates the shipping information may inherit the Vocabulary for the billing information, thereby referencing its JSON schema properties for easier maintenance; while referencing the Vocabulary for billing information, the Vocabulary for shipping information contains its own properties for validation and compliance.

* **Define properties in your ProcessMaker Vocabularies in the order as intended:** If you design your ProcessMaker Vocabulary in the **Visual** tab, define its properties in the order from top to bottom as intended. Properties cannot be sorted in a different order than how you create them. However, you may view your ProcessMaker Vocabulary in the **Code** tab, which displays the JSON schema as code, and then reorganize properties there.
* **Ensure the maximum length of each property is not `0` or a negative number:** Except for the root of the JSON schema, such as `mainSchema`, each property in a JSON schema and ProcessMaker Vocabulary must have a length that validates how many digits, whether alphabetical, numeric, or alphanumeric, that validates conformity of data for that property. ProcessMaker stores a property's length using the `maxLength` key name by default to define the maximum number of digits that property's value may contain. For example, a person's age may contain no more than three \(3\) digits. Ensure that each property contains at least one \(1\) digit. To specify a minimum digit length of a property, select the **Code** tab and enter that minimum length using the `minLength` key name. To specify an exact number of digits, use `minLength` key name. For example, a credit card number must contain 16 digits.

## Related Topics

{% page-ref page="manage-your-vocabularies/view-all-vocabularies.md" %}

{% page-ref page="manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/search-for-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/edit-a-vocabulary.md" %}

{% page-ref page="manage-your-vocabularies/delete-a-vocabulary.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/vocabularies.md" %}

