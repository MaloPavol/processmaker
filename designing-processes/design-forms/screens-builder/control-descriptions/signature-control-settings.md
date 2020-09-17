---
description: Add a control that displays a digital signature in Screens.
---

# Signature Control Settings

## Control Description <a id="control-description"></a>

The Signature control allows the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant to sign and save her or his signature. After saving the signature, it is recorded as a PNG image that may be referenced from an [Image](image-control-settings.md) control by [referencing the Signature control's **Variable Name** setting value](image-control-settings.md#render-image-from-a-variable-name).

{% hint style="info" %}
This control is only available for [Form](../types-for-screens.md#form)-type ProcessMaker Screens. See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen <a id="add-the-control-to-a-processmaker-screen"></a>

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](https://processmaker.gitbook.io/processmaker/processmaker-administration/permission-descriptions-for-users-and-groups#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the ProcessMaker Screen:

1. ​[Create a new ProcessMaker Screen](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/manage-forms/create-a-new-form) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon_signature-control.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/screens-builder/screens-builder-modes#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Signature** icon![](../../../../.gitbook/assets/signature-icon_signature-control.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Signature** icon into the Screen Builder canvas. Existing controls on the Screen Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen.

   ​![](../../../../.gitbook/assets/signature-control_canvas.png)​

6. Configure the Image control. See [Settings](signature-control-settings.md#settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/screens-builder/validate-your-screen#validate-a-processmaker-screen).

Below is a digital Signature added in [Preview mode](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/screens-builder/screens-builder-modes#preview-mode).

![Signature control in Preview mode](../../../../.gitbook/assets/signature_package_digital_signature_added.png)

## Move the Control on the Page <a id="move-the-control-on-the-page"></a>

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to move a control in a ProcessMaker Screen page unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](https://processmaker.gitbook.io/processmaker/processmaker-administration/permission-descriptions-for-users-and-groups#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

After [adding a control to a ProcessMaker Screen page](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/screens-builder/control-descriptions/image-control-settings#add-the-control-to-a-processmaker-screen), you may move it to another location on that page such that it is above or below other controls placed on that page. A control cannot be moved to another [ProcessMaker Screen](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/what-is-a-form) page.

Follow these steps to move a control to another location on that ProcessMaker Screen page:

1. Place your cursor anywhere on the control not displaying the **Duplicate Control**![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-M35zYld_NqI8FJQk8tz%2F-M37LeBNJaLfGSAVqQo7%2FCopy%20Duplicate%20Control%20icon%20Screen%20Builder%20-%20Processes.png?alt=media&token=dec6e3a0-4b0b-4d5d-b259-5373a2a25873)or **Delete Control**![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LiTLSD_I-KYRzB3QaSl%2F-L_wP8EGJDOrKWGh-eF1%2FDelete%20Screen%20control%20Screens%20Builder%20-%20Processes.png?alt=media&token=c261578d-58ba-4708-9552-bbdd1e399a63)buttons.
2. Hold your cursor, then drag the control above or below other controls on that ProcessMaker Screen page. Screen Builder previews where the control would display on the page based on how you position the control above or below other controls. If the control cannot be placed in a location because your cursor is above an existing control or too far to the left or right of the page, the![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-M35zYld_NqI8FJQk8tz%2F-M37HdbPBJoHCyRvRbzr%2FMovement%20not%20allowed%20icon%20Screen%20Builder%20-%20Processes.png?alt=media&token=2402c1f9-e986-4051-a29c-015d3aa52dd7)icon displays in the preview.
3. Place the control at the location on the page you want it. The other control\(s\) on the page automatically adjust position.

## Copy the Control with its Settings <a id="copy-the-control-with-its-settings"></a>

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to copy a control in a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](https://processmaker.gitbook.io/processmaker/processmaker-administration/permission-descriptions-for-users-and-groups#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Copying a control also copies the current settings of that control. The copied control displays below other controls placed on that [ProcessMaker Screen](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/what-is-a-form) page. Follow these steps to copy a control:

1. Select the control to be copied.
2. Click the **Duplicate Control** button![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-M35zYld_NqI8FJQk8tz%2F-M37LeBNJaLfGSAVqQo7%2FCopy%20Duplicate%20Control%20icon%20Screen%20Builder%20-%20Processes.png?alt=media&token=dec6e3a0-4b0b-4d5d-b259-5373a2a25873). The control copies with its current settings, and then displays below other controls placed on that page.

## Delete the Control from a ProcessMaker Screen <a id="delete-the-control-from-a-processmaker-screen"></a>

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to delete a control from a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](https://processmaker.gitbook.io/processmaker/processmaker-administration/permission-descriptions-for-users-and-groups#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.

Follow these steps to delete a control from a [ProcessMaker Screen](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/what-is-a-form) page:

1. Select the control to be deleted.
2. Click the **Delete** button![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LiTLSD_I-KYRzB3QaSl%2F-L_wP8EGJDOrKWGh-eF1%2FDelete%20Screen%20control%20Screens%20Builder%20-%20Processes.png?alt=media&token=c261578d-58ba-4708-9552-bbdd1e399a63). The control deletes. Other controls on that ProcessMaker Screen page adjust their locations automatically.

## Settings <a id="settings"></a>

{% hint style="info" %}
Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](https://processmaker.gitbook.io/processmaker/processmaker-administration/permission-descriptions-for-users-and-groups#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Signature control has the following panel that contains settings:

* **​**[**Configuration** panel](signature-control-settings.md#configuration-panel-settings)

### Configuration Panel Settings <a id="configuration-panel-settings"></a>

Click the control while in [Design](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/screens-builder/screens-builder-modes#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Signature control in the **Variable** panel:

* ​[Variable Name](signature-control-settings.md#name)
* ​[Required](signature-control-settings.md#upload)

#### Variable Name <a id="name"></a>

Enter the alphanumeric name that identifies this [ProcessMaker Screen](https://processmaker.gitbook.io/processmaker/designing-processes/design-forms/what-is-a-form). This field is required.

 ![](../../../../.gitbook/assets/variable-name_signature-control.png)

#### Required <a id="upload"></a>

Select the **Required** setting to clarify that the signature is required to submit the form.

  ![](../../../../.gitbook/assets/required_signature-control.png)

## Related Topics

{% page-ref page="../../../../package-development-distribution/package-a-connector/signature-package.md" %}

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

{% page-ref page="google-places-control-settings.md" %}

{% page-ref page="saved-search-chart-control-settings.md" %}

{% page-ref page="rich-text-control-settings.md" %}

{% page-ref page="line-input-control-settings.md" %}

{% page-ref page="textarea-control-settings.md" %}

{% page-ref page="select-list-control-settings.md" %}

{% page-ref page="checkbox-control-settings.md" %}

{% page-ref page="date-picker-control-settings.md" %}

{% page-ref page="page-navigation-button-control-settings.md" %}

{% page-ref page="multi-column-button-control-settings.md" %}

{% page-ref page="loop-control-settings.md" %}

{% page-ref page="record-list-control-settings.md" %}

{% page-ref page="image-control-settings.md" %}

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="nested-screen-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}









