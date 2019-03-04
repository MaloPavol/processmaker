# ProcessMaker 4.1 Community Edition Documentation

![ProcessMaker](http://www.processmaker.com/sites/all/themes/pmthemev2/img/processmaker-logo-500x-v2.png)

[![CircleCI](https://circleci.com/gh/ProcessMaker/bpm/tree/develop.svg?style=svg&circle-token=bc15deff649712440252088a12ec20b4b7c96826)](https://circleci.com/gh/ProcessMaker/bpm/tree/develop)

## ProcessMaker 4.1 Community Edition Documentation

#### Overview

ProcessMaker is an open source, workflow management software suite, which includes tools to automate your workflow, design forms, create documents, assign roles and users, create routing rules, and map an individual process quickly and easily. It's relatively lightweight and doesn't require any kind of installation on the client computer. This file describes the requirements and installation steps for the server.

### Development

#### System Requirements

You can develop ProcessMaker as well as ProcessMaker packages locally. In order to do so, you must have the following:

* [Virtualbox  5.2](https://www.virtualbox.org/) or above
* [Vagrant 2.2.0](https://www.vagrantup.com/) or above
* [PHP 7.2.0](https://php.net) or above
  * Windows users can install [XAMPP](https://www.apachefriends.org/index.html)
* [Composer](https://getcomposer.org/)
* [Node.js 10.13.0](https://nodejs.org/en/) or above

**Steps for Development Installation**

* Clone the repository into a directory
* Perform `composer install` to install required libraries. If you are on windows, you may need to run `composer install --ignore-platform-reqs` due to Horizon requiring the pcntl extension. You can safely ignore this as the application runs in the virtual machine which has the appropriate extensions installed.
* Perform `npm install` in the project directory
* Perform `npm run dev` to build the front-end assets
* Modify your local `/etc/hosts` file to point `bpm4.local.processmaker.com` to `192.168.10.10`. On Windows, this file is located at `C:\Windows\System32\Drivers\etc\hosts`.
  * If you need to change the ip address to something else to avoid conflicts on your network, modify the `Homestead.yaml` file accordingly. Do not commit this change to the repository.
* Execute `vagrant up` in the project directory to bring up the laravel homestead virtual machine
* Execute `vagrant ssh` to ssh into the newly created virtual machine
* Execute `php artisan bpm:install` in `/home/vagrant/processmaker` to start the ProcessMaker Installation
  * Specify `localhost` as your local database server
  * Specify `3306` as your local database port
  * Specify `workflow` as your local database name
  * Specify `homestead` as your local database username
  * Specify `secret` as your local database password
  * Specify `https://bpm4.local.processmaker.com` as your application url
* Visit `https://bpm4.local.processmaker.com` in your browser to access the application
  * Login with the username of `admin` and password of `admin`

When developing, make sure to turn on debugging in your `.env` so you can see the actual error instead of the Whoops page.

```text
APP_DEBUG=TRUE
```

Optionally, trust the self-signed certificate on your host machine so you don't get the "Not Secure" warnings in chrome and postman.

For macOS: 1. In your-repository-root/storage/ssl, double-click on bpm4.local.processmaker.com.crt 2. Click on "Add" to add it to your login keychain 3. In the Keychain Access window click on the Certificates category on the bottom left. 4. Double-click on the bpm4 certificate 5. Open the Trust section. For "When using this certificate", select "always trust" 6. Close the window. You will be asked for your password. Close and reopen the processmaker tab in chrome.

If you choose not to install the certificate, you should access the socket.io js file in your browser to allow unsafe connections from it. Otherwise, real-time notifications may not work in your development environment.

* [https://bpm4.local.processmaker.com:6001/socket.io/socket.io.js](https://bpm4.local.processmaker.com:6001/socket.io/socket.io.js)

#### Customize Logos

1. Add images to resources/img/
2. Add The following variables to the .env file

```text
MAIN_LOGO_PATH={{EXPANDED LOGO PATH HERE}}
ICON_PATH_PATH={{ICON LOGO PATH HERE}}
LOGIN_LOGO_PATH={{LOGIN PAGE LOGO PATH HERE}}
```

1. Run npm run dev

#### Scheduled tasks/events

To run time based BPMN events like Timer Start Events or Intermediate Timer Events, the laravel scheduler should be enabled. To do this open a console and: 1. Execute crontab -e 2. Add to the cron tab the following line \(replacing the upper cased text with the directory where your proyecto is located \):

```text
* * * * * cd YOUR_BPM_PROJECT && php artisan schedule:run >> /dev/null 2>&1
```

#### API

The ProcessMaker API is documented using OpenAPI 3.0 documentation and can be viewed at `/api/documentation`. The documention is generated by adding annotations to Models and Controllers.

You should add annotations to all models and controllers that you create or modify because it's how we generate the SDKs that are used when running scripts.

When developing, make sure to add this to your `.env` file so that any changes you make to the annotations are automatically turned into documentation when you reload the `/api/documentation` page:

```text
L5_SWAGGER_GENERATE_ALWAYS=TRUE
```

At the comment block at the top of the model, add an @OA annotation to describe the schema. See `ProcessMaker/Models/Process.php` for an example.

To keep things dry, you can define 2 schemas. One that inherits the other.

```php
/**
 * ...existing comments above...
 * 
 * @OA\Schema(
 *   schema="ProcessEditable",
 *   @OA\Property(property="process_category_uuid", type="string", format="uuid"),
 *   @OA\Property(property="name", type="string"),
 *   @OA\Property(property="description", type="string"),
 *   @OA\Property(property="status", type="string", enum={"ACTIVE", "INACTIVE"}),
 * ),
 * @OA\Schema(
 *   schema="Process",
 *   allOf={@OA\Schema(ref="#/components/schemas/ProcessEditable")},
 *   @OA\Property(property="user_uuid", type="string", format="uuid"),
 *   @OA\Property(property="uuid", type="string", format="uuid"),
 *   @OA\Property(property="created_at", type="string", format="date-time"),
 *   @OA\Property(property="updated_at", type="string", format="date-time"),
 * )
 */
class Process extends Model implements HasMedia
{
...
```

Now you can use the reference to the schema when annotating the controllers. See `ProcessMaker/Http/Controllers/Api/ProcessController.php` for an example.

```php
    /**
     * @OA\Get(
     *     path="/processes",
     *     summary="Returns all processes that the user has access to",
     *     operationId="getProcesses",
     *     tags={"Process"},
     *     @OA\Parameter(ref="#/components/parameters/filter"),
     *     @OA\Parameter(ref="#/components/parameters/order_by"),
     *     @OA\Parameter(ref="#/components/parameters/order_direction"),
     *     @OA\Parameter(ref="#/components/parameters/per_page"),
     *     @OA\Parameter(ref="#/components/parameters/"),
     * 
     *     @OA\Response(
     *         response=200,
     *         description="list of processes",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(ref="#/components/schemas/Process"),
     *             ),
     *             @OA\Property(
     *                 property="meta",
     *                 type="object",
     *                 allOf={@OA\Schema(ref="#/components/schemas/metadata")},
     *             ),
     *         ),
     *     ),
     * )
     */
    public function index(Request $request)
    {
    ...
```

And for a show method

```php
    /**
     * @OA\Get(
     *     path="/processes/{processUuid}",
     *     summary="Get single process by ID",
     *     operationId="getProcessByUuid",
     *     tags={"Process"},
     *     @OA\Parameter(
     *         description="ID of process to return",
     *         in="path",
     *         name="processUuid",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successfully found the process",
     *         @OA\JsonContent(ref="#/components/schemas/Process")
     *     ),
     */
    public function show(Request $request, Process $process)
    {
    ...
```

**Notes**

`operationId` will be the method name of the generated code. It can be anything camel cased but should be named some intuitive.

**Testing with Swagger UI**

Reload the swagger UI at `api/documentation` page in your browser to see the results and debug any errors with the annotations.

By default, Swagger UI will use your bpm4 app auth. So as long as you're logged into the app you should be able to run API Commands from Swagger UI as your logged in user.

You can also create a personal access token to see the API results as a specific user would.

```text
$user->createToken('Name it here')->accessToken;
```

Copy the token. In api/documentation, click on the Authenticate button on the top right and enter it in the `pm_api_bearer` value field.

**More Info**

Detailed examples can be found at [https://github.com/zircote/swagger-php/tree/master/Examples/petstore.swagger.io](https://github.com/zircote/swagger-php/tree/master/Examples/petstore.swagger.io)

Full OpenAPI 3.0 specification at [https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md)

**Testing with Laravel Dusk**

When testing in [Laravel Dusk](https://laravel.com/docs/5.7/dusk), make sure to turn off debugging mode in your `.env` so you can use the whole page and screens executing functional tests. Then, change app\_env value to `develop` in the same file:

```text
APP_DEBUG=FALSE
APP_ENV=develop
```

Execute `vagrant ssh` to ssh into the newly created virtual machine.

Execute `php artisan dusk` in `/home/vagrant/processmaker` to execute Laravel dusk test cases.

Execute `php artisan dusk:make newTest` to generate a new Dusk test. The generated test will be placed in the `tests/Browser` directory.

**More Info**

Detailed installation can be found at [https://laravel.com/docs/5.7/dusk\#installation](https://laravel.com/docs/5.7/dusk#installation)

To interact with web elements [https://laravel.com/docs/5.7/dusk\#interacting-with-elements](https://laravel.com/docs/5.7/dusk#interacting-with-elements)

List of available assertions [https://laravel.com/docs/5.7/dusk\#available-assertions](https://laravel.com/docs/5.7/dusk#available-assertions)

#### License

Distributed under the [AGPL Version 3](https://www.gnu.org/licenses/agpl-3.0.en.html) 

ProcessMaker \(C\) 2002 - 2019 ProcessMaker Inc.

For further information visit: [http://www.processmaker.com/](http://www.processmaker.com/)

