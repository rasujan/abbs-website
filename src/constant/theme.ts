import { createTheme, rem } from '@mantine/core';

const theme = createTheme({
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '2rem',

    // for display
    d1: '4.5rem',
    d2: '4rem',
    d3: '3.5rem'
  },
  lineHeights: {
    xs: '0.975rem',
    sm: '1.09375rem',
    md: '1.5rem',
    lg: '1.35rem',
    xl: '1.75rem',
    xl2: '1.875rem',
    xl3: '2.4rem',

    // for display
    d1: '5.4rem',
    d2: '4.88rem',
    d3: '4.27rem'
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320
        }
      }
    }
  },
  headings: {
    // properties for all headings
    fontWeight: '500',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: rem(32), fontWeight: '700', lineHeight: rem(36) },
      h2: { fontSize: rem(28), fontWeight: '700', lineHeight: rem(32) },
      h3: { fontSize: rem(24), fontWeight: '700', lineHeight: rem(28) }, // 1.5
      h4: { fontSize: rem(20), fontWeight: '700', lineHeight: rem(24) }, // 1.25
      h5: { fontSize: rem(16), fontWeight: '700', lineHeight: rem(20) }, // 1
      h6: { fontSize: rem(14), fontWeight: '700', lineHeight: rem(16) }
    }
  },
  spacing: {
    xs4: '0.125rem',
    xs3: '0.25rem',
    xs2: '0.375rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xl2: '2rem',
    xl3: '2.5rem',
    xl4: '3rem',
    // Extra large
    xl5: '4rem',
    xl6: '6rem'
  },
  colors: {
    grey: [
      '#F2F2F2',
      '#E8E8E8',
      '#D2D2D2',
      '#A5A5A5',
      '#8E8E8E',
      '#727272',
      '#555555',
      '#393939',
      '#1C1C1C',
      '#111111'
    ] as any,
    landing: ['#1F2626'] as any
  },
  primaryShade: { light: 4, dark: 5 }
});

export default theme;
