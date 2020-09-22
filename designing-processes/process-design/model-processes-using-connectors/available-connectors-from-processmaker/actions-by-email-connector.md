---
description: Request participants can make decisions via email with the click of a button.
---

# Actions By Email Connector

## Overview

The Actions By Email [connector](../what-is-a-connector.md) is part of the [Actions By Email package](../../../../package-development-distribution/package-a-connector/actions-by-email-package.md). Use the Actions By Email connector in your Process models to automate emails to [Request](../../../../using-processmaker/requests/what-is-a-request.md) participants that allow them make decisions via email.

When the Actions By Email connector triggers during an in-progress Request, ProcessMaker sends an email from the "no-reply@processmaker.net" email address to one email recipient so that this Request participant can make a decision as part of the Request. For example, this Request participant must make a decision to approve or deny a vacation request or for a purchase. The email recipient receives an email with buttons in the email to easily indicate the decision.

![Example email the Actions By Email connector sends to an email recipient](../../../../.gitbook/assets/actions-by-email-package.png)

{% hint style="info" %}
Email design is subject to email client limitations and may not fully support HTML5 or CSS3 specifications. Test your emails in your supported client applications.
{% endhint %}

While the Actions by Email connector can send the email to multiple email recipients, ProcessMaker registers only the first response.

After the email recipient clicks a button to indicate the decision, the email client creates an email reply to be delivered to the ProcessMaker instance that used the Actions By Email connector. As indicated in the email reply, do not change anything below the automatically generated response because this response notifies the ProcessMaker instance of the email recipient's decision for Request routing.

![Automatically generated email reply the email recipient sends to the ProcessMaker instance](../../../../.gitbook/assets/actions-by-email-response-package-processes.png)

After the email recipient sends the reply email, ProcessMaker receives the response and uses the indicated decision as part of the Request routing. For example, if you grant a leave request, the Request routes differently than if you deny that leave request.

{% hint style="info" %}
The comment in the email reply above the indicated line is not preserved when the email reply is sent. This comment displays only for the benefit of the email recipient prior to sending the email reply.
{% endhint %}

The Actions By Email connector adds the **Actions By Email** connector below the BPMN 2.0 elements in the panel to the left of the Process Modeler canvas. See the following sections in this topic:

