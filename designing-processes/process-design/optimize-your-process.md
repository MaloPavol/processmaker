---
description: >-
  Optimize workflow in your Process model by visually evaluating its workflow
  through its Sequence Flow without assigning Task recipients.
---

# Optimize Your Process

## Overview

Use the [Process Optimization package](../../package-development-distribution/package-a-connector/process-optimization-package.md) to validate how your [Process](../viewing-processes/what-is-a-process.md) model routes through its [Sequence Flow](model-your-process/process-modeling-element-descriptions.md#sequence-flow) elements. The Process Optimization package extends basic [BPMN 2.0 validation](validate-bpmn-2.0-compliance.md) to validate whether all workflows routes are viable, including [connectors](model-processes-using-connectors/what-is-a-connector.md) that do not apply to BPMN 2.0 validation.

{% hint style="info" %}
The Process Optimization [package](../../package-development-distribution/first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Process Optimization package can be installed in your ProcessMaker instance.
{% endhint %}

The Process Optimization package integrates into Process Modeler to visually validate the workflow in your [Process](../viewing-processes/what-is-a-process.md) model. Use visual validation to evaluate if workflow can potentially complete routing through all elements and/or connectors in your Process model. The Process Optimization package has the following features:

* Click the **Check Flow** button in the bottom bar of Process Modeler to automatically view how workflow routes in your Process model. Process Modeler validates workflow throughout your Process model, and then displays each possible workflow route results in separate sections. Process Modeler validates workflow based on the default [Sequence Flow](model-your-process/process-modeling-element-descriptions.md#sequence-flow) elements and/or conditions set to those Sequence Flow elements throughout the Process model.
* [Tasks](../../using-processmaker/task-management/what-is-a-task.md) need not be assigned to ProcessMaker [users](../../processmaker-administration/add-users/what-is-a-user.md)/[groups](../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) nor Sequence Flow elements configured with routing conditions.
* Each possible workflow is color-coded to indicate the following about each workflow route:
  * **Green:** Green-colored sections indicate that this workflow can complete as designed.
  * **Yellow:** Yellow-colored sections indicate that this workflow contains elements and/or connectors that are not triggered by that workflow's route. Workflow may not trigger any End Event type element to complete a simulated Request.
  * **Red:** Red-colored sections indicate that this workflow contains elements and/or connectors that are never triggered.

![Evaluate how workflow routes through a Process model](../../.gitbook/assets/process-optimization-package-overview.png)

## Validate Process Workflow

{% hint style="info" %}
### ProcessMaker Package Required

The Process Optimization [package](../../package-development-distribution/first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Process Optimization package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to validate workflow in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to validate workflow routes through a Process model:

1. [View your Processes](../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Click the **Check Flow** button in the bottom bar. Process Modeler automatically evaluates how workflow routes in your Process model, and then displays each possible workflow route results in separate sections that are color-coded to indicate the following about each workflow route:
   * **Green:** Green-colored sections indicate that this workflow can complete as designed.
   * **Yellow:** Yellow-colored sections indicate that this workflow contains elements and/or connectors that are not triggered by that workflow's route. Workflow may not trigger any End Event type element to complete a simulated Request.
   * **Red:** Red-colored sections indicate that this workflow contains elements and/or connectors that are never triggered.
4. Do any of the following:
   * Click the **Show Workflow** button![](../../.gitbook/assets/show-workflow-button-process-optimization-package.png)in a section to view the routing for that workflow. Process Modeler animates that workflow's route by highlighting each element/connector during that workflow in routing order. Color-coding of each highlighted element/connector in that workflow matches that of its section. That section expands if it is not already expanded. Red-colored sections do not contain a **Show Workflow** button because their workflows cannot complete routing.
   * Click the **Expand** button![](../../.gitbook/assets/expand-button-process-optimization-package.png)or **Collapse** button![](../../.gitbook/assets/collapse-button-process-optimization-package.png)in each section to expand or collapse that section, respectively.
   * Mouse-hover over each node ID in an expanded section to see that element/connector highlighted in your Process model.
5. Click the **Check Flow** button again to hide the visual validation results.

## Related Topics

{% page-ref page="../../package-development-distribution/package-a-connector/process-optimization-package.md" %}

{% page-ref page="../../package-development-distribution/first-topic.md" %}

{% page-ref page="model-your-process/process-modeling-element-descriptions.md" %}

{% page-ref page="model-processes-using-connectors/what-is-a-connector.md" %}

{% page-ref page="../../processmaker-administration/add-users/what-is-a-user.md" %}

{% page-ref page="../../processmaker-administration/assign-groups-to-users/what-is-a-group.md" %}

