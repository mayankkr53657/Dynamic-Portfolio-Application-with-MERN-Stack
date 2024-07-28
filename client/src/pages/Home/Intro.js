import React from 'react'
import { useSelector } from 'react-redux';

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  console.log("portfolio data",portfolioData)
  const { intros } = portfolioData;
  console.log("Portfolio intro",intros)
  const {firstName, lastName, welcomeText, description, caption} = intros
  console.log("protfolio firstName",firstName)
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>{welcomeText || ''}</h1>

        <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>{firstName || ''} {lastName || ''}</h1>

        <h1 className='text-7xl sm:text-3xl text-white font-semibold'>{caption || ''}</h1>

        <p className='text-white w-2/3'>{description || ''}</p>

        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>

    </div>
  )
}

export default Intro