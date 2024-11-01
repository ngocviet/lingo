type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main className="">{children}</main>
    </>
  );
};

export default MainLayout;
