import React from 'react'
import { ContentGridOne, ContentGridThree, ContentGridTwo, ContentsGrid } from './styles';
import CardProfile from '../../components/card-profile';


function Contents() {
  return (
    <ContentsGrid>
      <ContentGridOne>
        <CardProfile />
      </ContentGridOne>
      <ContentGridTwo>
        <CardProfile />
      </ContentGridTwo>
      <ContentGridThree>
        <CardProfile />
      </ContentGridThree>
      
    </ContentsGrid>    
  )
}

export default Contents;
