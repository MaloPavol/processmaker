---
description: >-
  The Queue Management Dashboard provides an overview of your ProcessMaker
  instance's status, throughput, and workload.
---

# Dashboard

## Overview

The Queue Management Dashboard displays an overview of your ProcessMaker instance's status. The Dashboard displays by default in Queue Management.

Follow these steps to view the Queue Management Dashboard:

1. [Log on](../../using-processmaker/log-in.md#log-in) to ProcessMaker.
2. Click the **Admin** option from the top menu. The **Users** page displays.
3. Click the **Queue Management** icon![](../../.gitbook/assets/queue-management-icon-admin.png) from the left sidebar. The Queue Management Dashboard displays.

{% hint style="info" %}
Click **Dashboard** to view the Dashboard from another Queue Management page.
{% endhint %}

![Queue Management Dashboard displays an overview of ProcessMaker job and queue metrics](../../.gitbook/assets/laravel-horizon-queue-management-dashboard-overview-admin.png)

The Dashboard displays in the **Overview** panel the following metrics about your ProcessMaker instance:

* **Jobs Per Minute:** The **Jobs Per Minute** metric displays how many [jobs](what-is-queue-management.md#jobs) per minute on average ran through the [queue](what-is-queue-management.md#queues).
* **Jobs Past Hour:** The **Jobs Past Hour** metric displays how many jobs ran in the queue in the past hour.
* **Failed Jobs Past Hour:** The **Failed Jobs Past Hour** metric displays how many queued jobs failed in the past hour. See [View Recently Failed Jobs](view-recently-failed-jobs.md).
* **Status:** The **Status** metric displays the status of the ProcessMaker instance. The following status types are possible:
  * **Active:** The ProcessMaker instance is active.
  * **Inactive:** The ProcessMaker instance is inactive.
  * **Error:** The ProcessMaker instance has an error.
* **Total Processes:** The **Total Processes** metric displays how many processes the job queue is using in the ProcessMaker instance.
* **Max Wait Time:** The **Max Wait Time** metric displays the maximum wait time the queue has required to run a recent job in real-time. If there is no wait time, then this metric displays the following: **-**.
* **Max Runtime:** The **Max Runtime** metric displays the name of the job queue that has the maximum runtime. `default` is the name of the default queue.
* **Max Throughput:** The **Max Throughput** metric displays the name of the job queue that has the maximum throughput. `default` is the name of the default queue.

The Dashboard displays in the **Current Workload** panel the following information about the jobs queue:

* **Queue:** The **Queue** column displays the name of the jobs queue.
* **Processes:** The **Processes** column displays how many processes the job queue is using in the ProcessMaker instance.
* **Jobs:** The **Jobs** column displays how many jobs are active presently.
* **Wait:** The **Wait** column displays an indicator of how much time is required to run all jobs in the queue.

The Dashboard displays a panel labeled with the name of the ProcessMaker instance that contains the following information:

* **Supervisor:** The **Supervisor** column displays the supervisor name. The supervisor monitors the default queue.
* **Processes:** The **Processes** column displays how many processes the job queue is using.
* **Queues:** The **Queues** column displays the name\(s\) of the job queue\(s\).
* **Balancing:** The **Balancing** column displays the balancing strategy to manage jobs in the queue\(s\). The  Simple strategy splits incoming jobs evenly between processes in the ProcessMaker instance.

## Related Topics

{% page-ref page="what-is-queue-management.md" %}

{% page-ref page="monitor-tags.md" %}

{% page-ref page="view-metrics.md" %}

{% page-ref page="view-recent-jobs.md" %}

{% page-ref page="view-recently-failed-jobs.md" %}

