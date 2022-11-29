import React from "react";
import style from './KnowledgeBase.module.css';
import Menu from "./Menu/Menu";
import Blocks3 from "./Blocks3/Blocks3";
import {Route, Routes} from "react-router-dom";
import BaseAll from "./BaseAll/BaseAll";
import Blocks2 from "./Blocks2/Blocks2";
import Blocks1 from "./Blocks1/Blocks1";

const KnowledgeBase = (props) => {
  return (
      <div className={style.knowledgeBase}>
          <Menu forMenu={props.forKnowledgeBase}/>

          <BaseAll forBaseAll={props.forKnowledgeBase}>
              <Routes>
                  <Route path="/*" element={<Blocks1/>}/>
                  <Route path="/purchase-and-refund" element={<Blocks3/>}/>
                  <Route path="/popular-questions" element={<Blocks2/>}/>
                  <Route path="/analytics" element={<Blocks1/>}/>
              </Routes>
          </BaseAll>
      </div>
  )
}

export default KnowledgeBase