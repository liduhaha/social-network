import React from "react";
import style from './Blocks1.module.css';
import state from "../../../state";
import Block1 from "./Block1/Block1";

let blockElement1 = state.blocks.map(block => <Block1 img={block.img} header={block.header} row1={block.row1} row2={block.row2} row3={block.row3} list={block.list_img}/>)

const Blocks1 = () => {
  return (
      <div className={style.allBlocks}>
          {blockElement1}
      </div>
  )
}

export default Blocks1