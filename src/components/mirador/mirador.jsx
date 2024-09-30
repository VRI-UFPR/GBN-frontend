import { useState, useEffect, useContext } from 'react';
// import './mirador.css';

// import Mirador from 'mirador';
// import * as actions from 'mirador/dist/es/src/state/actions/index.js';

import Mirador from 'mirador';
import * as actions from 'mirador/dist/es/src/state/actions/index.js'

// import { AppContext } from '../../AppContext';

import { v4 as uuid } from 'uuid';

export default function ReactMirador() {
  const id = uuid();
  const canvasImageName = '';
  const collectionName = '';
  const [viewerInstance, setViewerInstance] = useState(null);
  // const { currentManifest } = useContext(AppContext);
  // const currentManifest = 'https://api.chgov.bar.admin.ch/manifests/32325206/32325206.json'
  // const currentManifest = 'http://127.0.0.1:8182/iiif/2/DerGemeindebote-p01.png/info.json'
  const currentManifest = 'http://0.0.0.0:8888/manifests/DerGemeindebote-p13.png_manifest.json'
  // const canvasId = canvasImageName
    // ? `${process.env.REACT_APP_IMAGE_API_BASE}/${collectionName}%2F${canvasImageName}.jpg`
    // : undefined;
  const canvasId = '';

  useEffect(() => {
    // Initializing Mirador
    let config = {
      id: `mirador-${id}`,
      // createGenerateClassNameOptions: {
      //   seed: `mirador-${id}`,
      //   // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
      //   productionPrefix: `mirador-${id}`,
      // },
      // workspace: {
      //   allowNewWindows: false,
      //   isWorkspaceAddVisible: false,
      //   showZoomControls: true,
      // },
      window: {
        allowFullscreen: true,
        allowClose: false,
        textOverlay: {
          skipEmptyLines: true,
          optionsRenderMode: 'simple',
        },
        // sideBarOpenByDefault: true,
        // panels: {
        //   info: true,
        //   annotations: false,
        //   attribution: false,
        //   canvas: false,
        // },
        views: [
          { key: 'single', behaviors: ['individuals'] },
          { key: 'book', behaviors: ['paged'] },
          { key: 'scroll', behaviors: ['continuous'] },
        ],
      },
      windows: [],
      // windows: [
      //   {
      //     loadedManifest: currentManifest,
      //   }
      // ],
      thumbnailNavigation: {
        defaultPosition: 'far-right',
      },
    };
    setViewerInstance(Mirador.viewer(config));

    /**
     * This method is executed when the component is unmounted (=destructor)
     */
    return () => {
      setViewerInstance(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * This method is executed when viewerInstance has been created and every time when the currentManifest changes
   */
  useEffect(() => {
    // Every time the currentManifest changes, we need to update the mirador windows to display the new manifest
    if (viewerInstance && currentManifest) {
      console.log(currentManifest)

      const { store } = viewerInstance;
      const windows = Object.values(store.getState().windows);
      let firstWindow = windows.length > 0 ? windows[0] : null;

      // If there is no window yet, we need to create one
      if (!firstWindow) {
        const window = {
          // manifestId: currentManifest.id,
          manifestId: currentManifest,
          canvasId: canvasId,
        };
        store.dispatch(actions.addWindow(window));
        firstWindow = Object.values(store.getState().windows)[0];
        store.dispatch(actions.maximizeWindow(firstWindow.id));
      // }
      } else {
        store.dispatch(actions.updateWindow(firstWindow.id, { manifestId: currentManifest }));
      }

      // After the window has been created or updated, we need to manually reset the canvas to the
      // if (canvasId) {
      //   firstWindow = Object.values(store.getState().windows)[0];
      // }
    }

  }, [viewerInstance, currentManifest, canvasId]); // eslint-disable-line react-hooks/exhaustive-deps

  
  // We need to return an empty div, to define the container for the mirador viewer. The container is linked by its id.
  return <div id={`mirador-${id}`} />;
}