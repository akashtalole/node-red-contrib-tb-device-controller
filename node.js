'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function TbDeviceControllerNode(config) {
        RED.nodes.createNode(this, config);
        this.service = RED.nodes.getNode(config.service);
        this.method = config.method;
        this.processDevicesBulkImportUsingPOST_body = config.processDevicesBulkImportUsingPOST_body;
        this.processDevicesBulkImportUsingPOST_bodyType = config.processDevicesBulkImportUsingPOST_bodyType || 'str';
        this.updateDeviceCredentialsUsingPOST_body = config.updateDeviceCredentialsUsingPOST_body;
        this.updateDeviceCredentialsUsingPOST_bodyType = config.updateDeviceCredentialsUsingPOST_bodyType || 'str';
        this.getDeviceInfoByIdUsingGET_deviceId = config.getDeviceInfoByIdUsingGET_deviceId;
        this.getDeviceInfoByIdUsingGET_deviceIdType = config.getDeviceInfoByIdUsingGET_deviceIdType || 'str';
        this.getDeviceByIdUsingGET_deviceId = config.getDeviceByIdUsingGET_deviceId;
        this.getDeviceByIdUsingGET_deviceIdType = config.getDeviceByIdUsingGET_deviceIdType || 'str';
        this.deleteDeviceUsingDELETE_deviceId = config.deleteDeviceUsingDELETE_deviceId;
        this.deleteDeviceUsingDELETE_deviceIdType = config.deleteDeviceUsingDELETE_deviceIdType || 'str';
        this.getDeviceCredentialsByDeviceIdUsingGET_deviceId = config.getDeviceCredentialsByDeviceIdUsingGET_deviceId;
        this.getDeviceCredentialsByDeviceIdUsingGET_deviceIdType = config.getDeviceCredentialsByDeviceIdUsingGET_deviceIdType || 'str';
        this.findByQueryUsingPOST_1_body = config.findByQueryUsingPOST_1_body;
        this.findByQueryUsingPOST_1_bodyType = config.findByQueryUsingPOST_1_bodyType || 'str';
       
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.TbDeviceController();
            if (!errorFlag && this.service && this.service.credentials && this.service.credentials.secureTokenValue) {
                if (this.service.secureTokenIsQuery) {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, true);
                } else {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, false);
                }
            }
            if (!errorFlag && this.service && this.service.credentials && this.service.credentials.secureApiKeyValue) {
                if (this.service.secureApiKeyIsQuery) {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, true);
                } else {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, false);
                }
            }

            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'processDevicesBulkImportUsingPOST') {
                var processDevicesBulkImportUsingPOST_parameters = [];
                var processDevicesBulkImportUsingPOST_nodeParam;
                var processDevicesBulkImportUsingPOST_nodeParamType;

                if (typeof msg.payload === 'object') {
                    processDevicesBulkImportUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.processDevicesBulkImportUsingPOST(processDevicesBulkImportUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'updateDeviceCredentialsUsingPOST') {
                var updateDeviceCredentialsUsingPOST_parameters = [];
                var updateDeviceCredentialsUsingPOST_nodeParam;
                var updateDeviceCredentialsUsingPOST_nodeParamType;

                if (typeof msg.payload === 'object') {
                    updateDeviceCredentialsUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.updateDeviceCredentialsUsingPOST(updateDeviceCredentialsUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'getDeviceInfoByIdUsingGET') {
                var getDeviceInfoByIdUsingGET_parameters = [];
                var getDeviceInfoByIdUsingGET_nodeParam;
                var getDeviceInfoByIdUsingGET_nodeParamType;

                getDeviceInfoByIdUsingGET_nodeParam = node.getDeviceInfoByIdUsingGET_deviceId;
                getDeviceInfoByIdUsingGET_nodeParamType = node.getDeviceInfoByIdUsingGET_deviceIdType;
                if (getDeviceInfoByIdUsingGET_nodeParamType === 'str') {
                    getDeviceInfoByIdUsingGET_parameters.deviceId = getDeviceInfoByIdUsingGET_nodeParam || '';
                } else {
                    getDeviceInfoByIdUsingGET_parameters.deviceId = RED.util.getMessageProperty(msg, getDeviceInfoByIdUsingGET_nodeParam);
                }
                getDeviceInfoByIdUsingGET_parameters.deviceId = !!getDeviceInfoByIdUsingGET_parameters.deviceId ? getDeviceInfoByIdUsingGET_parameters.deviceId : msg.payload;
                                result = client.getDeviceInfoByIdUsingGET(getDeviceInfoByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getDeviceTypesUsingGET') {
                var getDeviceTypesUsingGET_parameters = [];
                var getDeviceTypesUsingGET_nodeParam;
                var getDeviceTypesUsingGET_nodeParamType;
                result = client.getDeviceTypesUsingGET(getDeviceTypesUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getDeviceByIdUsingGET') {
                var getDeviceByIdUsingGET_parameters = [];
                var getDeviceByIdUsingGET_nodeParam;
                var getDeviceByIdUsingGET_nodeParamType;

                getDeviceByIdUsingGET_nodeParam = node.getDeviceByIdUsingGET_deviceId;
                getDeviceByIdUsingGET_nodeParamType = node.getDeviceByIdUsingGET_deviceIdType;
                if (getDeviceByIdUsingGET_nodeParamType === 'str') {
                    getDeviceByIdUsingGET_parameters.deviceId = getDeviceByIdUsingGET_nodeParam || '';
                } else {
                    getDeviceByIdUsingGET_parameters.deviceId = RED.util.getMessageProperty(msg, getDeviceByIdUsingGET_nodeParam);
                }
                getDeviceByIdUsingGET_parameters.deviceId = !!getDeviceByIdUsingGET_parameters.deviceId ? getDeviceByIdUsingGET_parameters.deviceId : msg.payload;
                                result = client.getDeviceByIdUsingGET(getDeviceByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'deleteDeviceUsingDELETE') {
                var deleteDeviceUsingDELETE_parameters = [];
                var deleteDeviceUsingDELETE_nodeParam;
                var deleteDeviceUsingDELETE_nodeParamType;

                deleteDeviceUsingDELETE_nodeParam = node.deleteDeviceUsingDELETE_deviceId;
                deleteDeviceUsingDELETE_nodeParamType = node.deleteDeviceUsingDELETE_deviceIdType;
                if (deleteDeviceUsingDELETE_nodeParamType === 'str') {
                    deleteDeviceUsingDELETE_parameters.deviceId = deleteDeviceUsingDELETE_nodeParam || '';
                } else {
                    deleteDeviceUsingDELETE_parameters.deviceId = RED.util.getMessageProperty(msg, deleteDeviceUsingDELETE_nodeParam);
                }
                deleteDeviceUsingDELETE_parameters.deviceId = !!deleteDeviceUsingDELETE_parameters.deviceId ? deleteDeviceUsingDELETE_parameters.deviceId : msg.payload;
                                result = client.deleteDeviceUsingDELETE(deleteDeviceUsingDELETE_parameters);
            }
            if (!errorFlag && node.method === 'getDeviceCredentialsByDeviceIdUsingGET') {
                var getDeviceCredentialsByDeviceIdUsingGET_parameters = [];
                var getDeviceCredentialsByDeviceIdUsingGET_nodeParam;
                var getDeviceCredentialsByDeviceIdUsingGET_nodeParamType;

                getDeviceCredentialsByDeviceIdUsingGET_nodeParam = node.getDeviceCredentialsByDeviceIdUsingGET_deviceId;
                getDeviceCredentialsByDeviceIdUsingGET_nodeParamType = node.getDeviceCredentialsByDeviceIdUsingGET_deviceIdType;
                if (getDeviceCredentialsByDeviceIdUsingGET_nodeParamType === 'str') {
                    getDeviceCredentialsByDeviceIdUsingGET_parameters.deviceId = getDeviceCredentialsByDeviceIdUsingGET_nodeParam || '';
                } else {
                    getDeviceCredentialsByDeviceIdUsingGET_parameters.deviceId = RED.util.getMessageProperty(msg, getDeviceCredentialsByDeviceIdUsingGET_nodeParam);
                }
                getDeviceCredentialsByDeviceIdUsingGET_parameters.deviceId = !!getDeviceCredentialsByDeviceIdUsingGET_parameters.deviceId ? getDeviceCredentialsByDeviceIdUsingGET_parameters.deviceId : msg.payload;
                                result = client.getDeviceCredentialsByDeviceIdUsingGET(getDeviceCredentialsByDeviceIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'findByQueryUsingPOST_1') {
                var findByQueryUsingPOST_1_parameters = [];
                var findByQueryUsingPOST_1_nodeParam;
                var findByQueryUsingPOST_1_nodeParamType;

                if (typeof msg.payload === 'object') {
                    findByQueryUsingPOST_1_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.findByQueryUsingPOST_1(findByQueryUsingPOST_1_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'TbDeviceController.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('tb-device-controller', TbDeviceControllerNode);
    function TbDeviceControllerServiceNode(n) {
        RED.nodes.createNode(this, n);

        this.secureTokenValue = n.secureTokenValue;
        this.secureTokenHeaderOrQueryName = n.secureTokenHeaderOrQueryName;
        this.secureTokenIsQuery = n.secureTokenIsQuery;
        this.secureApiKeyValue = n.secureApiKeyValue;
        this.secureApiKeyHeaderOrQueryName = n.secureApiKeyHeaderOrQueryName;
        this.secureApiKeyIsQuery = n.secureApiKeyIsQuery;
    }

    RED.nodes.registerType('tb-device-controller-service', TbDeviceControllerServiceNode, {
        credentials: {
            secureTokenValue: { type: 'password' },
            secureApiKeyValue: { type: 'password' },
            temp: { type: 'text' }
        }
    });
};
