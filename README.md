node-red-contrib-tb-device-controller
================

Node-RED node for tb-device-controller

 ThingsBoard open-source IoT platform REST API Device Controller.

## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-tb-device-controller, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-tb-device-controller

## Usage

### Methods

#### POST /api/device/bulk_import

There's an ability to import the bulk of devices using the only .csv file.

Available for users with 'TENANT_ADMIN' authority.

    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /api/device/credentials

During device creation, platform generates random 'ACCESS_TOKEN' credentials. Use this method to update the device credentials. First use 'getDeviceCredentialsByDeviceId' to get the credentials id and value. Then use current method to update the credentials type and value. It is not possible to create multiple device credentials for the same device. The structure of device credentials id and value is simple for the 'ACCESS_TOKEN' but is much more complex for the 'MQTT_BASIC' or 'LWM2M_CREDENTIALS'.

Available for users with 'TENANT_ADMIN' authority.

    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /api/device/info/{deviceId}

Fetch the Device Info object based on the provided Device Id. If the user has the authority of 'Tenant Administrator', the server checks that the device is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the device is assigned to the same customer. Device Info is an extension of the default Device object that contains information about the assigned customer name and device profile name. 

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    deviceId : string
     
    Accept : 'application/json'

#### GET /api/device/types

Returns a set of unique device profile names based on devices that are either owned by the tenant or assigned to the customer which user is performing the request.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

     
    Accept : 'application/json'

#### GET /api/device/{deviceId}

Fetch the Device object based on the provided Device Id. If the user has the authority of 'TENANT_ADMIN', the server checks that the device is owned by the same tenant. If the user has the authority of 'CUSTOMER_USER', the server checks that the device is assigned to the same customer.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    deviceId : string
     
    Accept : 'application/json'

#### DELETE /api/device/{deviceId}

Deletes the device, it's credentials and all the relations (from and to the device). Referencing non-existing device Id will cause an error.

Available for users with 'TENANT_ADMIN' authority.

    deviceId : string
     
    Accept : 'application/json'

#### GET /api/device/{deviceId}/credentials

If during device creation there wasn't specified any credentials, platform generates random 'ACCESS_TOKEN' credentials.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    deviceId : string
     
    Accept : 'application/json'

#### POST /api/devices

Returns all devices that are related to the specific entity. The entity id, relation type, device types, depth of the search, and other query parameters defined using complex 'DeviceSearchQuery' object. See 'Model' tab of the Parameters for more info.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'


## License

#### Apache License Version 2.0

https://github.com/thingsboard/thingsboard/blob/master/LICENSE