import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px;

  border: 1px solid ${p => p.theme.color.cardBorder};
  border-radius: 8px;

  box-shadow: 0px 51px 80px rgba(0, 0, 0, 0.04),
    0px 21.3066px 33.4221px rgba(0, 0, 0, 0.0287542),
    0px 11.3915px 17.869px rgba(0, 0, 0, 0.0238443),
    0px 6.38599px 10.0172px rgba(0, 0, 0, 0.02),
    0px 3.39155px 5.32008px rgba(0, 0, 0, 0.0161557),
    0px 1.4113px 2.21381px rgba(0, 0, 0, 0.0112458);

  background-color: ${p => p.theme.color.card};
`
