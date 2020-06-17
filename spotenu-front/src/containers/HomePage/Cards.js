import React from 'react';
import {CardContent} from "@material-ui/core";
import { CardWrapper, CardContainer } from './styles'


export default function Cards(){
    return(
        <CardWrapper>
              <CardContainer>
                <CardContent>
                  <img src={require('../img/rock.png')} alt="Foto Rock"/>
                </CardContent>
              </CardContainer>

              <CardContainer>
                <CardContent>
                  <img src={require('../img/metal.jpg')} alt="Foto Metal"/>
                </CardContent>
              </CardContainer>

              <CardContainer>
                <CardContent>
                  <img src={require('../img/rap.jpg')} alt="Foto Rap"/>
                </CardContent>
              </CardContainer>

              <CardContainer>
                <CardContent>
                  <img src={require('../img/eletronica.jpg')} alt="Foto Música Eletrônica"/>
                </CardContent>
              </CardContainer>

              <CardContainer>
                <CardContent>
                  <img src={require('../img/sertanejo.jpeg')} alt="Foto Sertanejo"/>
                </CardContent>
              </CardContainer>

              <CardContainer>
                <CardContent>
                  <img src={require('../img/funk.jpeg')} alt="Foto Funk"/>
                </CardContent>
              </CardContainer>
      </CardWrapper>
    )
}