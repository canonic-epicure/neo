import Store from '../../../src/data/Store.mjs';
import Model from './MainModel.mjs';

/**
 * @class Neo.examples.table.container.MainStore
 * @extends Neo.data.Store
 */
class MainStore extends Store {
    static config = {
        className  : 'Neo.examples.table.container.MainStore',
        keyProperty: 'githubId',
        model      : Model,

        data: [{
            country  : 'Germany',
            firstname: 'Tobias',
            githubId : 'tobiu',
            lastname : 'Uhlig',
            escapeHtml: '<span>test</span>'
        }, {
            country  : 'USA',
            firstname: 'Rich',
            githubId : 'rwaters',
            lastname : 'Waters',
            escapeHtml: ''
        }, {
            country  : 'Germany',
            firstname: 'Nils',
            githubId : 'mrsunshine',
            lastname : 'Dehl',
            escapeHtml: ''
        }, {
            country  : 'USA',
            firstname: 'Gerard',
            githubId : 'camtnbikerrwc',
            lastname : 'Horan',
            escapeHtml: ''
        }, {
            country  : 'Slovakia',
            firstname: 'Jozef',
            githubId : 'jsakalos',
            lastname : 'Sakalos',
            escapeHtml: ''
        }, {
            country  : 'Germany',
            firstname: 'Bastian',
            githubId : 'bhaustein',
            lastname : 'Haustein',
            escapeHtml: ''
        }, {
            colspan  : {firstname: 3},
            country  : 'Germany',
            firstname: 'Colspan 3',
            githubId : 'random',
            escapeHtml: ''
        }]
    }
}

Neo.applyClassConfig(MainStore);

export default MainStore;
