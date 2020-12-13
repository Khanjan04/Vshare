import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' >
      <h1>Check out these EPIC Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-1.jpg'
              text='Raspberry-pie workshop on robotics and bluetooth integration with arduino'
              label='TRF'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Cleaning camp on parvati hills on Sunday'
              label='SWD Club'
              path='/services'
            />
            <CardItem
              src='/images/img-3.jpg'
              text='Cyber Security in Web and Android Technologies'
              label='IEEE'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-4.jpg'
              text='Inter-College Football championship in COEP PUNE'
              label='Sports'
              path='/products'
            />
            <CardItem
              src='/images/img-5.jpg'
              text='Get the basics of HTML, CSS and Javascript for Web Development'
              label='DSC'
              path='/sign-up'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Cleaning camp on parvati hills on Sunday'
              label='SWD Club'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='Cyber Security in Web and Android Technologies'
              label='IEEE'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Inter-College Football championship in COPE PUNE'
              label='Sports'
              path='/products'
            />
            <CardItem
              src='/images/img-5.jpg'
              text='Get the basics of HTML, CSS and Javascript for Web Development'
              label='DSC'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
