import { createActions } from 'redux-actions';

const { componentPanel } = createAction({
  'COMPONENT_PANEL/SET_COMPONENT_PANEL_VISIBLE': (visible) => visible,
});

const { setComponentPanelVisible } = componentPanel;

export { setComponentPanelVisible };
