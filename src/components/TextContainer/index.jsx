import React from 'react';
import { TextDiv, MainDiv, ListValue, ImgDiv} from './styles';

const TextContainer = ({ img, texts, title, list }) => {
    const renderTexts = () => {
      if(texts && texts.length > 0){
        return texts.map((text) => <p>{text}</p>)
      }
      return <></>;
    }

    const renderList = () => {
      if(list && list.length > 0){
        return <ul>{list.map((item) => <ListValue>{item}</ListValue>)}</ul>
      }
      return <></>;
    }



    return (
        <MainDiv>
          <img src={img} style={{ width: "28rem", height: "38rem" }} />
          <TextDiv>
            <h1>{title}</h1>
            {renderTexts()}
            {renderList()}
          </TextDiv>
        </MainDiv>
    )
}

export default TextContainer;