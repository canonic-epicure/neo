import Neo         from '../src/Neo.mjs';
import * as core   from '../src/core/_export.mjs';
import ServiceBase from '../src/worker/ServiceBase.mjs';

/**
 * @class Neo.ServiceWorker
 * @extends Neo.worker.ServiceBase
 * @singleton
 */
class ServiceWorker extends ServiceBase {
    static config = {
        /**
         * @member {String} className='Neo.ServiceWorker'
         * @protected
         */
        className: 'Neo.ServiceWorker',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} version='6.15.7'
         */
        version: '6.15.7'
    }

    /**
     * @member {String} workerId='service'
     * @protected
     */
    workerId = 'service'
}

let instance = Neo.setupClass(ServiceWorker);

export default instance;
