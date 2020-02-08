import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'

const Layout = props => {
  const { children } = props

  const [menuVisible, setMenuVisible] = useState(false)
  const [loadingClass, setLoadingClass] = useState('is-loading')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingClass('')
    }, 100)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <div className={`body ${loadingClass} ${menuVisible ? 'is-menu-visible' : ''}`}>
      <div id="wrapper">
        <Header onToggleMenu={() => setMenuVisible(!menuVisible)}/>
        {children}
        <Contact/>
        {/*<Footer/>*/}
      </div>
      <Menu onToggleMenu={() => setMenuVisible(!menuVisible)}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
