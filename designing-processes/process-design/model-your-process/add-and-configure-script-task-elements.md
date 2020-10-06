---
description: >-
  Add, copy, delete, change the color, align, and configure Script Task elements
  in your Process model.
---

# Script Task Element

## Permissions Required

{% hint style="info" %}
### Don't Know What a Script Task Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Script Task](process-modeling-element-descriptions.md#script-task) element.
{% endhint %}

Your ProcessMaker user account or group membership must have the following permissions to configure a Script Task element in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add a Script Task Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to add a Script Task element to the Process model:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Task** element in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **Task** element's icon![](../../../.gitbook/assets/task-icon-process-modeler-processes.png).

   ![](../../../.gitbook/assets/task-control-process-modeler-processes.png)

4. Drag the element into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Script Task element cannot be placed outside of the Pool element.
5. From the **Elements** drop-down menu, select the **Script Task** option. The Script Task element displays. ![](../../../.gitbook/assets/script-task-selection-process-modeler-designer.png) 

![Script Task element](../../../.gitbook/assets/script-task-element-process-modeler-designer.png)

{% hint style="info" %}
After adding the Script Task element, consider adding either of the following Boundary-type Process model elements to design business solutions when your best-case scenarios don't happen:

* [Boundary Timer Event](add-and-configure-boundary-timer-event-elements.md#add-a-boundary-timer-event-element) element \([Don't know what that is?](process-modeling-element-descriptions.md#boundary-timer-event)\)
* [Boundary Error Event](add-and-configure-boundary-error-event-elements.md#add-a-boundary-error-event-element) element \([Don't know what that is?](process-modeling-element-descriptions.md#boundary-error-event)\)
* [Boundary Signal Event](add-and-configure-boundary-signal-event-elements.md) element \([Don't know what that is?](process-modeling-element-descriptions.md#boundary-signal-event)\)
{% endhint %}

After the element is placed into the Process model, you may adjust its location in the following ways:

* Move the element by dragging it to a new location.
* [Select the element with other elements and/or connectors](../select-multiple-process-model-elements-and-connectors.md#select-multiple-process-model-objects), and then move them collectively by dragging them to new locations in relation to one another.
* [Align](../align-and-distribute-process-model-elements-and-connectors.md#align-process-model-objects) and/or [distribute](../align-and-distribute-process-model-elements-and-connectors.md#distribute-process-model-objects) the element in relation to other selected elements and/or [connectors](../model-processes-using-connectors/what-is-a-connector.md).

{% hint style="warning" %}
Moving a Script Task element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Script Task element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Script Task element inside the Pool element closest to where you attempt to move it.
* **Lane element:** If the Script Task element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Script Task element cannot be moved outside of the Pool element.
{% endhint %}

## Change the Color of a Script Task Element

The Script Task element and label are black-colored by default. After a Script Task element is [added to a Process model](add-and-configure-script-task-elements.md#add-a-script-task-element), its shape and label color can be changed. Element and [connector](../model-processes-using-connectors/what-is-a-connector.md) colors may only be changed individually.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to change the color and label for a Script Task element:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Script Task element to change its color. Available options display above the selected element. ![](../../../.gitbook/assets/change-color-script-task-element-process-modeler-designer.png) 
4. Click the **Open Color Palette** icon![](../../../.gitbook/assets/open-color-palette-icon-process-modeler-designer.png). The color palette displays.
5. Do one of the following:
   * **Select a color swatch:** Select one of the color swatches from the color palette. The Script Task element and label change to that color.
   * **Specify a custom color:** Click the![](../../../.gitbook/assets/color-selector-swatch-process-modeler-designer.png)icon to display the color selector, and then select a color, enter the [Hex color code](https://www.color-hex.com/), or enter the red, green, blue, and alpha color values for the custom color. The Script Task element and label change to that color. ![](../../../.gitbook/assets/color-selector-process-modeler-designer.png) 
   * **Reset to the default color:** Click the![](../../../.gitbook/assets/reset-color-icon-process-modeler-designer.png)icon to reset the Script Task element and label to its default color.

## Replace a Script Task Element with a Different Task Type or Sub Process Element

After a Script Task element is [added to a Process model](add-and-configure-script-task-elements.md#add-a-script-task-element), you may replace it with a different Task type or a Sub Process element:

* [Form Task](process-modeling-element-descriptions.md#form-task) element
* [Manual Task](process-modeling-element-descriptions.md#manual-task) element
* [Sub Process](process-modeling-element-descriptions.md#sub-process) element

The selected Script Task element is replaced by the default settings and color of the replacing element.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to replace a Script Task element with a different Task type element or a Sub Process element:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Script Task element to change to another element. Available options display above the selected element.
4. Click the **Elements** icon. The **Elements** drop-down menu displays the Task type elements and the Sub Process element. ![](../../../.gitbook/assets/change-element-script-task-process-modeler-designer.png) 
5. Select the element to replace the Script Task element. The **Change Type** screen displays to confirm replacing the currently selected element. ![](../../../.gitbook/assets/change-type-screen-process-modeler-designer.png) 
6. Click **Confirm**. The new element replaces the Script Task element with its default settings and color.

## Copy a Script Task Element

Copying a Script Task element copies the original along with its current settings, making it easier and faster to continue designing without adding default elements or [connectors](../model-processes-using-connectors/what-is-a-connector.md) with their default settings.

The copied Script Task element displays below the original. Any [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from the original are not copied.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to copy a Script Task element in your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Script Task element to copy. Available options display above the selected element. ![](../../../.gitbook/assets/copy-script-task-element-process-modeler-designer.png) 
4. Click the **Copy Element** icon![](../../../.gitbook/assets/copy-element-icon-process-modeler-designer.png). The Process model element copies. ![](../../../.gitbook/assets/copied-script-task-element-process-modeler-designer.png) 

## Delete a Script Task Element

Deleting a Process model element also deletes any [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from that element. For example, if a Process model element is deleted that has both incoming and outgoing Sequence Flow elements, the Sequence Flow elements must be reconnected for the remaining elements/[connectors](../model-processes-using-connectors/what-is-a-connector.md).

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to delete a Script Task element from your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Script Task element to delete. Available options display above the selected element. ![](../../../.gitbook/assets/delete-script-task-element-process-modeler-designer.png) 
4. Click the **Delete** icon![](../../../.gitbook/assets/remove-icon.png). The Process model element deletes.

## Settings

The Script Task element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-script-task-elements.md#edit-the-element-name)
  * [Select the ProcessMaker Script to run](add-and-configure-script-task-elements.md#select-the-processmaker-script-to-run)
  * [Configure the Selected ProcessMaker Script](add-and-configure-script-task-elements.md#configure-the-selected-processmaker-script)
* **Vocabularies** panel \(available when the [Vocabularies package](../../../package-development-distribution/package-a-connector/vocabularies.md) is installed\)
  * [Assign ProcessMaker Vocabularies that validate Request data from this element](add-and-configure-script-task-elements.md#assign-processmaker-vocabularies-that-validate-request-data-from-this-element)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-script-task-elements.md#edit-the-elements-identifier-value)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to edit the name for a Script Task element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Script Task element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../.gitbook/assets/script-task-configuration-name-process-modeler-designer.png)
4. In the **Name** setting, edit the selected element's name and then press **Enter**.

#### Select the ProcessMaker Script to Run

Since Script Task elements are designed to run a [ProcessMaker Script](../../scripts/what-is-a-script.md), specify which ProcessMaker Script a selected Script Task element uses. A ProcessMaker Script must already exist before it can be selected for use in a Script Task element.

{% hint style="info" %}
See the following topics for more information:

* [What is a Script?](../../scripts/what-is-a-script.md)
* [Script Editor](../../scripts/script-editor.md)
{% endhint %}

{% hint style="warning" %}
Ensure to select a ProcessMaker Script for each Script Task element in your Process model. If a ProcessMaker Script is not specified and Requests are started for that Process, Requests associated with that Process will stall and never complete because there is no ProcessMaker Script to run for the Script Task element\(s\).
{% endhint %}

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to select a ProcessMaker Script for a Script Task element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Script Task element from the Process model in which to specify its ProcessMaker Script. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Script** setting.  

   ![](../../../.gitbook/assets/script-drop-down-script-task-process-modeler-processes.png)

4. From the **Script** drop-down menu, select which ProcessMaker Script that Script Task element references. After a ProcessMaker Script is selected, the **Open Script** link displays.
5. Optionally, click the **Open Script** link to view and/or edit your selected ProcessMaker Script. Note that your ProcessMaker user account must have appropriate [Script category](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#scripts) permissions to view and/or edit the selected Script.

{% hint style="warning" %}
If no ProcessMaker Scripts exist, the **Script** drop-down menu contains no options. Ensure to select and configure a ProcessMaker Script for every Script Task element in the Process model before deploying your Process.
{% endhint %}

#### Configure the Selected ProcessMaker Script

After [selecting the ProcessMaker Script for the Script Task element](add-and-configure-script-task-elements.md#select-the-processmaker-script-for-a-script-task-element), optionally provide a JSON object that configures variable values for the selected ProcessMaker Script. Providing a JSON script from the Script Task is identical to providing JSON configuration script in the **Script Config JSON** panel in Scripts Editor for a ProcessMaker Script.

{% hint style="info" %}
See the following topics for more information:

* [What is a Script?](../../scripts/what-is-a-script.md)
* [Script Editor](../../scripts/script-editor.md), including the [Reference a Request Variable from a Script Configuration Setting](../../scripts/script-editor.md#reference-a-request-variable-from-a-script-configuration-setting) section
* [Example Script Executor Use Case](../../../processmaker-administration/script-executor-management/manage-script-executors/example-script-executor-use-case.md), specifically the [Import the Process](../../../processmaker-administration/script-executor-management/manage-script-executors/example-script-executor-use-case.md#import-the-process) section how a JSON object is used to configure a ProcessMaker Script for a Script Task element
{% endhint %}

If a JSON script exists in the Script Task element, that script is used for the ProcessMaker Script. An existing JSON configuration script displays in the **Script Configuration** option for a selected Script Task element.

{% hint style="warning" %}
The JSON script in the Script Task element overrides any JSON script entered in the **Script Config JSON** panel in Scripts Editor for the associated ProcessMaker Script.
{% endhint %}

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to enter or edit a JSON configuration script for a Script Task element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Script Task element from the Process model in which to specify its ProcessMaker Script. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Script Configuration** option.  

   ![](../../../.gitbook/assets/script-configuration-script-task-process-modeler-processes.png)

4. [Select the ProcessMaker Script this Script Task element runs](add-and-configure-script-task-elements.md#select-the-processmaker-script-to-run).
5. Click the icon![](../../../.gitbook/assets/json-configuration-script-icon-script-task-element-process-modeler-processes.png)beside the **Script Configuration** option. The **Script Config Editor** displays.  

   ![](../../../.gitbook/assets/script-config-editor-task-element-process-modeler-processses.png)

6. Enter your JSON configuration script. Use the scroll panel to the right of the ProcessMaker Script to scroll to different sections of the Script if necessary. This is useful especially when you are editing a long ProcessMaker Script.
7. Click **Close** or the **Close** icon![](../../../.gitbook/assets/close-script-config-editor-script-task-element-process-modeler-processes.png).

{% hint style="info" %}
You can enter your JSON configuration script directly into the **Script Configuration** option instead of using the **Script Config Editor**.
{% endhint %}

### Vocabularies Panel Settings

#### Assign ProcessMaker Vocabularies That Validate Request Data from This Element

Assign [ProcessMaker Vocabularies](../../vocabularies-management/what-is-a-vocabulary.md) that validate that Request data complies with a specific JSON schema. This is often mandatory for many types of business sectors including banking and healthcare. Ensure the quality and compliance of Request data. For example, during a Loan Application process, ensure that personal information has been included in the Request to that moment in that in-progress Request. The Vocabularies package must be installed in your ProcessMaker instance to make this configuration.

Use a ProcessMaker Vocabulary on a Script Task element to validate that Request data complies with the Vocabulary's JSON schema after the Script Task runs its ProcessMaker Script but prior to when the Request continues workflow. See [What is a Vocabulary?](../../vocabularies-management/what-is-a-vocabulary.md) for more information.

Each moment ProcessMaker evaluates workflow routing for an in-progress Request, ProcessMaker also evaluates the Request data's conformity to the ProcessMaker Vocabularies applied to the Process and/or a specific BPMN 2.0 element in the Process model. The Request's JSON data model must conform to the ProcessMaker Vocabulary's JSON schema.

During an in-progress Request, if ProcessMaker evaluates that the Request data no longer complies with all ProcessMaker Vocabularies to that moment, the Request status changes from In Progress to Error. The error displays in the [Request summary](../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md). ProcessMaker Vocabularies are cumulative in an in-progress Request: as the Request progresses, if Request data does not conform with any Vocabulary's JSON schema to that moment in the Request, the Request errors.

If no ProcessMaker Vocabularies are assigned, ProcessMaker does not validate that Request data complies with a specific JSON schema prior to continuing workflow for that Request.

One or more ProcessMaker Vocabularies must be created to your ProcessMaker instance before assigning a Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary). Multiple ProcessMaker Vocabularies can be assigned to a Script Task element.

{% hint style="info" %}
### ProcessMaker Package Required

Your ProcessMaker instance must have the [Vocabularies package](../../../package-development-distribution/package-a-connector/vocabularies.md) installed to assign which ProcessMaker Vocabularies validate Request data at a Script Task element. Use the Vocabularies package to maintain uniform JSON schemas across all assets in your organization. These assets include [Processes](../../viewing-processes/what-is-a-process.md), [ProcessMaker Screens](../../design-forms/what-is-a-form.md), and [ProcessMaker Scripts](../../scripts/what-is-a-script.md).

A ProcessMaker Vocabulary is a JSON schema. The JSON schema describes the data objects, types, and structure that you want in both a machine and human readable format. Apply one or more ProcessMaker Vocabularies to your Processes and/or specific BPMN 2.0 elements in your Process models to ensure the JSON data model in Request data complies with the data structure outlined in the JSON schema that you need to meet regulatory specifications or ensure Request data contains required information.

The Vocabularies package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Vocabularies package can be installed in your ProcessMaker instance.
{% endhint %}

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

Follow these steps to assign ProcessMaker Vocabularies that validate Request data from a Script Task element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Script Task element from the Process model in which to assign ProcessMaker Vocabularies that validate Request data prior to when this element completes. Panels to configure this element display.
3. Expand the **Vocabularies** panel if it is not presently expanded. The **Assigned** setting displays.
4. Click the![](../../../.gitbook/assets/add-icon.png)icon to add a ProcessMaker Vocabulary. The **Assign Vocabulary** setting displays. ![](../../../.gitbook/assets/assign-vocabulary-option-process-modeler-processes.png) 
5. From the **Select Vocabulary** drop-down menu, select a ProcessMaker Vocabulary from which to validate Request data complies with its JSON schema.

   If no ProcessMaker Vocabularies are configured in your ProcessMaker instance, then the following message displays: **List is empty.** Create at least one ProcessMaker Vocabulary. See [Create a New Vocabulary](../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md#create-a-new-processmaker-vocabulary).

6. Click **Save**.
7. Repeat Steps 3 through 6 as necessary for each ProcessMaker Vocabulary required to validate Request data complies with its JSON schema.

{% hint style="info" %}
Click the **Remove** icon![](../../../.gitbook/assets/delete-remove-icon.png)from the **Vocabularies** setting to remove a ProcessMaker Vocabulary from assignment to this element.
{% endhint %}

After one or more ProcessMaker Vocabularies are assigned to a Script Task element, the Vocabulary icon displays in that element.

![Script Task element with an assigned ProcessMaker Vocabulary](../../../.gitbook/assets/script-task-vocabulary-process-modeler-designer.png)

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-script-task-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Script Task element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Script Task element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required setting.  

   ![](../../../.gitbook/assets/script-task-configuration-identifier-name-process-modeler-processes.png)

4. In the **Node Identifier** setting, edit the Script Task element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../../scripts/what-is-a-script.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/vocabularies.md" %}

{% page-ref page="../../vocabularies-management/what-is-a-vocabulary.md" %}

{% page-ref page="../../vocabularies-management/manage-your-vocabularies/create-a-new-vocabulary.md" %}

{% page-ref page="../../../using-processmaker/requests/request-details/summary-for-requests-with-errors.md" %}

