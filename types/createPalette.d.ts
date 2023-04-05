declare module '@mui/material/styles' {
  interface CustomPalette {
    blue: PaletteColorOptions;
    drkBlue: PaletteColorOptions;
    green: PaletteColorOptions;
  }
  interface Palette extends CustomPalette { }
  interface PaletteOptions extends CustomPalette { }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blue: true;
    drkBlue: true;
    green: true;
  }
}
