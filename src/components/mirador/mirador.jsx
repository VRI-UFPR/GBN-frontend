// import mirador from "mirador";
// // import { miradorImageToolsPlugin } from 'mirador-image-tools';

// const config = {
//   id: 'demo',
//   windows: [{
//     imageToolsEnabled: true,
//     imageToolsOpen: true,
//     manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
//   }],
//   theme: {
//     palette: {
//       primary: {
//         main: '#1967d2',
//       },
//     },
//   },
// };

// const miradorViewer = mirador.viewer(config);

// // export default miradorViewer;




// import { useState, useEffect, useContext } from 'react';
// import i18next from 'i18next';
// import './mirador.css';

// import Mirador from 'mirador';
// // import { v4 as uuid } from 'uuid';
// // import ocrHelperPlugin from '@4eyes/mirador-ocr-helper';
// // https://github.com/ProjectMirador/mirador/commit/2759fccc641b40b9fff0b9da5ef83d6ecd0e3dd2#diff-90d821e4b96f948716bc831f305dea317c3c9e49c8270798d85017859044de0c
// //@ts-ignore
// import * as actions from 'mirador/dist/es/src/state/actions/index.js';
// import * as selectors from 'mirador/dist/es/src/state/selectors/index.js';

// import { AppContext } from '../../AppContext';
// // import Config from '../../lib/Config';

// // declare let global: {
// //   config: Config;
// // };

// export default function ReactMirador() {
//   const [viewerInstance, setViewerInstance] = useState<any>(null);
//   const { currentManifest } = useContext(AppContext);
//   const { searchParams } = new URL(window.location.href);
//   const canvasImageName = searchParams.has('cv') ? searchParams.get('cv') : '';
//   // const searchQuery = searchParams.has('q') ? searchParams.get('q') : '';
//   const canvasId = canvasImageName
//     ? `${process.env.REACT_APP_IMAGE_API_BASE}/${collectionName}%2F${canvasImageName}.jpg`
//     : undefined;

//   useEffect(() => {
//     // Initializing Mirador
//     let config = {
//       id: `mirador-${id}`,
//       createGenerateClassNameOptions: {
//         seed: `mirador-${id}-`,
//         // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
//         productionPrefix: `mirador-${id}`,
//       },
//       workspace: {
//         allowNewWindows: false,
//         isWorkspaceAddVisible: false,
//         showZoomControls: true,
//       },
//       window: {
//         allowFullscreen: true,
//         allowClose: false,
//         textOverlay: {
//           skipEmptyLines: true,
//           // correction: {
//           //   enabled: true,
//           //   emailUrlKeepParams: ['manifest'],
//           //   emailRecipient: i18next.t('protocolMiradorOcrPluginEmailRecipient'),
//           // },
//           optionsRenderMode: 'simple',
//         },
//         sideBarOpenByDefault: true,
//         panels: {
//           info: true,
//           annotations: false,
//           attribution: false,
//           canvas: false,
//         },
//         views: [
//           { key: 'single', behaviors: ['individuals'] },
//           { key: 'book', behaviors: ['paged'] },
//           { key: 'scroll', behaviors: ['continuous'] },
//         ],
//       },
//       windows: [],
//       thumbnailNavigation: {
//         defaultPosition: 'far-right',
//       },
//       language: i18next.language,
//       availableLanguages: false, // Workaround: Needs to be 'false' on init, otherwise restrictions won't be applied...
//       theme: {
//         overrides: {
//           MuiButtonBase: {
//             root: {
//               '&$selected': {
//                 backgroundColor: 'transparent',
//               },
//             },
//           },
//           MuiListItem: {
//             root: {
//               margin: 0,
//             },
//           },
//           MuiInputLabel: {
//             root: {
//               '&$focused': {
//                 color: '#454545',
//               },
//             },
//           },
//           MuiInput: {
//             underline: {
//               '&::after': {
//                 borderColor: '#454545',
//               },
//             },
//           },
//           MuiTooltip: {
//             popper: {
//               '& > div': {
//                 fontSize: '0.9rem!important',
//               },
//             },
//           },
//           MuiChip: {
//             outlinedSecondary: {
//               color: '#069',
//               borderColor: '#069',
//             },
//             deleteIconOutlinedColorSecondary: {
//               color: '#069',
//             },
//           },
//           MuiTab: {
//             root: {
//               '&$selected': {
//                 color: '#666666!important',
//                 borderColor: 'currentColor',
//               },
//             },
//           },
//         },
//       },
//     };

//     setViewerInstance(Mirador.viewer(config)); //, [...ocrHelperPlugin]));

//     /**
//      * This method is executed when the component is unmounted (=destructor)
//      */
//     return () => {
//       setViewerInstance(null);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   /**
//    * This method is executed when viewerInstance has been created
//    */
//   // useEffect(() => {
//   //   // As soon as the viewerInstance is available, we can apply the available languages
//   //   if (viewerInstance) {
//   //     const { store } = viewerInstance;
//   //     const state = store.getState();

//   //     if (!state.config.availableLanguages) {
//   //       store.dispatch(
//   //         actions.updateConfig({
//   //           availableLanguages,
//   //         })
//   //       );
//   //     }

