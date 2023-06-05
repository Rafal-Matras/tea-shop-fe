import { Role } from '../../types';

import { NotFoundViews } from '../../views/NotFoundViews';
import { UseUserContext } from '../../context/UserContext';

interface Props {
  role: Role;
  view: JSX.Element;
}

export const SecurePath = ({role, view}: Props) => {

  const {user} = UseUserContext()

  if(user.role === role) return view

  return <NotFoundViews/>;
};