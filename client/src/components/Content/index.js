import React from 'react'
import PowerBi from './PowerBi'

import style from './styles.module.css'

const Content = () => {
  return (
    <React.Fragment>
      <section className={style.content}>
        <PowerBi />

        {/* @@@TODO
        AHP */}
      </section>
    </React.Fragment>
  )
}

export default Content
