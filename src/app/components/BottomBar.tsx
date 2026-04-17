import { Home, Database, Server, Shield, Network } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function BottomBar() {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Inicio', path: '/' },
    { icon: Server, label: 'EC2', path: '/instances' },
    { icon: Database, label: 'S3', path: '/views-editor' },
    { icon: Shield, label: 'IAM', path: '/settings' },
    { icon: Network, label: 'VPC', path: '/profile' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white lg:top-0 lg:right-auto lg:bottom-0 lg:left-0 lg:w-20 lg:border-t-0 lg:border-r">
      <div className="flex h-16 lg:h-full lg:flex-col lg:py-4">
        {/* Menu Items */}
        <div className="flex flex-1 lg:flex-none lg:flex-col lg:space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-all duration-200 lg:mx-2 lg:flex-none lg:flex-col lg:gap-1.5 lg:rounded-xl lg:py-3 ${
                  active
                    ? 'text-blue-600 lg:bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 lg:hover:bg-gray-100'
                } `}
              >
                <Icon
                  className={`h-6 w-6 lg:h-6 lg:w-6 ${active ? 'text-blue-600' : ''}`}
                />
                <span
                  className={`text-xs font-medium ${active ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* User Avatar - solo desktop */}
        <div className="mt-auto hidden items-center justify-center border-t border-gray-200 pt-4 lg:flex">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-medium text-white ring-blue-300 transition-all hover:ring-2">
            U
          </div>
        </div>
      </div>
    </nav>
  );
}
