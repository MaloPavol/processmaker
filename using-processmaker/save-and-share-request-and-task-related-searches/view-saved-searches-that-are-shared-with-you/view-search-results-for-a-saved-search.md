---
description: >-
  View the data details of a Saved Search's result in tabular format based on
  the type of Saved Search.
---

# View the Data Details of a Saved Search's Result

## Overview

{% hint style="info" %}
### ProcessMaker Package Required

To view the data details for a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Search package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Search package can be installed in your ProcessMaker instance.

### Optional ProcessMaker Package

You may also view the data details for a Saved Search associated with a ProcessMaker [Collection](../../../collections/what-is-a-collection.md). Use Saved Searches in ProcessMaker Collections to search for records in a Collection. To use ProcessMaker Collections, the [Collections package](../../../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance. The Collections package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Collections package can be installed in your ProcessMaker instance.
{% endhint %}

Regardless of whether you [created](create-and-share-a-saved-search.md) a Saved Search or if it has been shared with you, you may view the data details of that search result that is based on the ProcessMaker Query Language \([PMQL](../../search-processmaker-data-using-pmql/what-is-pmql.md)\) parameters configured in that Saved Search.

An image represents each Saved Search on the left sidebar, but only display on pages associated with its type. Saved Searches are organized by type:

* [Request](../../requests/what-is-a-request.md)-related Saved Searches are accessed from **Requests** pages.
* [Task](../../task-management/what-is-a-task.md)-related Saved Searches are accessed from **Tasks** pages.
* Saved Searches for [ProcessMaker Collection](../../../collections/what-is-a-collection.md) records are accessed from the **Collections** sidebar icon![](../../../.gitbook/assets/collections-icon-admin.png)in the **Admin** top menu option. \(Your ProcessMaker user account or group membership must have the "Collections: View Collections" permission to view the list of ProcessMaker Collections unless your user account has the **Make this user a Super Admin** setting selected. See the ProcessMaker [Collections](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#collections) permissions or ask your ProcessMaker Administrator for assistance. Lastly, your ProcessMaker user account or group membership must have the **View** [record permission](../../../collections/manage-collections/configure-a-collection.md#configure-record-permissions-for-processmaker-users) from a Collection's configuration to view that Collection's records. See [Configure a Collection](../../../collections/manage-collections/configure-a-collection.md#configure-a-processmaker-collection) or ask the manager of that ProcessMaker Collection for assistance.\)

Columns that display in the tabular-formatted results for a Saved Search can be customized by the ProcessMaker [user](../../../processmaker-administration/add-users/what-is-a-user.md) that created the Saved Search. See the following topics:

* [Create and Share a Saved Search](create-and-share-a-saved-search.md)
* [Configure a Saved Search](configure-a-saved-search.md)

If a Saved Search has been shared with you, you may not change the type of information that displays in its results.

{% hint style="info" %}
To quickly view how many search results pertain to each Saved Search that either you have created or have been shared with you, click the logo that displays in the left sidebar to expand that sidebar. View at a glance how many items pertain to each Saved Search as well as Saved Searches for that type.  
![](../../../.gitbook/assets/requests-sidebar-saved-searches-package.png) 
{% endhint %}

## View Request-Type Saved Search Results

{% hint style="info" %}
### ProcessMaker Package Required

To view results for a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Saved Searches that pertain to Requests display on the following **Requests** pages:

* **My Requests** page. See [View Your Requests That You Started](../../requests/view-started-requests.md#view-your-requests).
* **In Progress** page. See [View Requests That Are In Progress](../../requests/view-in-progress-requests.md#view-in-progress-requests-in-which-you-are-participating).
* **Completed** page. See [View Completed Requests](../../requests/view-completed-requests.md#view-completed-requests-in-which-you-participated).
* **All Requests** page. See [View All Requests](../../requests/view-all-requests.md#view-all-requests-in-your-organization). \(Note that your ProcessMaker user account must have the [**Requests: View All Requests** permission](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#requests) to view the **All Requests** page.\)

An image represents each Saved Search on the left sidebar. Saved Search icons display below the icons to access the default **Requests** pages.

Follow these steps to view results from a Saved Search pertaining to Requests:

1. Go to a Request-related page.
2. Click the image that represents the Saved Search. The results for that Saved Search display.

{% hint style="info" %}
### Visualize Request-Related Information Based on Saved Search Results

[Create charts of Saved Search results to visually analyze results](../create-charts-to-visualize-saved-search-results/).

### View a Request Summary from Search Results

To [view a Request summary](../../requests/request-details/) from search results, do one of the following:

* From the **\#** column, click the Request number associated with the Process displaying in the **Name** column to view its summary. This number represents the sequential occurrence of that Process.
* Click the **Open Request** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for the Request to view its summary.
{% endhint %}

Below are results for a Request-related Saved Search.

![Results for a Request-related Saved Search](../../../.gitbook/assets/request-saved-search-data-tab-package.png)

## View Task-Type Saved Search Results

{% hint style="info" %}
### ProcessMaker Package Required

To view results for a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Searches package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Searches package can be installed in your ProcessMaker instance.
{% endhint %}

Saved Searches that pertain to Tasks display on the following **Tasks** pages:

* **To Do** page. See [View Tasks You Need to Do](../../task-management/view-tasks-you-need-to-do.md).
* **Completed** page. See [View Completed Tasks](../../task-management/view-completed-tasks.md).
* **Self Service** page.

An image represents each Saved Search on the left sidebar. Saved Search icons display below the icons to access the default **Tasks** pages.

Follow these steps to view results from a Saved Search pertaining to Tasks:

1. Go to a Task-related page.
2. Click the image that represents the Saved Search. The results for that Saved Search display.

{% hint style="info" %}
### Visualize Task-Related Information Based on Saved Search Results

[Create charts of Saved Search results to visually analyze results](../create-charts-to-visualize-saved-search-results/).

### View a Task Summary from Search Results

To view a [Task and its summary](../../task-management/view-a-task-summary.md#summary-for-an-assigned-task) from search results, do one of the following:

* From the **Task** column, click the Task name that you want to view.
* Click the **Open Task** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for the Task name that you want to view.
{% endhint %}

Below are results for a Task-related Saved Search.

![Search results for a Task-related Saved Search](../../../.gitbook/assets/task-saved-search-package.png)

## View ProcessMaker Collection Record Saved Search Results

{% hint style="info" %}
### ProcessMaker Packages Required

To view search results for a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. Likewise, to create, share, or view Saved Searches for records in a ProcessMaker Collection, the [Collections package](../../../package-development-distribution/package-a-connector/collections.md) must also be installed. Neither of these packages are available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how these packages can be installed in your ProcessMaker instance.

### Permissions Required

Your ProcessMaker user account or group membership must have the "Collections: View Collections" permission to view the list of ProcessMaker Collections unless your user account has the **Make this user a Super Admin** setting selected. See the ProcessMaker [Collections](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#collections) permissions or ask your ProcessMaker Administrator for assistance.

Furthermore, your ProcessMaker user account or group membership must have the **View** [record permission](../../../collections/manage-collections/configure-a-collection.md#configure-record-permissions-for-processmaker-users) from a Collection's configuration to view that Collection's records. See [Configure a Collection](../../../collections/manage-collections/configure-a-collection.md#configure-a-processmaker-collection) or ask the manager of that ProcessMaker Collection for assistance.
{% endhint %}

Saved Searches that pertain to records in a ProcessMaker Collection display from the **Collections** sidebar icon![](../../../.gitbook/assets/collections-icon-admin.png)in the **Admin** top menu option. An image represents each Saved Search on the left sidebar. Saved Search icons display above the icons to access ProcessMaker Collections.

Follow these steps to view results from a Saved Search pertaining to records in a ProcessMaker Collection:

1. Click the **Admin** option from the top menu. The **Users** page displays.
2. Click the **Collections** icon![](../../../.gitbook/assets/collections-icon-admin.png)from the left sidebar. The **Collections** page displays the ProcessMaker Collections that you are allowed to view.
3. Click the image that represents the Saved Search. The results for that Saved Search display.

{% hint style="info" %}
### Visualize ProcessMaker Collection-Related Saved Search Results

[Create charts of Saved Search results to visually analyze results](../create-charts-to-visualize-saved-search-results/).

### View a ProcessMaker Collection Record from Search Results

To view a ProcessMaker Collection record from search results, click the **Edit** icon![](../../../.gitbook/assets/edit-icon.png)for the record you want to edit.
{% endhint %}

Below are results for a Saved Search related to records in a ProcessMaker Collection.

![Search results related to ProcessMaker Collection records](../../../.gitbook/assets/collections-saved-search-package.png)

{% hint style="info" %}
### View a Request Summary from Search Results

To [view a Request summary](../../requests/request-details/) from search results, do one of the following:

* From the **\#** column, click the Request number associated with the Process displaying in the **Name** column to view its summary. This number represents the sequential occurrence of that Process.
* Click the **Open Request** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for the Request to view its summary.

### View a Task Summary from Search Results

To view a [Task and its summary](../../task-management/view-a-task-summary.md#summary-for-an-assigned-task) from search results, do one of the following:

* From the **Task** column, click the Task name that you want to view.
* Click the **Open Task** icon![](../../../.gitbook/assets/open-request-icon-requests.png)for the Task name that you want to view.

### View a ProcessMaker Collection Record from Search Results

To view a ProcessMaker Collection record from search results, click the **Edit** icon![](../../../.gitbook/assets/edit-icon.png)for the record you want to edit.

### Search for a Saved Search's Search Result

Use the [Search](search-for-a-saved-searchs-search-result.md) setting to filter the Saved Search's search results that display.

### No Search Results from the Saved Search?

If there are no search results from the Saved Search, the following message displays: **No Data Available**.

### Display Information the Way You Want It

[Control how tabular information displays](../../control-how-requests-display-in-a-tab.md), including how to sort columns or how many items display per page.
{% endhint %}

## Related Topics

{% page-ref page="../../../package-development-distribution/package-a-connector/saved-searches-package.md" %}

{% page-ref page="../what-is-a-saved-search.md" %}

{% page-ref page="../../../package-development-distribution/first-topic.md" %}

{% page-ref page="create-and-share-a-saved-search.md" %}

{% page-ref page="view-saved-searches.md" %}

{% page-ref page="hide-or-show-a-saved-search.md" %}

{% page-ref page="configure-a-saved-search.md" %}

{% page-ref page="search-for-a-saved-searchs-search-result.md" %}

{% page-ref page="email-a-report-of-saved-search-results.md" %}

{% page-ref page="get-notified-of-save-search-result-changes.md" %}

{% page-ref page="delete-a-saved-search.md" %}

{% page-ref page="../schedule-to-email-reports-of-saved-search-results/" %}

{% page-ref page="../create-charts-to-visualize-saved-search-results/" %}

{% page-ref page="../../search-processmaker-data-using-pmql/what-is-pmql.md" %}

