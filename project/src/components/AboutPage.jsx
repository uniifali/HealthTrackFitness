import React from 'react';
import { Activity, Utensils, Heart, Calendar } from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About HealthTrack</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            HealthTrack was created with a simple mission: to make personal wellness tracking accessible, 
            intuitive, and effective for everyone. We believe that taking control of your health shouldn't 
            be complicated, and that small, consistent actions lead to lasting positive changes.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <Activity className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Activity Tracking</h3>
              <p className="text-gray-600">Monitor workouts, steps, and active minutes with detailed insights and progress tracking.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <Utensils className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Nutrition Logging</h3>
              <p className="text-gray-600">Keep track of meals, calories, and macronutrients with our easy-to-use logging system.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            We combine cutting-edge technology with evidence-based health principles to provide you with 
            actionable insights. Our platform is designed to be intuitive enough for beginners while offering 
            advanced features for those who want deeper analysis of their wellness journey.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
          <p className="mb-6 opacity-90">Join thousands of users who have transformed their health with HealthTrack</p>
          <button 
            onClick={() => setCurrentPage('home')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;