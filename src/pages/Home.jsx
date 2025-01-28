import React from 'react';
import CapsuleAdder from '../components/CapsuleAdder';
import CapsuleCard from '../components/CapsuleCard';

const Home = () => {
  return (
    <div>
      <h3>Capsule Adder</h3>

      < CapsuleAdder />

      <hr/>

      <h3>Check Capsules</h3>

      <CapsuleCard/>
    </div>
  )
}

export default Home;
