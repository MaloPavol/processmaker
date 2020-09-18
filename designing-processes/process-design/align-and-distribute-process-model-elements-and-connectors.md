---
description: >-
  Align and distribute multiple Process model elements and connectors to
  beautify your design and improve legibility.
---

# Align and Distribute Process Model Elements and Connectors

## Overview

Align and/or distribute multiple BPMN elements and/or [connectors](model-processes-using-connectors/what-is-a-connector.md) placed in your Process model, collective referred to as Process model objects, for greater legibility.

The following restrictions apply to aligning or distributing Process model objects:

* Two \(2\) or more Process model objects must be selected to align those objects.
* Three \(3\) or more Process model objects must be selected to distribute those objects.
* Boundary-type elements associated with any selected object are not affected: they remain with their respective object.
* [Sequence Flow](model-your-process/process-modeling-element-descriptions.md#sequence-flow) elements and [Message Flow](model-your-process/process-modeling-element-descriptions.md#message-flow) elements adjust their placement and contours automatically to maintain connections between their respective objects.
* [Association](model-your-process/process-modeling-element-descriptions.md#association) elements cannot be aligned or redistributed. Association elements adjust automatically between their [Text Annotation](model-your-process/process-modeling-element-descriptions.md#text-annotation) elements and the element/connector they reference when their Text Annotation elements' placement change.
* [Lane](model-your-process/process-modeling-element-descriptions.md#lane) elements cannot be aligned nor redistributed from their default positions.
* If a [Pool](model-your-process/process-modeling-element-descriptions.md#pool) element is among the selections, Process model objects in that Pool element cannot be redistributed. However, the Pool element\(s\) can be redistributed.

Icons to align and distribute multiple selected Process model objects display to the right of the Process name.

![Alignment and distribute icons display to the right of the Process name](../../.gitbook/assets/alignment-and-distribution-icons-process-modeler-designer.png)

## Align Process Model Objects

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to align objects in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to align Process model objects:

1. [Select at least two \(2\) Process model objects](select-multiple-process-model-elements-and-connectors.md#select-multiple-process-model-objects) to align. Note that [Lane](model-your-process/process-modeling-element-descriptions.md#lane) elements cannot be aligned from their default alignments in their [Pool](model-your-process/process-modeling-element-descriptions.md#pool) element.
2. Select from the following alignment options:
   * **Align left:** Click the **Align Left** icon![](../../.gitbook/assets/align-left-icon-process-modeler-designer.png)to left-align the selected Process model objects based on the left-most object selected.
   * **Center horizontally:** Click the **Center Horizontally** icon![](../../.gitbook/assets/center-horizontally-icon-process-modeler-designer.png)to horizontally center the selected Process model objects.
   * **Align right:** Click the **Align Right** icon![](../../.gitbook/assets/align-right-icon-process-modeler-designer.png)to right-align the selected Process model objects based on the right-most object selected.
   * **Align bottom:** Click the **Align Bottom** icon![](../../.gitbook/assets/align-bottom-icon-process-modeler-designer.png)to bottom-align the selected Process model objects based on the bottom-most object selected.
   * **Center vertically:** Click the **Center Vertically** icon![](../../.gitbook/assets/center-vertically-icon-process-modeler-designer.png)to vertically center the selected Process model objects.
   * **Align top:** Click the **Align Top** icon![](../../.gitbook/assets/align-top-icon-process-modeler-designer.png)to top-align the selected Process model objects based on the top-most object selected.
3. Optionally, [distribute the selected Process model objects](align-and-distribute-process-model-elements-and-connectors.md#distribute-process-model-objects). Note that at least three \(3\) Process model objects must be selected to distribute them.

## Distribute Process Model Objects

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to distribute objects in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to distribute Process model objects:

1. [Select at least three \(3\) Process model objects to distribute](select-multiple-process-model-elements-and-connectors.md#select-multiple-process-model-objects). Note that [Lane](model-your-process/process-modeling-element-descriptions.md#lane) elements cannot be distributed from their default positions in their [Pool](model-your-process/process-modeling-element-descriptions.md#pool) element.
2. Select from the following alignment options:
   * **Distribute horizontally:** Click the **Distribute Horizontally** icon![](../../.gitbook/assets/distribute-horizontally-process-modeler-designer.png)to horizontally distribute the selected  Process model objects based on the left-most and right-most selected objects. If a Pool element is among the selections, the Process model object\(s\) in that Pool element are not affected, but instead affect the Pool element.
   * **Distribute vertically:** Click the **Distribute Vertically** icon![](../../.gitbook/assets/distribute-vertically-process-modeler-designer.png)to vertically distribute the selected  Process model objects based on the top-most and bottom-most selected objects. If a Pool element is among the selections, the Process model object\(s\) in that Pool element are not affected, but instead affect the Pool element.
3. Optionally, [align the selected Process model objects](align-and-distribute-process-model-elements-and-connectors.md#align-process-model-objects).

## Related Topics

{% page-ref page="select-multiple-process-model-elements-and-connectors.md" %}

{% page-ref page="../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

