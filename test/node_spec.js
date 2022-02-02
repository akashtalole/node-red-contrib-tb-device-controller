var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('tb-device-controller node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'tb-device-controller');
            done();
        });
    });

    it('should handle processDevicesBulkImportUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'processDevicesBulkImportUsingPOST',
                processDevicesBulkImportUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDeviceCredentialsUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'updateDeviceCredentialsUsingPOST',
                updateDeviceCredentialsUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceInfoByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'getDeviceInfoByIdUsingGET',
                getDeviceInfoByIdUsingGET_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceTypesUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'getDeviceTypesUsingGET',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'getDeviceByIdUsingGET',
                getDeviceByIdUsingGET_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteDeviceUsingDELETE()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'deleteDeviceUsingDELETE',
                deleteDeviceUsingDELETE_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDeviceCredentialsByDeviceIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'getDeviceCredentialsByDeviceIdUsingGET',
                getDeviceCredentialsByDeviceIdUsingGET_deviceId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle findByQueryUsingPOST_1()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-device-controller', name: 'tb-device-controller',
                method: 'findByQueryUsingPOST_1',
                findByQueryUsingPOST_1_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
