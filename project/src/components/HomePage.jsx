import React from 'react';
import { Heart, Activity, Utensils, Calendar } from 'lucide-react';

const HomePage = ({ activities, meals, setCurrentPage }) => {
  const totalCaloriesBurned = activities.reduce((sum, activity) => sum + activity.calories, 0);
  const totalCaloriesConsumed = meals.reduce((sum, meal) => sum + parseInt(meal.calories), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Wellness</span> Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take control of your health with our comprehensive fitness and nutrition tracking platform. 
            Monitor your progress, stay motivated, and achieve your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('activities')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Tracking Activities
            </button>
            <button 
              onClick={() => setCurrentPage('nutrition')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Log Nutrition
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Wellness Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl text-center">
              <Activity className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Activities</h3>
              <p className="text-4xl font-bold">{activities.length}</p>
              <p className="text-blue-100 mt-2">Total Sessions</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl text-center">
              <Utensils className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Nutrition</h3>
              <p className="text-4xl font-bold">{meals.length}</p>
              <p className="text-green-100 mt-2">Meals Logged</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Balance</h3>
              <p className="text-4xl font-bold">{totalCaloriesBurned - totalCaloriesConsumed}</p>
              <p className="text-purple-100 mt-2">Net Calories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose HealthTrack?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Activity,
                title: 'Activity Tracking',
                description: 'Monitor your workouts, steps, and active minutes with detailed insights.'
              },
              {
                icon: Utensils,
                title: 'Nutrition Logging',
                description: 'Keep track of your meals, calories, and macronutrients effortlessly.'
              },
              {
                icon: Calendar,
                title: 'Progress Reports',
                description: 'Visualize your journey with comprehensive charts and analytics.'
              },
              {
                icon: Heart,
                title: 'Health Insights',
                description: 'Get personalized recommendations based on your wellness data.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;