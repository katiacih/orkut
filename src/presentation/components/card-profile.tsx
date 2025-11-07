import React from "react";
import { Card, ProfileName, ProfilePhoto } from "./card-profile.styles";



function CardProfile() {

 return (
  <Card>
    <ProfilePhoto>
      <img src="./src/presentation/resources/dwightshrute.jpeg" alt="Girl in a jacket" width="500" height="200" />
    </ProfilePhoto>
    <ProfileName>Iuri Silva</ProfileName>
    <p>Solteiro, Brasil</p>
  </Card>
)
}

export default CardProfile;