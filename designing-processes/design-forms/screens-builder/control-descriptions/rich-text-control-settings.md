---
description: Add a control that displays HTML-formatted text.
---

# Rich Text Control Settings

## Control Description

The Rich Text control displays HTML-formatted text and images. Use the What-You-See-Is-What-You-Get \(WYSIWYG\) editor to display a variety of text styles for the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant. Reference an image to display in the Rich Text control using HTML syntax.

Aside from rich text styles and images, the Rich Text control can display the following information regarding in-progress Requests:

* **Request data:** Display the value of another control in the same or different [ProcessMaker Screen](../../what-is-a-form.md) by referencing that control's **Variable Value** setting value using [mustache syntax](https://mustache.github.io/mustache.5.html): encapsulate the **Variable Name** setting value between  `{{` and `}}` that represent mustache syntax. In doing so, you are referencing Request data. Spaces surrounding the Request data reference are allowed. During the Request, the Rich Text control references the Request data to locate that control's value to display it in the Rich Text control.

  Include your own HTML syntax in the Rich Text control along with Request data references. Example: `Full Name: <p>{{ FullName }}</p>`

* **Magic Variable values:** Display the value of a [Magic Variable](../../../reference-global-variables-in-your-processmaker-assets.md) by referencing the Magic Variable using mustache syntax. Example: `{{ _user.fullname }}`. Spaces surrounding the Magic Variable reference are allowed.

{% hint style="info" %}
This control is available for the following Screen types:

* [Form](../types-for-screens.md#form) type
* [Display](../types-for-screens.md#display) type
* [Email](../types-for-screens.md#email) type \(requires the [Send Email package](../../../../package-development-distribution/package-a-connector/email.md)\)

See [Screen Types](../types-for-screens.md).
{% endhint %}

## Add the Control to a ProcessMaker Screen

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the [ProcessMaker Screen](../../what-is-a-form.md):

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Rich Text** icon![](../../../../.gitbook/assets/rich-text-control-screens-builder-processes.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Rich Text** icon into the Screen Builder canvas. Existing controls on the Screen Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen.  

   ![](../../../../.gitbook/assets/rich-text-control-screen-builder-processes.png)

6. Configure the Rich Text control. See [Settings](rich-text-control-settings.md#settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Rich Text control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Rich Text control in Preview mode](../../../../.gitbook/assets/rich-text-control-preview-screens-builder-processes.png)

## Move the Control on the Page

{% hint style="info" %}
Your ProcessMaker user account or group membership must have the following permissions to move a control in a ProcessMaker Screen page unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

After [adding a control to a ProcessMaker Screen page](rich-text-control-settings.md#add-the-control-to-a-processmaker-screen), you may move it to another location on that page such that it is above or below other controls placed on that page. A control cannot be moved to another [ProcessMaker Screen](../../what-is-a-form.md) page.

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
Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Rich Text control has the following panels that contain settings:

* \*\*\*\*[**Configuration** panel](rich-text-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Advanced** panel](rich-text-control-settings.md#advanced-panel-settings)

### Configuration Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below is the setting for the Rich Text control in the **Configuration** panel:

* [Content](rich-text-control-settings.md#content)
* [Render HTML from a Variable](rich-text-control-settings.md#render-html-from-a-variable)

#### Content

Enter the text and/or image to display in the Rich Text control using HTML syntax and/or [mustache syntax](https://mustache.github.io/mustache.5.html). **Rich text editor** is the default value. See this [control's description](rich-text-control-settings.md#control-description) for information how to use mustache syntax.  
![](../../../../.gitbook/assets/content-rich-text-control-screen-builder-processes.png) 

Alternatively, use the What-You-See-Is-What-You-Get \(WYSIWYG\) rich text editor to enter your text. Reference images in your content using HTML syntax. Your text and/or images display in the **Content** setting using HTML syntax.  
![](../../../../.gitbook/assets/rich-text-control-screen-builder-processes.png) 

#### Render HTML from a Variable

Select the **Render HTML from a Variable** setting to not show HTML syntax, but instead render the HTML syntax. If the **Render HTML from a Variable** setting is not selected, then the Rich Text control displays the HTML syntax. If a Request variable from which the Rich Text control references its data contains HTML syntax, select this setting to render that HTML.   
![](../../../../.gitbook/assets/rich-text-control-render-html-from-variable-screen-builder-designer.png) 

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Rich Text control in the **Advanced** panel:

* [Visibility Rule](rich-text-control-settings.md#visibility-rule)
* [CSS Selector Name](rich-text-control-settings.md#css-selector-name)

#### Visibility Rule

Enter an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.  
![](../../../../.gitbook/assets/visibility-rule-screen-builder-processes.png) 

{% hint style="info" %}
To make this control hidden until another control contains a value, enter the **Variable Name** setting value of that control to this control's **Visibility Rule** setting.
{% endhint %}

#### CSS Selector Name

Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.  
![](../../../../.gitbook/assets/css-selector-name-screen-builder-processes.png) 

## Related Topics

{% page-ref page="../types-for-screens.md" %}

{% page-ref page="../screens-builder-modes.md" %}

{% page-ref page="../validate-your-screen.md" %}

{% page-ref page="./" %}

{% page-ref page="signature-control-settings.md" %}

{% page-ref page="google-places-control-settings.md" %}

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

