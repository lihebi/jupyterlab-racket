import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-racket extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-racket:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-racket is activated!');
  }
};

export default extension;
