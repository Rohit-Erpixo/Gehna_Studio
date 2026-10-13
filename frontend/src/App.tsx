import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { api } from './services/api';
import { TopHeader } from './components/layout/TopHeader';
import { BottomNav } from './components/layout/BottomNav';
import { DashboardPage } from './pages/DashboardPage';
import { GalleryPage } from './pages/GalleryPage';
import { CreatePage } from './pages/CreatePage';
import { TemplatesPage } from './pages/TemplatesPage';
import { ProfilePage } from './pages/ProfilePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60_000, retry: 1 },
  },
});

// Pages that supply their own full-screen layout (no shared TopHeader)
const FULL_SCREEN_PATHS = ['/create'];

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data: userCredits } = useQuery({
    queryKey: ['userCredits'],
    queryFn: () => api.getUserCredits(),
  });

  const { data: recentProjects = [] } = useQuery({
    queryKey: ['recentProjects'],
    queryFn: () => api.getRecentProjects(),
  });

  const { data: favouriteTemplates = [] } = useQuery({
    queryKey: ['favouriteTemplates'],
    queryFn: () => api.getFavouriteTemplates(),
  });

  const { data: packages = [] } = useQuery({
    queryKey: ['creditPackages'],
    queryFn: () => api.getCreditPackages(),
  });

  const isFullScreen = FULL_SCREEN_PATHS.some(p => location.pathname.startsWith(p));

  return (
    <div className="min-h-screen bg-[#FAF8F3] flex flex-col max-w-md mx-auto relative overflow-x-hidden shadow-[0_0_60px_rgba(0,0,0,0.08)]">
      {!isFullScreen && (
        <TopHeader
          userCredits={userCredits}
          onOpenCreditsModal={() => navigate('/profile')}
        />
      )}

      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                userCredits={userCredits}
                recentProjects={recentProjects}
                favouriteTemplates={favouriteTemplates}
              />
            }
          />
          <Route
            path="/gallery"
            element={<GalleryPage projects={recentProjects} />}
          />
          <Route path="/create" element={<CreatePage />} />
          <Route
            path="/templates"
            element={<TemplatesPage templates={favouriteTemplates} />}
          />
          <Route
            path="/profile"
            element={<ProfilePage userCredits={userCredits} packages={packages} />}
          />
        </Routes>
      </main>

      <BottomNav />
    </div>
  );
};

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
