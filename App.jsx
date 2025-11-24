import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ActivitiesPage from './components/ActivitiesPage';
import NutritionPage from './components/NutritionPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { Heart, User, Phone } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activities, setActivities] = useState([
    { id: 1, type: 'Running', duration: 30, calories: 300, date: '2024-01-15' },
    { id: 2, type: 'Yoga', duration: 45, calories: 150, date: '2024-01-14' }
  ]);
  const [meals, setMeals] = useState([
    { id: 1, name: 'Oatmeal', calories: 300, protein: 10, carbs: 50, fat: 5, date: '2024-01-15' },
    { id: 2, name: 'Chicken Salad', calories: 450, protein: 35, carbs: 20, fat: 25, date: '2024-01-15' }
  ]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': 
        return <HomePage 
          activities={activities} 
          meals={meals} 
          setCurrentPage={setCurrentPage} 
        />;
      case 'activities': 
        return <ActivitiesPage 
          activities={activities} 
          setActivities={setActivities} 
        />;
      case 'nutrition': 
        return <NutritionPage 
          meals={meals} 
          setMeals={setMeals} 
        />;
      case 'about': 
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact': 
        return <ContactPage />;
      default: 
        return <HomePage 
          activities={activities} 
          meals={meals} 
          setCurrentPage={setCurrentPage} 
        />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold">HealthTrack</h3>
              </div>
              <p className="text-gray-400">
                Your personal wellness companion for a healthier, happier life.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('activities')} className="hover:text-white transition-colors">Activities</button></li>
                <li><button onClick={() => setCurrentPage('nutrition')} className="hover:text-white transition-colors">Nutrition</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <button
                    key={social}
                    className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-200"
                  >
                    <div className="w-5 h-5"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HealthTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;