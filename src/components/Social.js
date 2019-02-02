import React from 'react';
import styled from 'styled-components';

export default function Social() {
  return (
    <NavbarSocial>
      <SocialLink href="https://www.facebook.com/profile.php?id=100001471458524" target="_blank" aria-label="Ссылка на facebook">
        <i className="fab fa-facebook-f" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/Milaya_Vesna/" target="_blank" aria-label="Ссылка на instagram">
        <i className="fab fa-instagram" />
      </SocialLink>
      <SocialLink href="viber://add?number=380932104433" target="_blank" aria-label="Ссылка на viber">
        <i className="fab fa-viber" />
      </SocialLink>
    </NavbarSocial>
  );
}

const NavbarSocial = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  color: white;
  box-shadow: inset 0 0 0px 3px #fff;
  font-size: 24px;
  text-decoration: none;
  height: 40px;
  width: 40px;
  transition: 0.5s all;
  background-color: #86725c;
  margin: 10px 0;
  & i {
    line-height: 0.8;
  }

  &:hover {
    color: pink;
    /* box-shadow: inset 0 0 0px 3px pink; */
  }
`;
