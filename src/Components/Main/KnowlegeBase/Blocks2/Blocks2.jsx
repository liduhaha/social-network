import React from "react";
import style from './Blocks2.module.css';
import state from "../../../state";
import Block2 from "./Block2/Block2";

let blockElement2 = state.blocks.map(block => <Block2 img={block.img} header={block.header} row1={block.row1} row2={block.row2} row3={block.row3} list={block.list_img}/>)

const Blocks2 = (props) => {
  return (
      <div className={style.allBlocks}>
          {blockElement2}
      </div>
  )
}

export default Blocks2