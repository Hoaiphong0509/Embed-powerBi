import React from 'react'

import style from './styles.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li className={style.item}>Trần Vĩnh Trí</li>
        <li className={style.item}>Nguyễn Hoàng Gia Quy</li>
        <li className={style.item}>Trần Trung Tín</li>
        <li className={style.item}>Phi Long</li>
      </ul>
    </footer>
  )
}

export default Footer
