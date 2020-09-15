import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>editar perfil</EditButton>
        <h1>Victor Brambati</h1>
        <h2>@Victor_Brambati</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a> ,
          100k sem Tweet
        </p>

        <ul>
          <li>
            <LocationIcon />
            Guarapari, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 27 de junho de 2001
          </li>

          <Followage>
            <span>
              seguindo <strong>150</strong>
            </span>
            <span>
              <strong>94233 </strong> seguidores
            </span>
          </Followage>
        </ul>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
