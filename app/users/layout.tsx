import Sidebar from '../components/sidebar/Sidebar';

type UsersLayoutProps = {
  children: React.ReactNode;
};

export default async function UsersLayout({ children }: UsersLayoutProps) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className='h-full'>{children}</div>
    </Sidebar>
  );
}
