---
description: Add a control that displays an image.
---

# Image Control Settings

## Control Description

The Image control has the following functionality:

* The Image control displays a specified image that is PNG, GIF, or JPG file types.
* The image control may reference another control's Variable Name setting to display its value, such as to display the signature saved in a [Signature](signature-control-settings.md) control. The Signature control saves the signature as a PNG image.

displays an image that is PNG, GIF, or JPG file types.

{% hint style="info" %}
This control is only available for the following Screen types:

* [Form](../types-for-screens.md#form) type
* [Display](../types-for-screens.md#display) type

See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the ProcessMaker Screen:

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Image** icon![](../../../../.gitbook/assets/image-control-screens-builder-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Image** icon into the Screen Builder canvas. Existing controls on the Screen Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen.  

   ![](../../../../.gitbook/assets/image-control-placed-screens-builder-processes.png)

6. Configure the Image control. See [Settings](image-control-settings.md#settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is an Image control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Image control in Preview mode](../../../../.gitbook/assets/image-control-preview-screens-builder-processes.png)

## Move the Control on the Page

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to move a control in a ProcessMaker Screen page unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

After [adding a control to a ProcessMaker Screen page](image-control-settings.md#add-the-control-to-a-processmaker-screen), you may move it to another location on that page such that it is above or below other controls placed on that page. A control cannot be moved to another [ProcessMaker Screen](../../what-is-a-form.md) page.

Follow these steps to move a control to another location on that ProcessMaker Screen page:

1. Place your cursor anywhere on the control not displaying the **Duplicate Control**![](../../../../.gitbook/assets/copy-duplicate-control-icon-screen-builder-processes.png)or **Delete Control**![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)buttons.
2. Hold your cursor, then drag the control above or below other controls on that ProcessMaker Screen page. Screen Builder previews where the control would display on the page based on how you position the control above or below other controls. If the control cannot be placed in a location because your cursor is above an existing control or too far to the left or right of the page, the![](../../../../.gitbook/assets/movement-not-allowed-icon-screen-builder-processes.png)icon displays in the preview.
3. Place the control at the location on the page you want it. The other control\(s\) on the page automatically adjust position.

## Copy the Control with its Settings

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to copy a control in a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Copying a control also copies the current settings of that control. The copied control displays below other controls placed on that [ProcessMaker Screen](../../what-is-a-form.md) page.

Follow these steps to copy a control:

1. Select the control to be copied.
2. Click the **Duplicate Control** button![](../../../../.gitbook/assets/copy-duplicate-control-icon-screen-builder-processes.png). The control copies with its current settings, and then displays below other controls placed on that page.

## Delete the Control from a ProcessMaker Screen

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to delete a control from a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

{% hint style="warning" %}
Deleting a control also deletes configuration for that control. If you add another control, it will have default settings.
{% endhint %}

Follow these steps to delete a control from a [ProcessMaker Screen](../../what-is-a-form.md) page:

1. Select the control to be deleted.
2. Click the **Delete** button![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png). The control deletes. Other controls on that ProcessMaker Screen page adjust their locations automatically.

## Settings

{% hint style="info" %}
### Permissions Required

Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Image control has the following panels that contain settings:

* \*\*\*\*[**Configuration** panel](image-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Design** panel](image-control-settings.md#design-panel-settings)
* \*\*\*\*[**Advanced** panel](image-control-settings.md#advanced-panel-settings)

### Configuration Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Image control in the **Configuration** panel:

* [Name](image-control-settings.md#name)
* [Upload](image-control-settings.md#upload)
* [Preview](image-control-settings.md#preview)
* [Render Image from a Variable Name](image-control-settings.md#render-image-from-a-variable-name)
* [Helper Text](image-control-settings.md#helper-text)

#### Name

Enter the alphanumeric name that identifies the image in this [ProcessMaker Screen](../../what-is-a-form.md).  
![](../../../../.gitbook/assets/image-control-name-screen-builder-processes.png) 

#### Upload

Click the **Upload** button to browse for the PNG, GIF, or JPG file type image to upload to the Image control.

#### Preview

Preview the uploaded image.  
![](../../../../.gitbook/assets/image-control-upload-preview-screen-builder-processes.png) 

#### Render Image from a Variable Name

Select the **Render image from a variable name** setting to render as an image the content of another control by referencing that control's **Variable Name** setting value in [mustache syntax](https://mustache.github.io/mustache.5.html). For example, render an image of a file uploaded using the [File Upload](file-upload-control-settings.md) control.  
![](../../../../.gitbook/assets/render-image-from-a-variable-name-not-selected-image-control-process-modeler-designer.png) 

After selecting the **Render image from a variable name** setting, the **Variable Name** setting displays.  
![](../../../../.gitbook/assets/render-image-from-a-variable-name-selected-image-control-process-modeler-designer.png) 

In the **Variable Name** setting, enter in mustache syntax the **Variable Name** setting value of the content to display as an image in the Image control. For example, to display a digital signature entered into a [Signature](signature-control-settings.md) control with a **Variable Name** setting of `SignDocument`, enter `{{ SignDocument }}`. If the Signature control has been signed, that digital signature displays in the Image control when it displays.

#### Helper Text

Enter text that provides additional guidance on this control's use. This setting has no default value.  
![](../../../../.gitbook/assets/helper-text-screen-builder-processes.png) 

### Design Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Design** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Image control in the **Design** panel:

* [Height](image-control-settings.md#height)
* [Width](image-control-settings.md#width)

#### Height

Enter the height of the uploaded image in pixels. If the [**Width**](image-control-settings.md#width) setting has no value, the Image control adjusts the uploaded image to the **Height** setting value.  
![](../../../../.gitbook/assets/image-control-height-screen-builder-processes.png) 

#### Width

Enter the width of the uploaded image in pixels. If the [**Height**](image-control-settings.md#height) setting has no value, the Image control adjusts the uploaded image to the **Width** setting value.  
![](../../../../.gitbook/assets/image-control-width-screen-builder-processes.png) 

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Image control in the **Advanced** panel:

* [Visibility Rule](image-control-settings.md#visibility-rule)
* [CSS Selector Name](image-control-settings.md#css-selector-name)

#### Visibility Rule

Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.  
![](../../../../.gitbook/assets/visibility-rule-screen-builder-processes.png) 

{% hint style="info" %}
To make this control hidden until another control contains a value, enter the **Variable Name** setting value of that control to this control's **Visibility Rule** setting.
{% endhint %}

#### CSS Selector Name

Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.  
![](../../../../.gitbook/assets/css-selector-name-screen-builder-processes.png) 

## Related Topics <a id="related-topics"></a>

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="signature-control-settings.md" %}

{% page-ref page="google-places-control-settings.md" %}

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

{% page-ref page="submit-button-control-settings.md" %}

{% page-ref page="nested-screen-control-settings.md" %}

{% page-ref page="file-upload-control-settings.md" %}

{% page-ref page="file-download-control-settings.md" %}

{% page-ref page="validation-rules-for-validation-control-settings.md" %}

{% page-ref page="expression-syntax-components-for-show-if-control-settings.md" %}

