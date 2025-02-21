'use client'
import React from 'react'

interface ITextPropType {
  style?: string
  children: React.ReactNode
  as?: 'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  clickFunc?: () => void
}

export const Text: React.FC<ITextPropType> = ({
  style,
  children,
  clickFunc,
  as
}) => {
  const Component: React.FC<ITextPropType> = ({
    as,
    style,
    clickFunc,
    children
  }) => {
    const Element = as ? as : 'div'
    return React.createElement(
      Element,
      { className: style, onClick: clickFunc },
      children
    )
  }
  if (as) {
    return (
      <Component style={style} clickFunc={clickFunc} as={as}>
        {children}
      </Component>
    )
  } else {
    return (
      <div className={style} onClick={clickFunc}>
        {children}
      </div>
    )
  }
}
