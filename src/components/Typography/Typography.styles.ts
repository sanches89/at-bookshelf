import styled, {css, FlattenSimpleInterpolation} from 'styled-components'

import {TypographyProps, Variant} from '.'

const typography = {
  pageHeader: css`
    font-size: 4.2rem;
    font-weight: 700;
  `,
  cardHeader: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  cardAuthor: css`
    display: block;

    color: ${p => p.theme.color.cardAuthor};

    font-size: 1.2rem;
    font-weight: 500;
  `,
  paragraph: css`
    font-size: 1.4rem;
    font-weight: 400;
  `,
} as Record<Variant, FlattenSimpleInterpolation>

export const Container = styled.div<Omit<TypographyProps, 'children'>>`
  ${p => typography[p.variant ?? 'paragraph']}
`
