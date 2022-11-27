import React from "react";
import style from './BaseAll.module.css'

const BaseAll = (props) => {
  return (
      <div className={style.baseAll}>
          {props.children}
      </div>
  )
}

export default BaseAll