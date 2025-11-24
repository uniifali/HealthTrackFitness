import React, { useState } from 'react';
import { Activity, Plus, Trash2 } from 'lucide-react';

const ActivitiesPage = ({ activities, setActivities }) => {
  const [newActivity, setNewActivity] = useState({ type: '', duration: '', calories: '' });

  const addActivity = () => {
    if (newActivity.type && newActivity.duration && newActivity.calories) {
      setActivities([...activities, {
        id: Date.now(),
        ...newActivity,
        duration: parseInt(newActivity.duration),
        calories: parseInt(newActivity.calories),
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewActivity({ type: '', duration: '', calories: '' });
    }
  };

  const deleteActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Activity Tracker</h1>
        
        {/* Add New Activity Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Log New Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Activity Type"
              value={newActivity.type}
              onChange={(e) => setNewActivity({...newActivity, type: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Duration (min)"
              value={newActivity.duration}
              onChange={(e) => setNewActivity({...newActivity, duration: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Calories Burned"
              value={newActivity.calories}
              onChange={(e) => setNewActivity({...newActivity, calories: e.target.value})}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={addActivity}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Activity</span>
            </button>
          </div>
        </div>

        {/* Activities List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{activity.type}</h3>
                    <p className="text-gray-600 text-sm">{activity.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{activity.duration} min</p>
                  <p className="text-blue-600 font-medium">{activity.calories} cal</p>
                </div>
                <button
                  onClick={() => deleteActivity(activity.id)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          {activities.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Activity className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No activities logged yet. Start by adding your first activity!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;