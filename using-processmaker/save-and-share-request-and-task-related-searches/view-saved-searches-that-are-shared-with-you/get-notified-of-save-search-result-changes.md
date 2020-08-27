---
description: Receive notifications when a Saved Search's results change.
---

# Get Notified of Save Search Result Changes

## Overview

Receive a [notification](../../notifications.md) each time search results change based on your [Saved Search](../what-is-a-saved-search.md) parameters. For example, suppose that you have a Saved Search for all in-progress [Requests](../../requests/what-is-a-request.md) for a particular [Process](../../../designing-processes/viewing-processes/what-is-a-process.md), such as for a Purchase Request Process. Each time a Request starts for that Process, your Saved Search results change. If your Saved Search is configured to send notifications each time your Saved Search results change, you receive a notification.

Below are other examples to receive a notification when the Saved Search results change:

* If your Saved Search parameters include when a new [self-service Task](../../task-management/self-assign-tasks-to-yourself-from-a-queue.md) is available, receive a notification.
* If a record ID in a ProcessMaker Collection changes, receive a notification. Note that the [ProcessMaker Collections package](../../../package-development-distribution/package-a-connector/collections.md) must be installed in your ProcessMaker instance to use ProcessMaker Collections.

Saved Search notifications can be [enabled](get-notified-of-save-search-result-changes.md#enable-notification-of-saved-search-result-changes) or [disabled](get-notified-of-save-search-result-changes.md#disable-notification-of-saved-search-results) only for your own Saved Searches. Saved Searches by default send notifications when a Saved Search's results change.

## Enable Notification of Saved Search Result Changes

{% hint style="info" %}
### ProcessMaker Package Required

To enable [notifications](../../notifications.md) for a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Search package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Search package can be installed in your ProcessMaker instance.

### Permission Required

Your ProcessMaker user account or group membership must have the following permission to receive notifications for your own Saved Searches unless your user account has the **Make this user a Super Admin** setting selected:

* Saved Search: Toggle Notifications

See the ProcessMaker [Saved Search](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#saved-search) permission or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Saved Search notifications can be enabled only for your own Saved Searches. Saved Searches by default send notifications when a Saved Search's results change.

Follow these steps to enable notifications when the results for your Saved Search changes:

1. [View the search results for a Saved Search](view-search-results-for-a-saved-search.md) in which to enable notifications for its changed results.
2. Click the **Enable Notifications** button![](../../../.gitbook/assets/enable-notifications-button-saved-searches-package.png)to enable notifications for this Saved Search.

## Disable Notification of Saved Search Results

{% hint style="info" %}
### ProcessMaker Package Required

To disable [notifications](../../notifications.md) for a [Saved Search](../what-is-a-saved-search.md), the [Saved Searches package](../../../package-development-distribution/package-a-connector/saved-searches-package.md) must be installed in your ProcessMaker instance. The Saved Search package is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](mailto:sales@processmaker.com) or ask your ProcessMaker sales representative how the Saved Search package can be installed in your ProcessMaker instance.
{% endhint %}

Saved Search notifications can be disabled only for your own Saved Searches.

Follow these steps to disable notifications when the results for your Saved Search changes:

1. [View the search results for a Saved Search](view-search-results-for-a-saved-search.md) in which to disable notifications for its changed results.
2. Click the **Disable Notifications** button![](../../../.gitbook/assets/disable-notifications-button-saved-searches-package.png)to disable notifications for this Saved Search.

## Related Topics

{% page-ref page="../../../package-development-distribution/package-a-connector/saved-searches-package.md" %}

{% page-ref page="../../../package-development-distribution/first-topic.md" %}

{% page-ref page="../what-is-a-saved-search.md" %}

{% page-ref page="view-search-results-for-a-saved-search.md" %}

{% page-ref page="create-and-share-a-saved-search.md" %}

{% page-ref page="view-saved-searches.md" %}

{% page-ref page="hide-or-show-a-saved-search.md" %}

{% page-ref page="configure-a-saved-search.md" %}

{% page-ref page="search-for-a-saved-searchs-search-result.md" %}

{% page-ref page="email-a-report-of-saved-search-results.md" %}

{% page-ref page="delete-a-saved-search.md" %}

{% page-ref page="../schedule-to-email-reports-of-saved-search-results/" %}

{% page-ref page="../create-charts-to-visualize-saved-search-results/" %}

