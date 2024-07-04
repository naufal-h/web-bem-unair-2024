import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';



import { UserLayout } from './components/user-layout.js';
import { LayoutWrapperProps } from '@/Layouts/utils/typeLayout.js';
import { useSettings } from '../hooks/use-settings.js';

interface GuardProps extends PropsWithChildren {
  readonly authGuard: boolean
  readonly guestGuard: boolean
}

const Guard: FC<GuardProps> = ({
  children = undefined, authGuard, guestGuard
}) => {
  if (guestGuard) {
    // return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>;
  }

  if (!guestGuard && !authGuard) {
    return <>{children}</>;
  }

  // return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
};

Guard.displayName = 'Guard';

// const defaultACLObj: ACLObj = {
//   action: 'manage',
//   subject: 'all'
// };

const LayoutWrapper: FC<LayoutWrapperProps> = ({
  children = null, ...props
}) => {
  const location = useLocation();
  const { settings } = useSettings();
  // const [_, setTitle] = usePageTitle({ appName: app.name });

  const authGuard = props.route?.id === '*'
    ? false
    : props.route?.auth !== false;
  const guestGuard = props.route?.guest === true;
  const aclAbilities = props.route?.meta?.acl as ACLObj ?? defaultACLObj;

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    const [{ route }] = (matchRoutes(routes, location) ?? [{ route: props.route }]).slice(-1);

    route?.title;

    // return () => {
    //   setTitle('');
    // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ThemeComponent settings={settings}>
      
          <UserLayout {...props}>
            {children}
          </UserLayout>
   
    </ThemeComponent>
  );
};

LayoutWrapper.displayName = 'LayoutWrapper';

export { LayoutWrapper };
