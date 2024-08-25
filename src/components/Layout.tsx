// src/components/Layout.tsx
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        {/* Your header content */}
        <nav>
          {/* Navigation links */}
        </nav>
      </header>
      
      <main>
        {children} {/* This is where your page content will be injected */}
      </main>
      
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;
