import AfterMath  from './parts/AfterMath.mjs';
import Colors     from './parts/Colors.mjs';
import Container  from '../../../../src/container/Base.mjs';
import Helix      from './parts/Helix.mjs';
import How        from './parts/How.mjs';
import MainNeo    from './parts/MainNeo.mjs';
import References from './parts/References.mjs';

/**
 * @class Portal.view.home.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends Container {
    static config = {
        /**
         * @member {String} className='Portal.view.home.MainContainer'
         * @protected
         */
        className: 'Portal.view.home.MainContainer',
        /**
         * @member {String[]} cls=['portal-home-maincontainer']
         */
        cls: ['portal-home-maincontainer'],
        /**
         * @member {Object[]} domListeners
         */
        domListeners: [{
            intersect(data) {
                Neo.getComponent(data.targetId)?.activate?.()
            },
            scroll(event) {
                this.toggleCls('hide-sidebar', event.scrollTop > 80)
            }
        }],
        /**
         * @member {Object} responsiveConfig
         */
        responsiveConfig: {
            medium: {maxWidth: 840},
            large : {minWidth: 841}
        },
        responsive      : {},
        /**
         * @member {Object[]} items
         */
        items: [
            {ntype: 'component', cls: ['portal-home-progress']},
            MainNeo,
            Helix,
            // Features,
            References,
            Colors,
            How,
            AfterMath
        ],
        /**
         * @member {Boolean} scrollable=true
         */
        scrollable: true
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        let me             = this,
            {id, windowId} = me;

        value && setTimeout(() => {
            Neo.main.addon.IntersectionObserver.register({
                callback : 'isVisible',
                id,
                observe  : ['.portal-home-content-view'],
                root     : `#${id}`,
                threshold: 1.0,
                windowId
            })
        }, 50)
    }
}

Neo.setupClass(MainContainer);

export default MainContainer;
