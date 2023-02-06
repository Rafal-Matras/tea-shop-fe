import { useState } from 'react';

import { HeaderNav } from './HeaderNav/HeaderNav';
import { HeaderTop } from './HeaderTop/HeaderTop';
import { HeaderCentral } from './HeaderCentral/HeaderCentral';

export const Header = () => {

  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <div>
      <HeaderTop/>
      <HeaderCentral click={setActiveMenu}/>
      <HeaderNav activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
    </div>
  );
};