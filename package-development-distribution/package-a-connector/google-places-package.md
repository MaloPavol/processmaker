---
description: >-
  Request participants can auto-complete street, location, and/or business
  addresses entered into a ProcessMaker Screen control.
---

# Google Places Package

## Overview

{% hint style="info" %}
The Google Places [package](../first-topic.md) is not available in the ProcessMaker open-source edition. Contact [ProcessMaker Sales](https://www.processmaker.com/contact/) or ask your ProcessMaker sales representative how the Google Places package can be installed in your ProcessMaker instance.
{% endhint %}

Use the Google Places package to allow [Request](../../using-processmaker/requests/what-is-a-request.md) participants to do the following in [Form](../../designing-processes/design-forms/screens-builder/types-for-screens.md#form)-type [ProcessMaker Screens](../../designing-processes/design-forms/what-is-a-form.md):

* Start entering an address, location, or business name into a ProcessMaker Screen control, then allow the Google API to auto-complete that address or location.
* Select a geographical location from a Google map.

 Prior to using the Google Places package, ensure that your organization has a billing account with the JavaScript and Maps Embed APIs enabled, as well as API keys for each API. See the following:

* [Get Started with Google Maps Platform](https://developers.google.com/maps/gmp-get-started)
* [Get an API key for the JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [Get an API key for the Maps Embed API](https://developers.google.com/maps/documentation/embed/get-api-key)

The Google Places package has the following components after it is installed to your ProcessMaker instance:

* **Screen Builder control:** The Google Places package installs the Google Places control into [Form](../../designing-processes/design-forms/screens-builder/types-for-screens.md#form)-type ProcessMaker Screens. After adding and configuring a Google Places control into your ProcessMaker Screen, Request participants start entering an address, then receive auto-complete address options from which to select as the intended address, location, or business name. The Google Place control stores the selected address in the Request data using that control's **Variable Name** setting value, as well as all the returned data from the Google API. See [Google Places Control Settings](../../designing-processes/design-forms/screens-builder/control-descriptions/google-places-control-settings.md).
* **ProcessMaker Environment Variable:** The Google Places package adds a [ProcessMaker Environment Variable](../../designing-processes/environment-variable-management/what-is-an-environment-variable.md) called `GOOGLE_API_TOKEN` that contains the Google API token for that ProcessMaker instance. The ProcessMaker Environment Variable does not require configuration or revision after it has been added to your ProcessMaker instance.

The Google Places control uses the Google API token to call the Google API when a Google Places control is placed into a ProcessMaker Screen, then when address information is entered into the control. Google uses Basic Service Set Identifiers \(BSSID\) information from the Request participant's Wireless Local Area Network \(WLAN\) Access Point to get an approximation of where that Request participant is located, even when GPS and WiFi are not available.

Below are a few ways to use the Google Places package:

* Allow Request participants to easily enter a shipping or billing address. ![](../../.gitbook/assets/google-places-control-address-example-package.png) 
* Enter a business name into the Google Places control to select a business location. ![](../../.gitbook/assets/google-places-control-business-example-package.png) 
* Enter well-known monuments or international airport names to get their addresses or locations when requesting to travel. ![](../../.gitbook/assets/google-places-control-airport-example-package.png) 

## Related Topics

{% page-ref page="../first-topic.md" %}

{% page-ref page="../../designing-processes/design-forms/screens-builder/control-descriptions/google-places-control-settings.md" %}

{% page-ref page="../../designing-processes/design-forms/what-is-a-form.md" %}

{% page-ref page="../../using-processmaker/requests/what-is-a-request.md" %}

