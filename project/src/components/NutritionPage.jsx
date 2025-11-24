import React, { useState } from 'react';
import { Utensils, Plus, Trash2 } from 'lucide-react';

const NutritionPage = ({ meals, setMeals }) => {
  const [newMeal, setNewMeal] = useState({ name: '', calories: '', protein: '', carbs: '', fat: '' });

  const addMeal = () => {
    if (newMeal.name && newMeal.calories) {
      setMeals([...meals, {
        id: Date.now(),
        ...newMeal,
        calories: parseInt(newMeal.calories),
        protein: parseInt(newMeal.protein) || 0,
        carbs: parseInt(newMeal.carbs) || 0,
        fat: parseInt(newMeal.fat) || 0,
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewMeal({ name: '', calories: '', protein: '', carbs: '', fat: '' });
    }
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Nutrition Tracker</h1>
        
        {/* Add New Meal Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Log New Meal</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <input
              type="text"
              placeholder="Meal Name"
              value={newMeal.name}
              onChange={(e) => setNewMeal({...newMeal, name: e.target.value})}
              className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Calories"
              value={newMeal.calories}
              onChange={(e) => setNewMeal({...newMeal, calories: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Protein (g)"
              value={newMeal.protein}
              onChange={(e) => setNewMeal({...newMeal, protein: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Carbs (g)"
              value={newMeal.carbs}
              onChange={(e) => setNewMeal({...newMeal, carbs: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              onClick={addMeal}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Meal</span>
            </button>
          </div>
        </div>

        {/* Meals List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Meals</h2>
          <div className="space-y-4">
            {meals.map((meal) => (
              <div key={meal.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Utensils className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{meal.name}</h3>
                    <p className="text-gray-600 text-sm">{meal.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{meal.calories} cal</p>
                  <p className="text-purple-600 text-sm">
                    P:{meal.protein}g C:{meal.carbs}g F:{meal.fat}g
                  </p>
                </div>
                <button
                  onClick={() => deleteMeal(meal.id)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          {meals.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No meals logged yet. Start by adding your first meal!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;