import type { FC } from 'react'
import BottomTeam from './BottomTeam';
import MiddleTeam from './MiddleTeam';
import TeamTop from './TeamTop';

const CompleteTeam : FC = () => {
  return (
    <>
     {/* <TeamTop/> */}
     <MiddleTeam/>
      <BottomTeam/>
    </>
  )
}

export default CompleteTeam;