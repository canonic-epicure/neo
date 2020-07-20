import Button                   from '../../../src/component/Button.mjs';
import {default as Calendar}    from '../../../src/calendar/MainContainer.mjs';
import MainContainerController  from './MainContainerController.mjs';
import {default as NumberField} from '../../../src/form/field/Number.mjs';
import Toolbar                  from '../../../src/container/Toolbar.mjs';
import Viewport                 from '../../../src/container/Viewport.mjs';

/**
 * @class CalendarBasic.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'CalendarBasic.MainContainer',
        ntype    : 'calendar-basic-maincontainer',

        autoMount : true,
        controller: MainContainerController,
        layout    : {ntype: 'vbox', align: 'stretch'},

        items: [{
            module : Toolbar,
            flex   : 'none',
            padding: 20,
            reference: 'headerToolbar',

            style: {
                padding: '10px 5px 10px 10px'
            },

            items: ['->', {
                module       : NumberField,
                clearable    : false,
                labelPosition: 'inline',
                labelText    : 'Row Height',
                listeners    : {change: 'onRowHeightFieldChange'},
                maxValue     : 30,
                minValue     : 8,
                style        : {marginRight: '10px'},
                value        : 10,
                width        : 120
            }, {
                module : Button,
                handler: 'onSwitchThemeButtonClick',
                height : 27,
                iconCls: 'fa fa-moon',
                text   : 'Theme Dark'
            }]
        }, {
            module   : Calendar,
            reference: 'calendar',
            flex     : 1
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};