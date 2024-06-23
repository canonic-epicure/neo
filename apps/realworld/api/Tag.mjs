import Base from './Base.mjs';

/**
 * @class RealWorld.api.Tag
 * @extends RealWorld.api.Base
 */
class Tag extends Base {
    static config = {
        /**
         * @member {String} className='RealWorld.api.Tag'
         * @protected
         */
        className: 'RealWorld.api.Tag',
        /**
         * @member {String} resource='/tags'
         */
        resource: '/tags'
    }
}

export default Neo.setupClass(Tag);
