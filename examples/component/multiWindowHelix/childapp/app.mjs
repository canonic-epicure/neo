import Viewport from './Viewport.mjs';

export const onStart = () => Neo.app({
    mainView: Viewport,
    name    : 'HelixControls'
});
