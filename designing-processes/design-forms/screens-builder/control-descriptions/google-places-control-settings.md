---
description: >-
  Add a control from which the Request participant can auto-complete an entered
  address, location, or business.
---

# Google Places Control Settings

## Control Description

The Google Places control is a text field the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant uses to start entering an address, location, or business name. The Google Places control uses the Google API to auto-complete that address or location. The Google Place control stores the selected address in the Request data as well as all the returned data from the Google API.

{% hint style="info" %}
This control is only available for [Form](../types-for-screens.md#form)-type ProcessMaker Screens. See [Screen Types](../types-for-screens.md).
{% endhint %}

Below are a few ways to use the Google Places control:

* Allow Request participants to easily enter a shipping or billing address. ![](../../../../.gitbook/assets/google-places-control-address-example-package.png) 
* Enter a business name into the Google Places control to select a business location. ![](../../../../.gitbook/assets/google-places-control-business-example-package.png) 
* Enter well-known monuments or international airport names to get their addresses or locations when requesting to travel. ![](../../../../.gitbook/assets/google-places-control-airport-example-package.png) 

## Add the Control to a ProcessMaker Screen

{% hint style="info" %}
### ProcessMaker Package Required

To add a Google Places control to a [ProcessMaker Screen](../../what-is-a-form.md), the [Google Places package](../../../../package-development-distribution/package-a-connector/google-places-package.md) must be installed in your ProcessMaker instance. The Google Places control and the Google Places [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Google Places package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to add a control to a ProcessMaker Screen unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to add this control to the ProcessMaker Screen:

1. [Create a new ProcessMaker Screen](../../manage-forms/create-a-new-form.md) or click the **Edit** icon![](../../../../.gitbook/assets/edit-icon.png)to edit the selected Screen. The ProcessMaker Screen is in [Design mode](../screens-builder-modes.md#editor-mode).
2. View the ProcessMaker Screen page to which to add the control.
3. Locate the **Google Places** icon![](../../../../.gitbook/assets/google-places-icon-screen-builder-package.png)in the panel to the left of the Screen Builder canvas.
4. Drag the **Google Places** icon into the Screen Builder canvas. Existing controls on the Screen Builder canvas adjust positioning based on where you drag the control.
5. Place into the Screen Builder canvas where you want the control to display on the ProcessMaker Screen. ![](../../../../.gitbook/assets/google-places-control-in-preview-mode-package.png) 
6. Configure the Google Places control. See [Settings](google-places-control-settings.md#settings).
7. Validate that the control is configured correctly. See [Validate Your Screen](../validate-your-screen.md#validate-a-processmaker-screen).

Below is a Google Places control in [Preview mode](../screens-builder-modes.md#preview-mode).

![Google Places control in Preview mode](../../../../.gitbook/assets/google-places-control-business-example-package.png)

## Move the Control on the Page

{% hint style="info" %}
### ProcessMaker Package Required

To move a Google Places control in a [ProcessMaker Screen](../../what-is-a-form.md) page, the [Google Places package](../../../../package-development-distribution/package-a-connector/google-places-package.md) must be installed in your ProcessMaker instance. The Google Places control and the Google Places [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Google Places package can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to move a control in a ProcessMaker Screen page unless your user account has the **Make this user a Super Admin** setting selected:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

After [adding a control to a ProcessMaker Screen page](google-places-control-settings.md#add-the-control-to-a-processmaker-screen), you may move it to another location on that page such that it is above or below other controls placed on that page. A control cannot be moved to another [ProcessMaker Screen](../../what-is-a-form.md) page.

Follow these steps to move a control to another location on that ProcessMaker Screen page:

1. Place your cursor anywhere on the control not displaying the **Duplicate Control**![](../../../../.gitbook/assets/copy-duplicate-control-icon-screen-builder-processes.png)or **Delete Control**![](../../../../.gitbook/assets/delete-screen-control-screens-builder-processes.png)buttons.
2. Hold your cursor, then drag the control above or below other controls on that ProcessMaker Screen page. Screen Builder previews where the control would display on the page based on how you position the control above or below other controls. If the control cannot be placed in a location because your cursor is above an existing control or too far to the left or right of the page, the![](../../../../.gitbook/assets/movement-not-allowed-icon-screen-builder-processes.png)icon displays in the preview.
3. Place the control at the location on the page you want it. The other control\(s\) on the page automatically adjust position.

## Copy the Control with its Settings

{% hint style="info" %}
### ProcessMaker Package Required

To copy a Google Places control, the [Google Places package](../../../../package-development-distribution/package-a-connector/google-places-package.md) must be installed in your ProcessMaker instance. The Google Places control and the Google Places [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Google Places package can be installed in your ProcessMaker instance.

### Permissions Required

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
### ProcessMaker Package Required

To delete a Google Places control, the [Google Places package](../../../../package-development-distribution/package-a-connector/google-places-package.md) must be installed in your ProcessMaker instance. The Google Places control and the Google Places [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Google Places package can be installed in your ProcessMaker instance.

### Permissions Required

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
### ProcessMaker Package Required

To edit a Google Places control, the [Google Places package](../../../../package-development-distribution/package-a-connector/google-places-package.md) must be installed in your ProcessMaker instance. The Google Places control and the Google Places [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Google Places package can be installed in your ProcessMaker instance.

### Permissions Required

Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Google Places control has the following panels that contain settings:

* \*\*\*\*[**Variable** panel](google-places-control-settings.md#variable-panel-settings)
* \*\*\*\*[**Configuration** panel](google-places-control-settings.md#configuration-panel-settings)
* \*\*\*\*[**Design** panel](google-places-control-settings.md#design-panel-settings)
* \*\*\*\*[**Advanced** panel](google-places-control-settings.md#advanced-panel-settings)

### Variable Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Variable** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Line Input control in the **Variable** panel:

* [Variable Name](google-places-control-settings.md#variable-name)
* [Label](google-places-control-settings.md#label)
* [Validation Rules](google-places-control-settings.md#validation-rules)

#### Variable Name

Edit the default **Variable Name** setting value for this control if necessary. The **Variable Name** setting value represents data in this control during [Requests](../../../../using-processmaker/requests/what-is-a-request.md). Ensure that the **Variable Name** setting value is a unique name from other controls in this [ProcessMaker Screen](../../what-is-a-form.md) and contains at least one letter. This is a required setting.  
![](../../../../.gitbook/assets/google-places-control-variable-name-screen-builder-package-designer.png) 

Use the **Variable Name** setting value in the following ways:

* Reference this control by its **Variable Name** setting's value. The **Data Preview** panel in [Preview mode](../screens-builder-modes.md#preview-mode) corresponds the Google Places control's textual content with that Google Places control's **Variable Name** value. In the example below, `GooglePlacesControl` is the **Variable Name** setting's value. ![](../../../../.gitbook/assets/google-places-preview-screens-builder-package-designer.png) 
* Reference this control's value in a different Screen Builder control. To do so, use [mustache syntax](https://mustache.github.io/mustache.5.html) and reference this control's **Variable Name** value in the target control. Example: `{{ GooglePlacesControl }}`. See [Reference Request Data from the Google Places Control in Other Controls](google-places-control-settings.md#reference-request-data-from-the-google-places-control-in-other-controls).
* Reference this value in [**Visibility Rule** setting expressions](expression-syntax-components-for-show-if-control-settings.md).

#### Label

Edit the default label that displays for this control if necessary. **New Google Places** is the default value.  
![](../../../../.gitbook/assets/google-places-control-label-screen-builder-package-designer.png) 

#### Validation Rules

Enter the validation rule\(s\) the Request participant must comply with to properly enter a valid value into this control. This setting has no default value. If there are no configured validation rules the following message displays: **No validation rule\(s\)**. See [Validation Rules for "Validation" Control Settings](validation-rules-for-validation-control-settings.md).  
![](../../../../.gitbook/assets/validation-rules-screen-builder-processes.png) 

Follow these steps to add a validation rule to this control:

1. Access the [**Variable** panel for this control](google-places-control-settings.md#variable-panel-settings) while in [Design](../screens-builder-modes.md#design-mode) mode, and then locate the **Validation Rules** setting.
2. Click the **Add Rule** button. The **Select** drop-down menu displays. ![](../../../../.gitbook/assets/validation-rules-select-screen-builder-processes.png) 
3. Select the rule that this control validates against.
4. Click **Save**. Parameters for the selected rule display. Parameter settings display which ones are required to properly configure the rule.
5. Enter the parameter settings that this control uses to validate against. See [Validation Rule Settings](validation-rules-for-validation-control-settings.md#validation-rule-settings), and then locate the validation rule for its parameters.

Follow these steps to edit a validation rule for this control:

1. Access the [**Variable** panel for this control](google-places-control-settings.md#variable-panel-settings) while in [Design](../screens-builder-modes.md#design-mode) mode, and then locate the **Validation Rules** setting.
2. Click the **Edit** icon![](../../../../.gitbook/assets/edit-email-notification-icon-task-process-modeler-processes.png)for the validation rule to edit if that rule can be edited. Validation rules that do not have parameters cannot be edited. The parameter settings for that validation rule displays.
3. Edit the parameter settings that this control uses to validate against. See [Validation Rule Settings](validation-rules-for-validation-control-settings.md#validation-rule-settings), and then locate the validation rule for its parameters.

Follow these steps to delete a validation rule for this control:

1. Access the [**Variable** panel for this control](google-places-control-settings.md#variable-panel-settings) while in [Design](../screens-builder-modes.md#design-mode) mode, and then locate the **Validation Rules** setting.
2. Click the **Delete** icon![](../../../../.gitbook/assets/delete-email-notification-icon-task-process-modeler-processes.png)for the validation rule to delete. A message displays to confirm deletion of the validation rule.
3. Click **Delete**.

### Configuration Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Configuration** panel that is on the right-side of the Screen Builder canvas.

Below are the settings for the Google Places control in the **Configuration** panel:

* [Placeholder Text](google-places-control-settings.md#placeholder-text)
* [Helper Text](google-places-control-settings.md#helper-text)
* [Enable Maps](google-places-control-settings.md#enable-maps)
  * [Hide Address Input](google-places-control-settings.md#hide-address-input)
  * [Enable Geolocate](google-places-control-settings.md#enable-geolocate)
  * [Enable Zoom Control](google-places-control-settings.md#enable-zoom-control)
  * * [Center Map](google-places-control-settings.md#center-map)

#### Placeholder Text

Enter the placeholder text that displays in this control when no value has been provided. This setting has no default value.  
![](../../../../.gitbook/assets/placeholder-text-screen-builder-processes.png) 

#### Helper Text

Enter text that provides additional guidance on this control's use. This setting has no default value.  
![](../../../../.gitbook/assets/helper-text-screen-builder-processes.png)

#### Enable Maps

Select to enable Google Maps in this ProcessMaker Screen. This setting is disabled by default.  
![](../../../../.gitbook/assets/enable-maps-google-places-control-package-screen-builder-designer.png) 

The following settings are available below the **Enable Maps** setting to configure the Google Map settings and the map's geographical location when the map displays:

* [Hide Address Input](google-places-control-settings.md#hide-address-input)
* [Enable Geolocate](google-places-control-settings.md#enable-geolocate)
* [Enable Zoom Control](google-places-control-settings.md#enable-zoom-control)
* * [Center Map](google-places-control-settings.md#center-map)

#### Hide Address Input

Hide the address bar that displays above the map to enter an address to display in the map. This setting is disabled by default to display the address bar. Note that this setting is not available unless the [**Enable Maps** setting](google-places-control-settings.md#enable-maps) is selected.  
![](../../../../.gitbook/assets/hide-address-input-google-places-control-package-screen-builder-designer.png) 

#### Enable Geolocate

Allow the Request participant to select a location in the map. When this setting is disabled, the [**Center Map** setting](google-places-control-settings.md#center-map) is available to enter the geo-location by longitude and latitude to center the map view. The **Enable Geolocate** setting is disabled by default. Note that the **Enable Geolocate** setting is not available unless the [**Enable Maps** setting](google-places-control-settings.md#enable-maps) is selected.  
![](../../../../.gitbook/assets/enable-geolocate-google-places-control-package-screen-builder-designer.png) 

#### Enable Zoom Control



#### Center Map



### Design Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Design** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Google Places control in the **Design** panel:

* [Text Color](google-places-control-settings.md#text-color)
* [Background Color](google-places-control-settings.md#background-color)

#### Text Color

Select the text color that displays for this control. Optionally, click the **Clear Color Selection** option to remove the selected color.  
![](../../../../.gitbook/assets/text-color-screen-builder-processes.png) 

#### Background Color

Select the background color that displays for this control. Optionally, click the **Clear Color Selection** option to remove the selected color.  
![](../../../../.gitbook/assets/background-color-screen-builder-processes.png) 

### Advanced Panel Settings

Click the control while in [Design](../screens-builder-modes.md#design-mode) mode, and then click the **Advanced** panel that is on the right-side of the Screen Builder canvas.

Below are settings for the Google Places control in the **Advanced** panel:

* [Visibility Rule](google-places-control-settings.md#visibility-rule)
* [CSS Selector Name](google-places-control-settings.md#css-selector-name)

#### Visibility Rule

Specify an expression that indicates the condition\(s\) under which this control displays. See [Expression Syntax Components for "Visibility Rule" Control Settings](expression-syntax-components-for-show-if-control-settings.md#expression-syntax-components-for-show-if-control-settings). If this setting does not have an expression, then this control displays by default.  
![](../../../../.gitbook/assets/visibility-rule-screen-builder-processes.png) 

{% hint style="info" %}
To make this control hidden until another control contains a value, enter the **Variable Name** setting value of that control to this control's **Visibility Rule** setting.
{% endhint %}

#### CSS Selector Name

Enter the value to represent this control in custom CSS syntax when in [Custom CSS](../add-custom-css-to-a-screen.md#add-custom-css-to-a-processmaker-screen) mode. As a best practice, use the same **CSS Selector Name** value on different controls of the same type to apply the same custom CSS style to all those controls.  
![](../../../../.gitbook/assets/css-selector-name-screen-builder-processes.png) 

## Reference Request Data from the Google Places Control in Other Controls

{% hint style="info" %}
### ProcessMaker Package Required

To reference Request data from a Google Places control, the [Google Places package](../../../../package-development-distribution/package-a-connector/google-places-package.md) must be installed in your ProcessMaker instance. The Google Places control and the Google Places [package](../../../../package-development-distribution/first-topic.md) are not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Google Places package can be installed in your ProcessMaker instance.

### Permissions Required

Your user account or group membership must have the following permissions to edit a ProcessMaker Screen control:

* Screens: Edit Screens
* Screens: View Screens

See the ProcessMaker [Screens](../../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#screens) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

The Google Places control receives its source data from the Google API after the [Request](../../../../using-processmaker/requests/what-is-a-request.md) participant selects an address or location. The Google Places control stores the entire JSON data object that the Google API returns in the Request data.

Follow these guidelines to reference [JSON object](../../../../json-the-foundation-of-request-data/what-is-json.md#json-objects) key names and/or [arrays](../../../../json-the-foundation-of-request-data/what-is-json.md#json-arrays) from Google's returned data object in other [ProcessMaker Screen](../../what-is-a-form.md) controls.

{% hint style="info" %}
To reference other data from the Google JSON data object that the Google API returns not documented here, see [Google's documentation on how to reference autocomplete results](https://developers.google.com/places/web-service/autocomplete#place_autocomplete_results).
{% endhint %}

### Reference the Entire Selected Address or Location

Reference the following JSON key name for the entire selected address or location that includes the entire value in the Google Places control as indicated in [JSON dot notation](../../../../json-the-foundation-of-request-data/what-is-json.md#json-dot-notation):

```text
variable_name.0.predictions.0.description
```

`variable_name` represents the [**Variable Name** setting](google-places-control-settings.md#variable-name) value for the Google Places control being referenced.

#### Example of the Entire Selected Address or Location

Below is the Google Places control selection for this example. The Google Places control's **Variable Name** setting value is the default `google_places_1`.

![Google Places control example](../../../../.gitbook/assets/google-places-control-business-example-package.png)

If a [Rich Text](rich-text-control-settings.md) control references this Google Places control's entire selected address, use the following syntax in the Rich Text control's content using [mustache syntax](https://mustache.github.io/mustache.5.html):

```text
{{ google_places_1.0.predictions.0.description }}
```

### Reference the Main Text for the Selected Address or Location

Reference the following JSON key name for the main text for the selected address or location as indicated in [JSON dot notation](../../../../json-the-foundation-of-request-data/what-is-json.md#json-dot-notation):

```text
variable_name.0.predictions.0.description.0.structured_formatting.0.main_text
```

`variable_name` represents the [**Variable Name** setting](google-places-control-settings.md#variable-name) value for the Google Places control being referenced.

The Rich Text control displays the following during a Request:

```text
"ProcessMaker"
```

#### Example of the Main Text for the Selected Address or Location

Below is the Google Places control selection for this example. The Google Places control's **Variable Name** setting value is the default `google_places_1`.

![Google Places control example](../../../../.gitbook/assets/google-places-control-business-example-package.png)

If a [Rich Text](rich-text-control-settings.md) control references this Google Places control's main text for the selected address, use the following syntax in the Rich Text control's content using [mustache syntax](https://mustache.github.io/mustache.5.html):

```text
{{ google_places_1.0.predictions.0.description.0.structured_formatting.0.main_text }}
```

The Rich Text control displays the following during a Request:

```text
"ProcessMaker"
```

### Reference the Secondary Text for the Selected Address or Location

Reference the following JSON key name for the secondary text for the selected address or location as indicated in [JSON dot notation](../../../../json-the-foundation-of-request-data/what-is-json.md#json-dot-notation):

```text
variable_name.0.predictions.0.description.0.structured_formatting.0.secondary_text
```

`variable_name` represents the [**Variable Name** setting](google-places-control-settings.md#variable-name) value for the Google Places control being referenced.

The Rich Text control displays the following during a Request:

```text
"West Main Street, Durham, NC, USA"
```

#### Example of the Secondary Text for the Selected Address or Location

Below is the Google Places control selection for this example. The Google Places control's **Variable Name** setting value is the default `google_places_1`.

![Google Places control example](../../../../.gitbook/assets/google-places-control-business-example-package.png)

If a [Rich Text](rich-text-control-settings.md) control references this Google Places control's secondary text for the selected address, use the following syntax in the Rich Text control's content using [mustache syntax](https://mustache.github.io/mustache.5.html):

```text
{{ google_places_1.0.predictions.0.description.0.structured_formatting.0.secondary_text }}
```

The Rich Text control displays the following during a Request:

```text
"West Main Street, Durham, NC, USA"
```

### Reference the Place Type\(s\) for the Selected Address or Location

Reference the following JSON array for the [place type\(s\)](https://developers.google.com/places/web-service/supported_types) for the selected address or location as indicated in [JSON dot notation](../../../../json-the-foundation-of-request-data/what-is-json.md#json-dot-notation):

```text
variable_name.0.predictions.0.description.0.types
```

`variable_name` represents the [**Variable Name** setting](google-places-control-settings.md#variable-name) value for the Google Places control being referenced.

The Rich Text control displays the following during a Request:

```text
"point_of_interest", "establishment"
```

#### Example of the Secondary Text for the Selected Address or Location

Below is the Google Places control selection for this example. The Google Places control's **Variable Name** setting value is the default `google_places_1`.

![Google Places control example](../../../../.gitbook/assets/google-places-control-business-example-package.png)

If a [Rich Text](rich-text-control-settings.md) control references this Google Places control's secondary text for the selected address, use the following syntax in the Rich Text control's content using [mustache syntax](https://mustache.github.io/mustache.5.html):

```text
{{ google_places_1.0.predictions.0.description.0.types }}
```

The Rich Text control displays the following during a Request:

```text
"point_of_interest", "establishment"
```

## Related Topics

{% page-ref page="../../../../package-development-distribution/first-topic.md" %}

{% page-ref page="signature-control-settings.md" %}

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

