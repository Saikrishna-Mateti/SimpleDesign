import { createTheme } from '@mui/material/styles';

const BODY_FONT = '"Inter", -apple-system, sans-serif';

const theme = createTheme({
  typography: {
    fontFamily: BODY_FONT,
    body1: { fontFamily: BODY_FONT },
    body2: { fontFamily: BODY_FONT },
    caption: { fontFamily: BODY_FONT },
    subtitle2: { fontFamily: BODY_FONT },
    h4: { fontFamily: BODY_FONT },
    h6: { fontFamily: BODY_FONT },
  },
});

export default theme;
