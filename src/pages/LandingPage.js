import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import RegisterForm from '../components/formComp/RegisterForm';
import LoginForm from '../components/formComp/LoginForm';
import DevMode from '../components/miscComp/DevMode';

export default function LandingPage() {
  // const isDesktopOrLaptop = useMediaQuery({
  // 	query: '(min-device-width: 1224px)',
  // });
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // const isTabletOrMobileDevice = useMediaQuery({
  // 	query: '(max-device-width: 1224px)',
  // });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const [welcome, setWelcome] = useState(false);

  const setBannerClass = () => {
    const classArr = ['banner-side cfb'];
    if (welcome) classArr.push('send-right');
    return classArr.join(' ');
  };

  const setFormClass = () => {
    const classArr = ['form-side cfb'];
    if (welcome) classArr.push('send-left');
    return classArr.join(' ');
  };

  return (
    <div className='flex flex-col'>
      {isTabletOrMobile ? (
        <div className=''>
          <h1 className='logo text-red-500 font-bold text-4xl text-center mt-4'>
            Retro-Game-Maker
          </h1>
        </div>
      ) : (
        <div className='mb-12'>
          <h1 className='logo text-red-500 font-bold text-6xl text-center mt-4'>
            Retro-Game-Maker
          </h1>
        </div>
      )}

      <div className='Container cfb'>
        <div className={setBannerClass()}>
          {welcome ? (
            <h2 className='text-xl mt-2'>Hello, New Friend!</h2>
          ) : (
            <h2 className='text-xl mt-2'>Welcome Back</h2>
          )}
          <button
            className='btn hover:bg-blue-600  border-white text-white border mt-2'
            onClick={() => setWelcome(!welcome)}>
            {welcome ? 'Sign In' : 'Create Account'}
          </button>
        </div>
        <div className={setFormClass()}>
          {welcome ? (
            <div>
              <RegisterForm setWelcome={setWelcome} welcome={welcome} />
            </div>
          ) : (
            <div>
              <LoginForm />
            </div>
          )}
        </div>
      </div>
      <div id='demo-container' className='absolute bottom-2 w-full'>
        <h2 className='text-3xl text-center text-yellow-400 py-8'>
          Experience Retro Game-Making...!
        </h2>
        <DevMode />
        <h2 className='text-yellow-400 text-2xl text-center py-10'>
          More Features Coming Soon.
        </h2>
      </div>
    </div>
  );
}
