import { insert } from "formik";
import React from "react";
import styled from "styled-components";
import alunos from './data.js'
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        

        
        <SignUp>Get All There</SignUp>
        <Description>Get Premiere Access </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />

      </CTA>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity:0.7;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top:100px;
  align-items:center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  background: #0063e5;
  width: 100%;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition:all 250ms;
  letter-spacing:1.5px;
  margin-top:8px;
  margin-bottom:12px;

  &:hover{
    background:#0483ee;
  }
`;

const Description=styled.div`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`

const CTALogoTwo=styled.img`
width:90%;
`
export default Login;
