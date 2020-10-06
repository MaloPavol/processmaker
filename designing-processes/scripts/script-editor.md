---
description: >-
  Develop and test your ProcessMaker Script in a secure and isolated
  environment.‌
---

# Script Editor

## Overview <a id="overview"></a>

{% hint style="info" %}
Your user account or group membership must have the following permissions to create or edit a [ProcessMaker Script](https://app.gitbook.com/@processmaker/s/processmaker/~/drafts/-M8lHWfe3NHeZQ-3bGbC/designing-processes/scripts/what-is-a-script/@merged):

* Scripts: View Scripts
* Scripts: Create Scripts
* Scripts: Edit Scripts

See the ProcessMaker [Scripts](https://app.gitbook.com/@processmaker/s/processmaker/~/drafts/-M8lHWfe3NHeZQ-3bGbC/processmaker-administration/permission-descriptions-for-users-and-groups#scripts/@merged) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Use Script Editor to develop and test your [ProcessMaker Scripts](what-is-a-script.md). Any ProcessMaker Script can be used in any Process in your organization developed using [programming languages that Script Editor supports](what-is-a-script.md#supported-programming-languages).‌

ProcessMaker Scripts run securely and in isolation from within [Docker](https://www.docker.com/) containers called ProcessMaker [Script Executors](../../processmaker-administration/script-executor-management/what-is-a-script-executor.md). The ProcessMaker Script Executor for each supported programming language contains the ProcessMaker Software Development Kit \(SDK\) that supports extensibility to provide programmatic interaction with ProcessMaker. When the ProcessMaker instance calls a ProcessMaker Script to run, the ProcessMaker Script Executor for that programming language creates a [Docker container](https://www.docker.com/resources/what-container) corresponding with that programming language, runs the Script, and then destroys the Docker container. This ensures that any malicious script that anyone in your organization might inadvertently introduce to ProcessMaker does not affect the ProcessMaker instance or its hosting environment: Docker containers cannot access them. Furthermore, Docker containers cannot listen for inbound connections; therefore, a Docker container cannot be accessed externally.

ProcessMaker Scripts are developed and tested in the same environment.

Access Script Editor in the following ways:

* ​[Create a new ProcessMaker Script.](https://app.gitbook.com/@processmaker/s/processmaker/~/drafts/-M8lHWfe3NHeZQ-3bGbC/designing-processes/scripts/manage-scripts/create-a-new-script#create-a-new-processmaker-script/@merged)​
* ​[Edit an existing ProcessMaker Script.](https://app.gitbook.com/@processmaker/s/processmaker/~/drafts/-M8lHWfe3NHeZQ-3bGbC/designing-processes/scripts/manage-scripts/edit-a-script#edit-a-processmaker-script/@merged)​

‌Below is Script Editor displaying a ProcessMaker Script written in PHP.‌

![Script Editor](https://gblobscdn.gitbook.com/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-Lt5KhCiBoVJXDez3lqh%2F-Lt5Lsgp_X4hBlF61puK%2FScripts%20Editor%20-%20Processes.png?alt=media&token=f01491c9-c66c-481e-8c48-36a1ac65e1f9)

## Script Editor Usage Guidelines

‌Follow these guidelines to develop and test [ProcessMaker Scripts](what-is-a-script.md) in Script Editor.‌

### Develop Your ProcessMaker Script <a id="develop-your-processmaker-script"></a>

‌Develop the ProcessMaker Script below the script's name and language description. Use the scroll panel to navigate your code not currently displayed. This is useful especially when you are editing a long ProcessMaker Script.‌

### Enter Mock Request Data Coming Into Your ProcessMaker Script <a id="mock-request-data-coming-into-the-processmaker-script"></a>

‌Use the **Sample Input** panel to mock [Request data](../../json-the-foundation-of-request-data/what-is-request-data.md) that comes into your ProcessMaker Script to test how the Script runs using Request data you expect. 

Define the variables in a [ProcessMaker Screen](../design-forms/what-is-a-form.md) when you configure its controls. See [information about each control](../design-forms/screens-builder/control-descriptions/).‌

Follow these guidelines to mock Request data coming into your ProcessMaker Script:‌

1. [​Open the ProcessMaker Screen](../design-forms/manage-forms/view-all-forms.md#view-all-scripts) in which to view its JSON data model.
2. Enter [Preview mode](../design-forms/screens-builder/screens-builder-modes.md#preview-mode) on the ProcessMaker Screen page to view its JSON data model. Click the **Preview** button from Screen Builder's top menu to enter Preview mode.
3. Enter values into the control settings as if you were using the ProcessMaker Screen in a Request. In the **Data Preview** panel, the JSON data model displays the key-value pairs in each object element. The keys' values are those you enter in the ProcessMaker Screen preview. Understand what the key names are. Each key is derived from a ProcessMaker Screen control's **Variable Name** setting value. Use these key names as variables in your ProcessMaker Script. The **Variable Name** setting values become part of the Request data and contain the content that Request participants enter into that ProcessMaker Screen during a Request. Mock these **Variable Name** setting values as input data to your ProcessMaker Script.
4. After you have entered values into the ProcessMaker Screen in Preview mode, the entire JSON data model displays in the **Data Preview** panel. Copy the JSON data model.
5. Paste the JSON data model into the **Sample Input** panel in Script Editor. If you use any variables as defined in the JSON data model in your ProcessMaker Script, Script Editor uses those variable values during script testing.
6. Optionally, mock the [ProcessMaker Magic Variables](../reference-global-variables-in-your-processmaker-assets.md) that your ProcessMaker Script would reference during an in-progress Request. ProcessMaker uses a set of Magic Variables that become part of the JSON data model for all Requests. ProcessMaker uses these Magic Variables to store ProcessMaker user, Process, and Request related data for all Requests. During an in-progress Request, these ProcessMaker Magic Variables are updated. All ProcessMaker Magic Variables are preceded by an underscore \(`_`\) character in the JSON data model. Enter the ProcessMaker Magic Variable into the **Sample Input** panel as part of the JSON data model, and then enter mock values for each. See [Magic Variable Descriptions](../reference-global-variables-in-your-processmaker-assets.md#magic-variable-descriptions).
7. Click **Run**.
8. In the **Output** panel, view the mocked Request data.

### ‌Enter Other JSON Data as Input to Your ProcessMaker Script

‌Use the **Configuration** panel to include JSON configuration settings your ProcessMaker Script uses when it runs. For example, include the Client ID and Client Secret values in JSON format for OAuth 2.0 verification to a third-party service's API your ProcessMaker Script must access to access the API. By entering these values into the **Configuration** panel, you can verify during testing that these values are valid for the third-party service.‌

A ProcessMaker Script may reference ProcessMaker Screen control values during a Request by placing their **Variable Name** setting values within quotation marks \(`"`\). In the example below, `FullName` is the **Variable Name** setting value for a control to store a Request participant's full name:

```text
{
    "Name": "FullName"
}
```

### Reference a Request Variable from a Script Configuration Setting

As a best practice when referencing ProcessMaker Scripts from a [Script Task](../process-design/model-your-process/process-modeling-element-descriptions.md#script-task) element, declare Request variable names from a Script Task element's **Script Configuration** setting rather than from the ProcessMaker Script itself:

* Declaring Request variable names from the Process model and not the ProcessMaker Script itself promotes greater usability, flexibility, and re-use.
* Process designers configuring ProcessMaker Scripts from the Script Task element dictate how to declare the Request variable, while the ProcessMaker Script references that Request variable name when it runs.

In the ProcessMaker Script use the `$config` variable for your Script's programming language to reference the Request variables in a specified Process model. See the commented text in sample ProcessMaker Scripts for each supported programming language in the [ProcessMaker and Environment Variable Syntax, Usage, SDK, and Examples](script-editor.md#processmaker-and-environment-variable-syntax-usage-sdk-and-examples) section.

### ‌Test Your ProcessMaker Script

‌Click the **Run** button to test your ProcessMaker Script. Script Editor evaluates any JSON data entered into the **Configuration** and **Sample Input** panels.‌

If the ProcessMaker Script evaluates successfully, its output displays in the **Output** panel. If the ProcessMaker Script does not evaluate successfully, the language engine evaluating the script displays an error.‌

### Pass Request Data Into Your ProcessMaker Script <a id="pass-request-data-into-your-processmaker-script"></a>

‌Pass Request-related data into your ProcessMaker Script in the following ways:‌

* **Request data:** ProcessMaker uses a schema-less JSON data model from which to read, write, and store Request data. Since the JSON data model is schema-less, meaning that it does not require a specific schema or structure from which ProcessMaker assets must conform, the JSON data model is structured from the JSON objects in ProcessMaker assets used in a Request, such as the **Variable Name** setting values in a ProcessMaker Screen or variables a ProcessMaker Script creates. When an in-progress Request routes through the Process, Request data aggregates into the JSON data model, thereby becoming Request data. [ProcessMaker users](../../processmaker-administration/add-users/what-is-a-user.md) or [ProcessMaker group](../../processmaker-administration/assign-groups-to-users/what-is-a-group.md) members that have the [Requests: Edit Request Data permission](../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) may view the JSON data model for a completed Request. This JSON data model displays from the [**Data** tab in a completed Request's summary](../../using-processmaker/requests/request-details/summary-for-completed-requests.md#editable-request-data). Below is an example. ProcessMaker Scripts can call Request data by referencing these JSON objects derived from **Variable Name** setting values in ProcessMaker Screens.

  ​![JSON data model in a Completed Request, as viewed from the &quot;Data&quot; tab](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LuEaghIGGk2o9s_BlcP%2F-LYT8B_rTB7I1mpsLBvg%2FData%20tab%20completed%20Request%20information%20-%20Requests.png?alt=media&token=ba495224-c057-4239-b729-482e6442732d)​

* **ProcessMaker Magic Variables:** ProcessMaker uses a set of Magic Variables that become part of the JSON data model for all Requests. ProcessMaker uses these Magic Variables to store ProcessMaker user, Process, and Request related data for all Requests. During an in-progress Request, these ProcessMaker Magic Variables are updated. All ProcessMaker Magic Variables are preceded by an underscore \(`_`\) character in the JSON data model. See [Reference Magic Variables in ProcessMaker Assets](https://app.gitbook.com/@processmaker/s/processmaker/~/drafts/-M8lHWfe3NHeZQ-3bGbC/designing-processes/reference-global-variables-in-your-processmaker-assets/@merged).
* **ProcessMaker Environment Variables:** The sensitive information that a [ProcessMaker Environment Variable](https://app.gitbook.com/@processmaker/s/processmaker/~/drafts/-M8lHWfe3NHeZQ-3bGbC/designing-processes/environment-variable-management/what-is-an-environment-variable/@merged) represents can pass to a ProcessMaker Script when it runs. Usage depends on the programming language that the ProcessMaker Script uses. In the usage examples below, `ENV_VAR_NAME` represents the name of the ProcessMaker Environment Variable. See [ProcessMaker Variable Syntax, Usage, and Examples](script-editor.md#processmaker-variable-syntax-usage-and-examples).

### ‌ProcessMaker and Environment Variable Syntax, Usage, SDK, and Examples

‌ProcessMaker uses two global variables that ProcessMaker Scripts can call. Variable usage depends on the programming language that the ProcessMaker Script uses. Below is a description of these global variables:‌

* **Data:** The `data` variable is a JSON object that contains all Request data to the moment a ProcessMaker Script runs.
* **Config:** The `config` variable is a JSON object that contains any special configuration to be passed to the ProcessMaker Script prior to it running. In [Script Task](../process-design/model-your-process/process-modeling-element-descriptions.md#script-task) elements of a Process model, special configurations are entered into the **Script Configuration** setting. See [Reference a Request Variable from a Script Configuration Setting](script-editor.md#reference-a-request-variable-from-a-script-configuration-setting) as to the best practice when configuring ProcessMaker Scripts from Script Task elements in a Process model.

‌Refer to the tabs below how to use ProcessMaker variables in supported programming languages.

{% tabs %}
{% tab title="PHP" %}
Below is a sample ProcessMaker Script that uses PHP. Refer to the comments denoted with `//` that describe how the sample functions:

* How to get a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md).
* How to get a value from the configuration object.
* How to get a value from a data object.
* Call the Software Development Kit \(SDK\).

```php
<?php
$output = [];
// Get a ProcessMaker Environment Variable, in this case TEST_VAR.
$output['envVar'] = getenv('TEST_VAR');
// Get a value from the config object.
// In this example, 'test' in the JSON config: {"test":"test config value"}
$output['configTest'] = $config["test"];
// Get a value from the data object.
// In this example, the user_id for the _request.
$output['requestUserId'] = $data['_request']['user_id'];
// Get the email address for user id 1 using the API/SDK.
// Use the global `$api_config` to set credentials automatically.
$usersApi = new ProcessMaker\Client\Api\UsersApi(null, $api_config);
$user = $usersApi->getUserById("1");
$output['userEmail'] = $user->getEmail();
return $output;
```
{% endtab %}

{% tab title="Lua" %}
Below is a sample ProcessMaker Script that uses Lua. Refer to the comments denoted with `--` that describe how the sample functions:

* How to get a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md).
* How to get a value from the configuration object.
* How to get a value from a data object.
* Call the Software Development Kit \(SDK\).

```lua
-- Get a ProcessMaker Environment Variable, in this example TEST_VAR.
local envVar = os.getenv("TEST_VAR")
   
-- Get a value from the config object.
-- In this example, 'test' in the JSON config: {"test":"test config value"}
local configTest = config["test"]

-- Get a value from the data object.
-- In this example, the user_id for the _request.
local requestUserId = data["_request"]["user_id"]

-- Get the email address for user id 1 using the API/SDK.
-- Use client.make to get a pre-configured api client.
-- See https://github.com/ProcessMaker/sdk-lua/tree/master/pmsdk/api for available clients.
local users_api = client.make('users_api')
local user = users_api:get_user_by_id("1")
local userEmail = user.email

return {envVar=envVar, configTest=configTest, requestUserId=requestUserId, userEmail=userEmail}
```
{% endtab %}

{% tab title="JavaScript" %}
Below is a sample ProcessMaker Script that uses JavaScript. Refer to the comments denoted with `//` that describe how the sample functions:

* How to get a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md).
* How to get a value from the configuration object.
* How to get a value from a data object.
* Call the Software Development Kit \(SDK\).

```javascript
// A ProcessMaker Script written in JavaScript should return a Promise that
// resolves with the output data. You can also return a basic object.
// For example `return {"key":"value"}`
return new Promise((resolve, reject) => {

    // Get a ProcessMaker Environment Variable, in this example TEST_VAR.
    const envVar = process.env['TEST_VAR'];
    
    // Get a value from the config object.
    // In this example, 'test' in the JSON config: {"test":"test config value"}
    const configTest = config['test'];
    
    // Get a value from the data object.
    // In this case the user_id for the _request.
    const requestUserId = data["_request"]["user_id"];
    
    // Get the email address for user id 1 using the API/SDK.
    // Use the global `api` object to get a pre-configured client.
    let usersApi = new api.UsersApi();
    usersApi.getUserById("1", (error, user) => {
    
        const userEmail = user.email;
        
        resolve({
            'envVar' : envVar,
            'configTest' : configTest,
            'requestUserId' : requestUserId,
            'userEmail' : userEmail
        });
    });
});
```
{% endtab %}

{% tab title="C\#" %}
{% hint style="info" %}
The [C\# package](../../package-development-distribution/package-a-connector/c-package.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the C\# [package](../../package-development-distribution/first-topic.md) can be installed in your ProcessMaker instance.
{% endhint %}

Below is a sample ProcessMaker Script that uses C\#. Refer to the comments denoted with `//` that describe how the sample functions:

* How to get a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md).
* How to get a value from the configuration object.
* How to get a value from a data object.
* Call the Software Development Kit \(SDK\).

```csharp
using System;
using ProcessMakerSDK.Api;
using ProcessMakerSDK.Client;
using ProcessMakerSDK.Model;

// A ProcessMaker Script written in C# must have a 'Script' class that implements 'BaseScript'.
// It must include a method named 'Execute'. Results must be added to the 'output' map.
public class Script : BaseScript
{
    public override void Execute(
        dynamic data,
        dynamic config,
        dynamic output,
        Configuration apiConfig)
    {
        // Get a ProcessMaker Environment Variable, in this example TEST_VAR.
        output.envVar = Environment.GetEnvironmentVariable("TEST_VAR");
        
        // Get a value from the config object.
        // In this example, 'test' in the JSON config: {"test":"test config value"}
        output.configTest = config["test"];
        
        // Get a value from the data object.
        // In this example, the user_id for the _request.
        output.requestUserId = data["_request"]["user_id"];
        
        // Get the email address for user id 1 using the API/SDK.
        try {
            var apiInstance = new UsersApi(apiConfig);
            Users user = apiInstance.GetUserById("1");
            output.userEmail = user.Email;
        } catch (ApiException e) {
            Console.WriteLine(e.StackTrace);
        }
    }
}
```
{% endtab %}

{% tab title="Java" %}
{% hint style="info" %}
The [Java package](../../package-development-distribution/package-a-connector/java-package.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Java [package](../../package-development-distribution/first-topic.md) can be installed in your ProcessMaker instance.
{% endhint %}

Below is a sample ProcessMaker Script that uses Java. Refer to the comments denoted with `//` that describe how the sample functions:

* How to get a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md).
* How to get a value from the configuration object.
* How to get a value from a data object.
* Call the Software Development Kit \(SDK\).

```java
import java.io.*;
import java.util.*;
import ProcessMaker_Client.ApiClient;
import ProcessMaker_Client.ApiException;
import ProcessMaker_Model.Users;
import ProcessMaker_Api.UsersApi;

// A ProcessMaker Script written in Java must have a 'Script' class that implements 'BaseScript'.
// It must include a method named 'execute'. Results must be pushed to the 'output' map.
public class Script implements BaseScript {
    public void execute(
        Map<String, Object> data,
        Map<String, Object> config,
        Map<String, Object> output,
        ApiClient api
    ) {

        // Get a ProcessMaker Environment Variable, in this example TEST_VAR.
        Map<String, String> env = System.getenv();
        output.put("env-var", env.get("TEST_VAR"));
        
        // Get a value from the config object.
        // In this example, 'test' in the JSON config: {"test":"test config value"}
        output.put("config-test", config.get("test"));

        // Get a value from the data object.
        // In this example, the user_id for the _request.
        Map requestData = ((Map)data.get("_request")); 
        output.put("data-request-user-id", requestData.get("user_id"));
        
        // Get the email address for user id 1 using the API/SDK.
        try {
            UsersApi apiInstance = new UsersApi(api);
            Users user = apiInstance.getUserById("1");
            output.put("user-1-email", user.getEmail());
        } catch (ApiException e) {
            e.printStackTrace();
        }
    }
}
```
{% endtab %}

{% tab title="Python" %}
{% hint style="info" %}
The [Python package](../../package-development-distribution/package-a-connector/python-package.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Python [package](../../package-development-distribution/first-topic.md) can be installed in your ProcessMaker instance.
{% endhint %}

Below is a sample ProcessMaker Script that uses Python. Refer to the comments denoted with `#` that describe how the sample functions:

* How to get a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md).
* How to get a value from the configuration object.
* How to get a value from a data object.
* Call the Software Development Kit \(SDK\).

```python
# A PM4 script written in Python must set a dict
# named `output` with the data to return.

# Get an environment variable, in this case TEST_VAR
envVar = os.getenv('TEST_VAR')

# Get a value from the config object.
# In this case, 'test' in the json config: {"test":"test config value"}
configTest = config['test']

# Get a value from the data object.
# In this case the user_id for the _request
requestUserId = data['_request']['user_id']

# Get the email address for user id 1 using the API/SDK
# Use the global `configuration` object to set auth tokens
users_api_instance = pmsdk.UsersApi(pmsdk.ApiClient(configuration))
user = users_api_instance.get_user_by_id(1)
userEmail = user.email

output = {
    "envVar": envVar, 
    "configTest": configTest, 
    "requestUserId": requestUserId, 
    "userEmail": userEmail
}
```
{% endtab %}

{% tab title="R" %}
{% hint style="info" %}
The [R package](../../package-development-distribution/package-a-connector/r-package.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the R [package](../../package-development-distribution/first-topic.md) can be installed in your ProcessMaker instance.
{% endhint %}

Below is a sample ProcessMaker Script that uses R. Refer to the comments denoted with `#` that describe how the sample functions:

* How to get a [ProcessMaker Environment Variable](../environment-variable-management/what-is-an-environment-variable.md).
* How to get a value from the configuration object.
* How to get a value from a data object.
* Call the Software Development Kit \(SDK\).

```r
# Get a ProcessMaker Environment Variable, in this example TEST_VAR.
envVar <- Sys.getenv("TEST_VAR")

# Get a value from the config object.
# In this example, 'test' in the JSON config: {"test":"test config value"}
configVar <- config[["test"]]

# Get a value from the data object.
# In this example, the user_id for the _request.
dataVar <- data[["_request"]][["user_id"]]

output

<- list(envVar = envVar, configVar = configVar, dataVar = dataVar)
```
{% endtab %}
{% endtabs %}

### Save Your ProcessMaker Script

‌Click the **Save** icon![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LJ0aNaVW1m7sNsxVJLV%2F-LioNdUzT8w_d7Hb_0a5%2F-LRZVMVhCYDrATwHc9Jt%2FSave%20Icon%20-%20Processes.png?alt=media&token=93c6458d-d6c2-439d-937b-458fc65b2238)from Script Editor's top menu to save the ProcessMaker Script.‌

## Related Topics <a id="related-topics"></a>

{% page-ref page="what-is-a-script.md" %}

{% page-ref page="../design-forms/what-is-a-form.md" %}

{% page-ref page="manage-scripts/manage-script-categories/" %}

{% page-ref page="../../processmaker-administration/script-executor-management/what-is-a-script-executor.md" %}

{% page-ref page="../reference-global-variables-in-your-processmaker-assets.md" %}

{% page-ref page="manage-scripts/view-all-scripts.md" %}

{% page-ref page="manage-scripts/create-a-new-script.md" %}

{% page-ref page="manage-scripts/search-for-a-script.md" %}

{% page-ref page="manage-scripts/edit-script-configuration.md" %}

{% page-ref page="manage-scripts/edit-a-script.md" %}

{% page-ref page="manage-scripts/duplicate-a-script.md" %}

{% page-ref page="manage-scripts/remove-a-script.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/c-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/java-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/r-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/python-package.md" %}

{% page-ref page="../../package-development-distribution/first-topic.md" %}

