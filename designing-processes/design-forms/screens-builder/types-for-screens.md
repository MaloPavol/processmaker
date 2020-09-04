---
description: Understand the types of ProcessMaker Screens you can use in Screen Builder.
---

# Screen Types

## Overview

ProcessMaker provides the following ProcessMaker Screen types. Note that not all of these ProcessMaker Screen types are available in the ProcessMaker open-source edition.

### Form

Use the Form type to design interactive and complex forms. Below are a few ways that Request participants might interact with a digital form:

* Enter information, such as name and email address, to apply for a loan.
* Approve the department budget.
* Upload or download documents.

All ProcessMaker Screen [controls](control-descriptions/) in Screen Builder are available for the Form type.

### Display

Use the Display type to display information or allow [Request](../../../using-processmaker/requests/what-is-a-request.md) participants to download files. The Display type has limited functionality compared the Form type. The Display type provides the following controls in Screen Builder:

* [Saved Search Chart](control-descriptions/saved-search-chart-control-settings.md) control \(requires the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md)\)
* [Rich Text](control-descriptions/rich-text-control-settings.md) control
* [Multicolumn / Table](control-descriptions/multi-column-button-control-settings.md) control
* [Record List](control-descriptions/record-list-control-settings.md) control
* [Image](control-descriptions/image-control-settings.md) control
* [File Download](control-descriptions/file-download-control-settings.md) control

### Email

{% hint style="info" %}
The [Send Email package](../../../package-development-distribution/package-a-connector/email.md) must be installed in your ProcessMaker instance to use the Email-type ProcessMaker Screen. The Email package is not available in the ProcessMaker open-source edition.
{% endhint %}

Use the Email type to compose the email body for email messages to be used with the [Send Email connector](../../process-design/model-processes-using-connectors/available-connectors-from-processmaker/email-connector.md). The Email type provides the following controls in Screen Builder:

* [Rich Text](control-descriptions/rich-text-control-settings.md) control
* [Record List](control-descriptions/record-list-control-settings.md) control

{% hint style="info" %}
Do not use a ProcessMaker Screen type other than the Email type when using the [Send Email](../../process-design/model-processes-using-connectors/available-connectors-from-processmaker/email-connector.md) connector. Otherwise, you will not be able to reference any ProcessMaker Screens from the Email control in Process Modeler to specify which Screen to use for the email body content.
{% endhint %}

### Advanced

{% hint style="info" %}
The [Advanced Screen package](../../../package-development-distribution/package-a-connector/advanced-screen-package.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Advanced Screen [package](../../../package-development-distribution/first-topic.md) can be installed in your ProcessMaker instance.
{% endhint %}

Use the Advanced Screen package to design your own advanced forms using HTML syntax and JavaScript. This is an ideal solution for highly technical designers to create their own form designs and functionality.

When the Advanced Screen package is installed in your ProcessMaker instance, create a new ProcessMaker Screen using the Advanced Screen type. Screen Builder displays a template that contains a sample Advanced-type ProcessMaker Screen.

{% hint style="warning" %}
The Advanced Screen type is a highly technical solution only for advanced HTML and JavaScript designers intended only for specific solutions. ProcessMaker Support cannot support nor troubleshoot advanced forms.

As a best practice when developing Advanced Screens, design your Screen outside of ProcessMaker to test its functionality, and then copy-and-paste your code into Screen Builder to test you Screen in Requests, Tasks or [ProcessMaker Collections](../../../package-development-distribution/package-a-connector/collections.md). The Advanced Screen type cannot be previewed.

Please use at your own risk.
{% endhint %}

Use this template to study how to design your custom form.

```text
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Advanced screen</h5>
            <form onsubmit="submitForm(event)">
                <div class="form-group">
                    <input class="form-control" type="text" name="email" placeholder="email" id="email">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
    <!--Do Not Delete Below -->
    <script>/** LOAD_PM_VARIABLES **/</script>
    <!--Do Not Delete Above -->
    <script defer>
        axios.defaults.headers.common['X-CSRF-TOKEN'] = PM_CSRF_TOKEN;
        axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';

        // Load values from request data
        $("#email").val(PM_REQUEST_DATA.email);

        /**
         * Submit the form and complete the task
         */
        function submitForm(event) {
            event.preventDefault();
            axios.put(`/api/1.0/tasks/${PM_TASK_ID}`, {
                status: 'COMPLETED',
                data: {
                    email: $("#email").val(),
                }
            });
        }
    </script>
</body>
</html>
```

## Related Topics

{% page-ref page="what-is-screens-builder.md" %}

{% page-ref page="screens-builder-modes.md" %}

{% page-ref page="validate-your-screen.md" %}

{% page-ref page="control-descriptions/" %}

{% page-ref page="add-a-new-page-to-a-screen.md" %}

{% page-ref page="preview-a-screen.md" %}

{% page-ref page="manage-computed-properties/" %}

{% page-ref page="add-custom-css-to-a-screen.md" %}

{% page-ref page="manage-watchers/" %}

{% page-ref page="how-to-use-the-undo-and-redo-buttons-in-screen-builder.md" %}

{% page-ref page="save-a-screen.md" %}

{% page-ref page="best-practices.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/email.md" %}

{% page-ref page="../../../package-development-distribution/package-a-connector/advanced-screen-package.md" %}

{% page-ref page="../../../package-development-distribution/first-topic.md" %}

