
import { useEffect } from "react"
import styled from "styled-components"
import {  collection, onSnapshot } from 'firebase/firestore'
import { db } from "../firebase";

// Initialize Firebase

import { HomeBackGround } from "../assets/images"
import { ImgSlider, Viewers, Movies } from './index'

const Home = () => {
  useEffect(()=>{
    const fetchData = async () => {
      const moviesCollectionRef = collection(db, 'Movies');
      const unsubscribe = onSnapshot(moviesCollectionRef, (snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      });
      
      return () => unsubscribe(); // Cleanup function
    };
    fetchData();
}, [])
  
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before{
    background: url(${HomeBackGround}) center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`