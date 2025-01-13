import React from 'react'

function HiperLink({link, children}) {
  return (
    <a href={link}>{children}</a>
  )
}

export default HiperLink
