import mirador from "mirador";
// import { miradorImageToolsPlugin } from 'mirador-image-tools';

const config = {
  id: 'demo',
  windows: [{
    imageToolsEnabled: true,
    imageToolsOpen: true,
    manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
  }],
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      },
    },
  },
};

const miradorViewer = mirador.viewer(config);

// export default miradorViewer;