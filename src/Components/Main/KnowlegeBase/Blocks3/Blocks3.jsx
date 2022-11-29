import React from "react";
import style from './Blocks3.module.css';
import state from "../../../state";
import Block3 from "./Block3/Block3";

let blockElement3 = state.knowledge_base_page.allBase.blocks3.map(block => <Block3 img={block.img} header={block.header} row1={block.row1} row2={block.row2} row3={block.row3} list={block.list_img}/>)

const Blocks3 = () => {
  return (
      <div className={style.allBlocks}>
          {blockElement3}
      </div>
  )
}

export default Blocks3