//   //     // Additionally, several events listeners are defined...
//   //     i18next.on('languageChanged', changeLanguage);
//   //     window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).addEventListener('change', isMobileHandler);
//   //   }
//   //   /**
//   //    * This method is executed when the component is unmounted (=destructor)
//   //    */
//   //   return () => {
//   //     i18next.off('languageChanged', changeLanguage);
//   //     window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).removeEventListener('change', isMobileHandler);
//   //   };
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, [viewerInstance]);

//   /**
//    * This method is executed when viewerInstance has been created and every time when the currentManifest changes
//    */
//   useEffect(() => {
//     // Every time the currentManifest changes, we need to update the mirador windows to display the new manifest
//     if (viewerInstance && currentManifest) {
//       const { store } = viewerInstance;
//       const windows = Object.values(store.getState().windows);
//       let firstWindow = windows.length > 0 ? windows[0] : null;
//       // let companionWindowId = '';

//       // If there is no window yet, we need to create one
//       if (!firstWindow) {
//         const window = {
//           manifestId: currentManifest.id,
//           // defaultSearchQuery: searchQuery,
//           canvasId: canvasId,
//           // canvasId: !searchQuery ? canvasId : undefined, // Only preselect the canvas if a search query is not available. In case the search query is available, the canvas will be set after the search has been performed.
//         };
//         store.dispatch(actions.addWindow(window));
//         firstWindow = Object.values(store.getState().windows)[0];
//         store.dispatch(actions.maximizeWindow(firstWindow.id));
//       } else {
//         store.dispatch(actions.updateWindow(firstWindow.id, window));
//       }

//       // After the window has been created or updated, we need to manually reset the canvas to the
//       if (canvasId && searchQuery) {
//         firstWindow = Object.values(store.getState().windows)[0];
//         // companionWindowId = selectors.getCompanionWindowIdsForPosition(store.getState(), {
//           // position: 'left',
//           // windowId: firstWindow.id,
//         // })[0];

//       }
//     }



//     return () => {
//       if (canvasTimeout) {
//         clearTimeout(canvasTimeout);
//       }
//     }
//   }, [viewerInstance, currentManifest, canvasId]); // eslint-disable-line react-hooks/exhaustive-deps


//   /**
//    * This method is executed as a callback when the i18next language changes
//    */
//   // const changeLanguage = () => {
//   //   if (viewerInstance) {
//   //     const { store } = viewerInstance;
//   //     store.dispatch(
//   //       actions.updateConfig({
//   //         language: i18next.language,
//   //       })
//   //     );
//   //   }
//   // };

//   // We need to return an empty div, to define the container for the mirador viewer. The container is linked by its id.
//   return <div id={`mirador-${id}`} className="aiiif-mirador" />;
// }







import { useState, useEffect, useContext } from 'react';
import './mirador.css';

import Mirador from 'mirador';
import * as actions from 'mirador/dist/es/src/state/actions/index.js';

import { AppContext } from '../../AppContext';

export default function ReactMirador() {
  const [viewerInstance, setViewerInstance] = useState(null);
  const { currentManifest } = useContext(AppContext);
  const canvasId = canvasImageName
    ? `${process.env.REACT_APP_IMAGE_API_BASE}/${collectionName}%2F${canvasImageName}.jpg`
    : undefined;

  useEffect(() => {
    // Initializing Mirador
    let config = {
      id: `mirador-${id}`,
      createGenerateClassNameOptions: {
        seed: `mirador-${id}-`,
        // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
        productionPrefix: `mirador-${id}`,
      },
      workspace: {
        allowNewWindows: false,
        isWorkspaceAddVisible: false,
        showZoomControls: true,
      },
      window: {
        allowFullscreen: true,
        allowClose: false,
        textOverlay: {
          skipEmptyLines: true,
          optionsRenderMode: 'simple',
        },
        sideBarOpenByDefault: true,
        panels: {
          info: true,
          annotations: false,
          attribution: false,
          canvas: false,
        },
        views: [
          { key: 'single', behaviors: ['individuals'] },
          { key: 'book', behaviors: ['paged'] },
          { key: 'scroll', behaviors: ['continuous'] },
        ],
      },
      windows: [],
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
      const { store } = viewerInstance;
      const windows = Object.values(store.getState().windows);
      let firstWindow = windows.length > 0 ? windows[0] : null;

      // If there is no window yet, we need to create one
      if (!firstWindow) {
        const window = {
          manifestId: currentManifest.id,
          canvasId: canvasId,
        };
        store.dispatch(actions.addWindow(window));
        firstWindow = Object.values(store.getState().windows)[0];
        store.dispatch(actions.maximizeWindow(firstWindow.id));
      } else {
        store.dispatch(actions.updateWindow(firstWindow.id, window));
      }

      // After the window has been created or updated, we need to manually reset the canvas to the
      if (canvasId) {
        firstWindow = Object.values(store.getState().windows)[0];
      }
    }

  }, [viewerInstance, currentManifest, canvasId]); // eslint-disable-line react-hooks/exhaustive-deps

  
  // We need to return an empty div, to define the container for the mirador viewer. The container is linked by its id.
  return <div id={`mirador-${id}`} className="aiiif-mirador" />;
}
