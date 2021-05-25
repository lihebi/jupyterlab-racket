import { Mode } from "@jupyterlab/codemirror";
/**
 * Add the ReactiveCore file type into JupyterLab document registry and the CodeMirror mode.
 * From https://github.com/jupyterlab/jupyterlab/issues/7427
 */
const myextreg = (app) => {
    Mode.getModeInfo().push({
        name: ".racket",
        mime: "text/x-scheme",
        mode: "scheme",
        ext: ["rkt"]
    });
    app.docRegistry.addFileType({
        name: "racket",
        displayName: "Racket File",
        extensions: ["rkt"],
        mimeTypes: ["text/x-scheme"],
        iconLabel: "",
        contentType: "file",
        fileFormat: "text"
    });
};
/**
 * Initialization data for the jupyterlab-racket extension.
 */
const extension = {
    id: 'jupyterlab-racket:plugin',
    autoStart: true,
    activate: (app) => {
        console.log('JupyterLab extension jupyterlab-racket is activated!');
        myextreg(app);
    }
};
export default extension;
