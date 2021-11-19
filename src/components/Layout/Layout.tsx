import React from 'react'

import {motion} from 'framer-motion'

import * as S from './Layout.styles'

export interface LayoutProps {
  children: React.ReactNode
}

const variants = {
  hidden: {opacity: 0, x: -200, y: 0},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: -100},
}

export function Layout(props: LayoutProps): React.ReactElement {
  const {children} = props

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{type: 'linear'}}
    >
      <S.Container>{children}</S.Container>
    </motion.div>
  )
}
