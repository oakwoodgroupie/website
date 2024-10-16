// Preloading fonts
const fonts = [
    new FontFace('Satoshi', 'url(/fonts/Satoshi-Variable.woff2)', {
      weight: '200 900',
      style: 'normal',
    }),
    new FontFace('Satoshi Italic', 'url(/fonts/Satoshi-VariableItalic.woff2)', {
      weight: '200 900',
      style: 'italic',
    }),
    new FontFace('Bitter', 'url(/fonts/Bitter-VariableFont_wght.woff2)', {
      weight: '200 900',
      style: 'normal',
    }),
    new FontFace('Bitter Italic', 'url(/fonts/Bitter-Italic-VariableFont_wght.woff2)', {
      weight: '200 900',
      style: 'italic',
    })
  ];
  
  // Load the fonts
  fonts.forEach(font => {
    font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
      console.log(`${loadedFont.family} loaded successfully`);
    }).catch((error) => {
      console.error(`Failed to load font: ${error}`);
    });
  });
  