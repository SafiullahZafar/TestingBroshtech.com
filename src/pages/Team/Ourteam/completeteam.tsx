import type { FC } from 'react'
import BottomTeam from './BottomTeam';
import MiddleTeam from './MiddleTeam';

const CompleteTeam : FC = () => {
  return (
    <>
     <MiddleTeam/>
      <BottomTeam/>
    </>
  )
}

export default CompleteTeam;