* [Add an Actions By Email Connector to the Process Model](actions-by-email-connector.md#add-an-actions-by-email-control-to-the-process-model)
* [Configure an Actions By Email Connector](actions-by-email-connector.md#configure-an-actions-by-email-control)

The email recipient's name, email address, subject, and/or email body can be specified in one of the following ways when configuring the Actions By Email connector:

* Plain text
* A **Variable Name** setting value using [mustache syntax](https://mustache.github.io/mustache.5.html), for example `{{ email_recipient }}` and `{{ email_address }}`, respectively
* A [ProcessMaker Magic Variable](../../../reference-global-variables-in-your-processmaker-assets.md) value, specifically `{{ _user.fullname }}` and `{{ _user.email }}`, respectively

The Actions By Email connector can send the email to multiple email recipients. These email recipients and their email addresses may be referenced from Request data or entered into connector settings.

When an Actions By Email connector triggers during an in-progress Request, ProcessMaker automatically creates an asynchronous child Process: the Actions By Email connector sends the email \(the child Process\) while simultaneously the in-progress Request continues \(the parent Process\). In doing so, one of the following occurs:

* **An error occurs in the email delivery:** While attempting to send the email, the Actions By Email connector receives an error. For example, your organization's email server or the email recipient's email server may be down. The child Process receives and sends the error to the parent Process. The child Process ends. Reference the child Process's error from the in-progress Request.
* **The Actions by Email connector sends the email:** The email recipient receives the email while the in-progress Request continues \(the parent Process\). The child Process ends, but the email recipient may not have responded to the email. If the in-progress Request routes to an [Exclusive Gateway](../../model-your-process/process-modeling-element-descriptions.md#exclusive-gateway) element that requires the email recipient's response to evaluate routing, then the in-progress Request remains indefinitely active on the Exclusive Gateway element.

{% hint style="info" %}
To ensure that Requests do not remain indefinitely active on an Exclusive Gateway element while the Request waits for the email recipient's response, design your Process model to use an [Event-Based Gateway](../../model-your-process/process-modeling-element-descriptions.md#event-based-gateway) element preceding the Exclusive Gateway element that checks the following:

* If an [Intermediate Timer Event](../../model-your-process/process-modeling-element-descriptions.md#intermediate-timer-event) element triggers \(after 72 hours, for example\), the email recipient has not responded to the email. Thereafter, design in the Process model how to address this, such as sending a subsequent email using the [Send Email connector](email-connector.md).
* If an [Intermediate Message Catch Event](../../model-your-process/process-modeling-element-descriptions.md#intermediate-message-catch-event) element triggers instead of the Intermediate Timer Event element, the email recipient sent the response within the allotted time period.
{% endhint %}

## Package and Permissions Required

The Actions By Email connector requires that the [ProcessMaker Actions By Email Email package](../../../../package-development-distribution/package-a-connector/actions-by-email-package.md) be installed in your ProcessMaker instance. The Actions By Email connector and the Actions By Email [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Actions By Email connector can be installed in your ProcessMaker instance.

Furthermore, your ProcessMaker user account or group membership must have the following permissions to configure an Actions By Email connector to the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add an Actions By Email Connector to the Process Model

{% hint style="info" %}
[A package and permissions are required to do this](actions-by-email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to add an Actions By Email connector to the Process model:

1. [View your Processes](../../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Actions By Email** connector in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **Actions By Email** connector's icon![](../../../../.gitbook/assets/actions-by-email-icon-process-modeler-processes.png).

   ![](../../../../.gitbook/assets/actions-by-email-control-bpmn-process-modeler-package-processes.png) 

4. Drag the connector into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Actions By Email connector cannot be placed outside of the Pool element.

![Actions By Email connector](../../../../.gitbook/assets/actions-by-email-control-process-modeler-package-processes.png)

{% hint style="info" %}
After adding the Actions By Email connector, consider adding the following Boundary-type Process model elements to design business solutions when your best-case scenarios don't happen:

* [Boundary Timer Event](../../model-your-process/add-and-configure-boundary-timer-event-elements.md#add-a-boundary-timer-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-timer-event)\)
* [Boundary Error Event](../../model-your-process/add-and-configure-boundary-error-event-elements.md#add-a-boundary-error-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-error-event)\)
* [Boundary Signal Event](../../model-your-process/add-and-configure-boundary-signal-event-elements.md) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-signal-event)\)
* [Boundary Message Event](../../model-your-process/add-and-configure-boundary-message-event-elements.md#add-a-boundary-message-event-element) element \([Don't know what that is?](../../model-your-process/process-modeling-element-descriptions.md#boundary-message-event)\)
{% endhint %}

After the connector is placed into the Process model, you may adjust its location in the following ways:

* Move the connector by dragging it to a new location.
* [Select the connector with other elements and/or connectors](../../select-multiple-process-model-elements-and-connectors.md#select-multiple-process-model-objects), and then move them collectively by dragging them to new locations in relation to one another.
* [Align](../../align-and-distribute-process-model-elements-and-connectors.md#align-process-model-objects) and/or [distribute](../../align-and-distribute-process-model-elements-and-connectors.md#distribute-process-model-objects) the connector in relation to other selected elements and/or connectors.

{% hint style="warning" %}
Moving an Actions By Email connector has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Actions By Email connector is inside of a [Pool](../../model-your-process/process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Actions By Email connector inside the Pool element closest to where you attempt to move it.
* **Lane element:** If the Actions By Email connector is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Actions By Email connector cannot be moved outside of the Pool element.
{% endhint %}

## Change the Color of an Actions By Email Connector

The Actions By Email [connector](../what-is-a-connector.md) and label are black-colored by default. After an Actions By Email connector is [added to a Process model](actions-by-email-connector.md#add-an-actions-by-email-connector-to-the-process-model), its shape and label color can be changed. Element and connector colors may only be changed individually.

{% hint style="info" %}
[A package and permissions are required to do this](actions-by-email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to change the color and label for an Actions By Email connector:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Actions By Email connector to change its color. Available options display above the selected connector. ![](../../../../.gitbook/assets/change-color-actions-by-email-connector-process-modeler-designer.png) 
4. Click the **Open Color Palette** icon![](../../../../.gitbook/assets/open-color-palette-icon-process-modeler-designer.png). The color palette displays.
5. Do one of the following:
   * **Select a color swatch:** Select one of the color swatches from the color palette. The Actions By Email connector and label change to that color.
   * **Specify a custom color:** Click the![](../../../../.gitbook/assets/color-selector-swatch-process-modeler-designer.png)icon to display the color selector, and then select a color, enter the [Hex color code](https://www.color-hex.com/), or enter the red, green, blue, and alpha color values for the custom color. The Actions By Email connector and label change to that color. ![](../../../../.gitbook/assets/color-selector-process-modeler-designer.png) 
   * **Reset to the default color:** Click the![](../../../../.gitbook/assets/reset-color-icon-process-modeler-designer.png)icon to reset the Actions By Email connector and label to its default color.

## Copy an Actions By Email Connector

Copying an Actions By Email [connector](../what-is-a-connector.md) copies the original along with its current settings, making it easier and faster to continue designing without adding default elements or connectors with their default settings.

The copied Actions By Email connector displays below the original. Any [Sequence Flow](../../model-your-process/process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](../../model-your-process/process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from the original are not copied.

{% hint style="info" %}
[A package and permissions are required to do this](actions-by-email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to copy an Actions By Email connector in your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Actions By Email connector to copy. Available options display above the selected connector. ![](../../../../.gitbook/assets/copy-actions-by-email-connector-process-modeler-designer.png) 
4. Click the **Copy Element** icon![](../../../../.gitbook/assets/copy-element-icon-process-modeler-designer.png). The Process model connector copies. ![](../../../../.gitbook/assets/copied-actions-by-email-connector-process-modeler-designer.png) 

## Delete an Actions By Email Connector

Deleting a Process model [connector](../what-is-a-connector.md) also deletes any [Sequence Flow](../../model-your-process/process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](../../model-your-process/process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from that element. For example, if a Process model connector is deleted that has both incoming and outgoing Sequence Flow elements, the Sequence Flow elements must be reconnected for the remaining elements/connectors.

{% hint style="info" %}
[A package and permissions are required to do this](actions-by-email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to delete an Actions By Email connector from your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Actions By Email connector to delete. Available options display above the selected connector. ![](../../../../.gitbook/assets/delete-actions-by-email-connector-process-modeler-designer.png) 
4. Click the **Delete** icon![](../../../../.gitbook/assets/remove-icon.png). The Process model connector deletes.

## Settings

{% hint style="info" %}
[A package and permissions are required to do this](actions-by-email-connector.md#package-and-permissions-required).
{% endhint %}

Follow these steps to configure an Actions By Email connector:

1. Ensure that the **Hide Menus** button![](../../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Actions By Email connector from the Process model in which to configure its settings. The **Actions By Email** configuration settings display.  ![](../../../../.gitbook/assets/actions-by-email-configuration-process-modeler-package-processes.png) 
3. In the **Email** setting, enter the email address to which the Actions By Email connector sends an email when this Actions By Email control triggers. You may use the value from a [ProcessMaker Screen](../../../design-forms/what-is-a-form.md)'s **Variable Name** setting as a variable in this setting. For example, if your Process model references a ProcessMaker Screen that contains a [Lines Inputs control](../../../design-forms/screens-builder/control-descriptions/line-input-control-settings.md) with the **Variable Name** setting value of `EmailAddress` that the Request participant enters an email address, use mustache syntax `{{EmailAddress}}` to use that Line Inputs control's value in the **Email** setting. Email addresses may be referenced from Request data or entered into the **Email** setting by using commas \(`,`\) between email addresses. You may also use mustache syntax to reference [Magic Variables](../../../reference-global-variables-in-your-processmaker-assets.md).
4. In the **Name** setting, enter the name of the email recipient. You may use the value from a ProcessMaker Screen's **Variable Name** setting as a variable in this setting. For example, if your Process model references a ProcessMaker Screen that contains a Lines Inputs control with the **Variable Name** setting value of `FullName` that the Request participant enters an name, use mustache syntax `{{FullName}}` to use that Line Inputs control's value in the **Name** setting. Email recipients may be referenced from Request data or entered into the **Name** setting by using commas \(`,`\) between email addresses. If entering multiple email recipients, ensure to list them in the corresponding order as you have listed them in the **Email** setting, so that each email recipient views her or his name in the received email.
5. In the **Subject** setting, enter the subject of the email the Actions By Email connector sends. For example, enter the decision that the email recipient must make in this email.
6. From the **Body** setting, select one of the following options:
   * **Text:** From the **Body** drop-down menu, select the **Text** option to enter the email body text. The **Email body** setting displays. In the **Email body** setting, enter the email body text.
   * **Screen:** From the **Body** drop-down menu, select the **Screen** option to use a ProcessMaker Screen to display the email body. The **Email body** setting displays. From the **Email body** drop-down menu, select the [Display](../../../design-forms/screens-builder/types-for-screens.md#display)-type ProcessMaker Screen to display the email body.
7. In the **Key name** setting, enter the name of the key that stores the Actions By Email connector response within the JSON data model of the Request.
8. In the **Options** setting, enter the list of options available to the email recipient when making the decision. The options configured here display below the body of the email. Add options in the order they are to display from top to bottom in the email.  
   ![](../../../../.gitbook/assets/actions-by-email-options-list-configuration-process-modeler-package-processes.png) 

   Follow these steps to add an option:

   1. Click the plus button![](../../../../.gitbook/assets/actions-by-email-options-list-plus-button-process-modeler-package-processes.png)from the same line where is the **Options** label. The **Add Option** screen displays.  ![](../../../../.gitbook/assets/add-new-option-screen-actions-by-email-coniguration-process-modeler-package-processes.png) 
   2. In the **Button Text** setting, enter the button label displayed to the email.
   3. In the **Value** setting, enter the internal data name for the option that only the Process Owner views at design time.
   4. In the **Button Style** setting, select a button style:
      * **Primary:** Displays a button with a blue-colored background and white-colored text.
      * **Secondary:** Displays a button with a gray-colored background and white-colored text.
      * **Success:** Displays a button with a green-colored background and white-colored text.
      * **Info:** Displays a button with a teal-colored background and white-colored text.
      * **Warning:** Displays a button with a yellow-colored background and black-colored text.
      * **Danger:** Displays a button with a red-colored background with white-colored text.
      * **Dark:** Displays a button with a black-colored background with white-colored text.
      * **Light:** Displays a button with a white-colored background with black-colored text.
   5. Click **Add**.

{% hint style="info" %}
Email design is subject to email client limitations and may not fully support HTML5 or CSS3 specifications. Test your emails in your supported client applications.
{% endhint %}

## Related Topics

{% page-ref page="../../../../package-development-distribution/package-a-connector/actions-by-email-package.md" %}

{% page-ref page="../what-is-a-connector.md" %}

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

