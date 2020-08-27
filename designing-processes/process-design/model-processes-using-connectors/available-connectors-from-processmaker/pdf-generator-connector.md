---
description: Automatically generate PDFs of Display-type ProcessMaker Screens in a Process.
---

# PDF Generator Connector

## Overview

The PDF Generator [connector](../what-is-a-connector.md) is part of the [PDF Generator package](../../../../package-development-distribution/package-a-connector/pdf-generator-package.md) that can automatically generate PDFs of [Display](../../../design-forms/screens-builder/types-for-screens.md#display)-type [ProcessMaker Screens](../../../design-forms/what-is-a-form.md) during [Requests](../../../../using-processmaker/requests/what-is-a-request.md). Use the PDF Generator connector in your Process models when you want to provide a printable copy of a Display-type ProcessMaker Screen, such as for Request summaries or purchase order receipts.

{% hint style="info" %}
### ProcessMaker Package Required

The PDF Generator connector requires that the [PDF Generator package](../../../../package-development-distribution/package-a-connector/pdf-generator-package.md) be installed in your ProcessMaker instance. The PDF Generator connector and the PDF Generator [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the PDF Generator connector can be installed in your ProcessMaker instance.
{% endhint %}

When the PDF Generator connector successfully generates the PDF during an in-progress Request, the PDF output can be downloaded from the [**Files** tab in its Request summary](../../../../using-processmaker/requests/request-details/summary-for-in-progress-requests.md#files-associated-with-the-request). The PDF Generator by default names the PDF output the same as the ProcessMaker Screen from which the PDF was generated unless the name is configured via text or by referencing a Request variable using [mustache syntax](https://mustache.github.io/mustache.5.html). If the PDF Generator successfully generates the PDF, the PDF output remains available from that Request's summary regardless of that Request's status.

## Package and Permissions Required

The PDF Generator connector requires that the [ProcessMaker PDF Generator package](../../../../package-development-distribution/package-a-connector/pdf-generator-package.md) be installed in your ProcessMaker instance. The PDF Generator connector and the PDF Generator [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the PDF Generator connector can be installed in your ProcessMaker instance.

Furthermore, your ProcessMaker user account or group membership must have the following permissions to configure a PDF Generator connector to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add a PDF Generator Connector to the Process Model

{% hint style="info" %}
[A package and permissions are required to do this](pdf-generator-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to add a PDF Generator connector to the Process model:

1. [View your Processes](../../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **PDF Generator** connector in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **PDF Generator** connector's icon![](../../../../.gitbook/assets/pdf-generator-icon-process-modeler-package-processes.png). ![](../../../../.gitbook/assets/pdf-generator-control-package-process-modeler-processes.png) 
4. Drag the connector into the Process model canvas where you want to place it. If a Pool element is in your Process model, the PDF Generator connector cannot be placed outside of the Pool element.

![PDF Generator connector](../../../../.gitbook/assets/pdf-generator-placed-process-modeler-package-processes.png)

{% hint style="info" %}
After adding the PDF Generator connector, consider adding the following Boundary-type Process model elements to design business solutions when your best-case scenarios don't happen:

* [Boundary Timer Event](../../model-your-process/add-and-configure-boundary-timer-event-elements.md#add-a-boundary-timer-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-timer-event)\)
* [Boundary Error Event](../../model-your-process/add-and-configure-boundary-error-event-elements.md#add-a-boundary-error-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-error-event)\)
* [Boundary Signal Event](../../model-your-process/add-and-configure-boundary-signal-event-elements.md) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-signal-event)\)
{% endhint %}

After the connector is placed into the Process model, you may adjust its location in the following ways:

* Move the connector by dragging it to a new location.
* [Select the connector with other elements and/or connectors](../../select-multiple-process-model-elements-and-connectors.md#select-multiple-process-model-objects), and then move them collectively by dragging them to new locations in relation to one another.
* [Align](../../align-and-distribute-process-model-elements-and-connectors.md#align-process-model-objects) and/or [distribute](../../align-and-distribute-process-model-elements-and-connectors.md#distribute-process-model-objects) the connector in relation to other selected elements and/or connectors.

{% hint style="warning" %}
Moving a PDF Generator connector has the following limitations in regards to the following Process model elements:

* **Pool element:** If the PDF Generator connector is inside of a [Pool](../../model-your-process/process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the PDF Generator connector inside the Pool element closest to where you attempt to move it.
* **Lane element:** If the PDF Generator connector is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the PDF Generator connector cannot be moved outside of the Pool element.
{% endhint %}

## Change the Color of a PDF Generator Connector

The PDF Generator [connector](../what-is-a-connector.md) and label are black-colored by default. After a PDF Generator connector is [added to a Process model](pdf-generator-connector.md#add-a-pdf-generator-connector-to-the-process-model), its shape and label color can be changed. Element and connector colors may only be changed individually.

{% hint style="info" %}
[A package and permissions are required to do this](pdf-generator-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to change the color and label for a PDF Generator connector:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the PDF Generator connector to change its color. Available options display above the selected connector. ![](../../../../.gitbook/assets/change-color-pdf-generator-connector-process-modeler-designer.png) 
4. Click the **Open Color Palette** icon![](../../../../.gitbook/assets/open-color-palette-icon-process-modeler-designer.png). The color palette displays.
5. Do one of the following:
   * **Select a color swatch:** Select one of the color swatches from the color palette. The PDF Generator connector and label change to that color.
   * **Specify a custom color:** Click the![](../../../../.gitbook/assets/color-selector-swatch-process-modeler-designer.png)icon to display the color selector, and then select a color, enter the [Hex color code](https://www.color-hex.com/), or enter the red, green, blue, and alpha color values for the custom color. The PDF Generator connector and label change to that color. ![](../../../../.gitbook/assets/color-selector-process-modeler-designer.png) 
   * **Reset to the default color:** Click the![](../../../../.gitbook/assets/reset-color-icon-process-modeler-designer.png)icon to reset the PDF Generator connector and label to its default color.

## Copy a PDF Generator Connector

Copying a PDF Generator [connector](../what-is-a-connector.md) copies the original along with its current settings, making it easier and faster to continue designing without adding default elements or connectors with their default settings.

The copied PDF Generator connector displays below the original. Any [Sequence Flow](../../model-your-process/process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](../../model-your-process/process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from the original are not copied.

{% hint style="info" %}
[A package and permissions are required to do this](pdf-generator-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to copy a PDF Generator connector in your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the PDF Generator connector to copy. Available options display above the selected connector. ![](../../../../.gitbook/assets/copy-pdf-generator-connector-process-modeler-designer.png) 
4. Click the **Copy Element** icon![](../../../../.gitbook/assets/copy-element-icon-process-modeler-designer.png). The Process model connector copies. ![](../../../../.gitbook/assets/copied-pdf-generator-connector-process-modeler-designer.png) 

## Delete a PDF Generator Connector

Deleting a Process model [connector](../what-is-a-connector.md) also deletes any [Sequence Flow](../../model-your-process/process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](../../model-your-process/process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from that element. For example, if a Process model connector is deleted that has both incoming and outgoing Sequence Flow elements, the Sequence Flow elements must be reconnected for the remaining elements/connectors.

{% hint style="info" %}
[A package and permissions are required to do this](pdf-generator-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to delete a PDF Generator connector from your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the PDF Generator connector to delete. Available options display above the selected connector. ![](../../../../.gitbook/assets/delete-pdf-generator-connector-process-modeler-designer.png) 
4. Click the **Delete** icon![](../../../../.gitbook/assets/remove-icon.png). The Process model connector deletes.

## Settings

The PDF Generator connector has the following panels that contain settings:

* **Configuration** panel
  * [Edit the connector name](pdf-generator-connector.md#edit-the-connector-name)
  * [Enter the file name for the generated PDF](pdf-generator-connector.md#enter-the-file-name-for-the-generated-pdf)
  * [Select the ProcessMaker Screen from which to generate a PDF](pdf-generator-connector.md#select-the-processmaker-screen-from-which-to-generate-a-pdf)

### Configuration Panel Settings

#### Edit the Connector Name

{% hint style="info" %}
[A package and permissions are required to do this](pdf-generator-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to edit a PDF Generator connector's name:

1. Ensure that the **Hide Menus** button![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the PDF Generator connector from the Process model in which to configure its settings. Panels to configure this connector display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../../.gitbook/assets/pdf-generator-configuration-name-process-modeler-package-processes.png) 
4. In the **Name** setting, edit the selected connector's name and then press **Enter**.

#### Enter the File Name for the Generated PDF

{% hint style="info" %}
[A package and permissions are required to do this](pdf-generator-connector.md#package-and-permissions-required).
{% endhint %}

Enter the file name for the PDF that a PDF Generator connector generates. Optionally use [mustache syntax](https://mustache.github.io/mustache.5.html) to reference a Request variable as the PDF's file name. Using a Request variable to determine the PDF file name allows one PDF Generator connector to generate multiple iterations of a [Display](../../../design-forms/screens-builder/types-for-screens.md#display)-type [ProcessMaker Screen](../../../design-forms/what-is-a-form.md) in a loop without each PDF named identically.

If this setting does not have a value, then by default the PDF Generator connector uses the ProcessMaker Screen's name as the PDF file name.

Follow these steps to enter the file name for the PDF that a PDF Generator connector generates:

1. Ensure that the **Hide Menus** button![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the PDF Generator connector from the Process model in which to configure its settings. Panels to configure this connector display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **PDF File Name** setting. ![](../../../../.gitbook/assets/pdf-file-name-generator-connector-package-screen-builder-designer.png) 
4. In the **PDF File Name** setting enter the text for the file name or use mustache syntax to reference a Request variable for the file name.

#### Select the ProcessMaker Screen from Which to Generate a PDF

{% hint style="info" %}
[A package and permissions are required to do this](pdf-generator-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to select from which [Display](../../../design-forms/screens-builder/types-for-screens.md#display)-type [ProcessMaker Screen](../../../design-forms/what-is-a-form.md) to generate a PDF:

1. Ensure that the **Hide Menus** button![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the PDF Generator connector from the Process model in which to configure its settings. Panels to configure this connector display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Select a Display Screen** setting. ![](../../../../.gitbook/assets/pdf-generator-configuration-select-display-screen-process-modeler-package-processes.png) 
4. From the **Select a Display Screen** drop-down menu, select which ProcessMaker Screen to generate a PDF. Only Display-type ProcessMaker Screens display from this setting.

## Related Topics

{% page-ref page="../../../../package-development-distribution/package-a-connector/pdf-generator-package.md" %}

{% page-ref page="../what-is-a-connector.md" %}

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

