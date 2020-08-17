import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { Mode } from "@jupyterlab/codemirror";

/**
 * Add the ReactiveCore file type into JupyterLab document registry and the CodeMirror mode.
 * From https://github.com/jupyterlab/jupyterlab/issues/7427
 */
const myextreg = (app: JupyterFrontEnd) => {
    Mode.getModeInfo().push({
//         name: ".ReactiveCore RR",
        name: ".racket",
        mime: "text/x-scheme",
        mode: "scheme",
        ext: ["rkt"]
    });
    
//     console.log("Adding extension ..")

    app.docRegistry.addFileType({
        name: "racket",
        displayName: "Racket File",
        extensions: ["rkt"],
        mimeTypes: ["text/x-scheme"],
//         iconClass: "jp-MaterialIcon reactivecore_icon",
        iconLabel: "",
        contentType: "file",
        fileFormat: "text"
    });
    
//     console.log("finished adding extension")

    /**
     * Code to see all CodeMirror mode available in JupyterLab and the whole application object for debug
     */
//     let test = Mode.getModeInfo();
//     console.log(test)
//     console.log(app)
}


/**
 * Initialization data for the jupyterlab-racket extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-racket',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-racket is activated!');
      myextreg(app)
  }
};

// app.docRegistry.addFileType({
//     name: 'Racket',
//     displayName: 'Racket File',
//     extensions: ['.rkt'],
//     mimeTypes: ['text/scheme'],
//     iconClass: 'jp-MaterialIcon nextflow_icon',
//   });

export default extension;
