import AuthContext from '../common/SessionProvider';

export interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout(accountLayoutProps: AccountLayoutProps) {
  return <AuthContext>{accountLayoutProps.children}</AuthContext>;
}
