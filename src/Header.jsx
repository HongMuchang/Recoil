import React from 'react'
import { useRecoilValue } from "recoil";
import { countState, doubleState } from './recoil/atom'

function Header() {
  const count = useRecoilValue(countState);
  const double = useRecoilValue(doubleState);


  return (
    <div>
      <p>Header呼び出し:{count}</p>
      <p>Header呼び出し:{double}</p>
    </div>
  )
}

export default Header
