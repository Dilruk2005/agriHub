import React from 'react';
import { Calendar, User } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Agricultural Machinery Available',
      date: '2024-01-15',
      author: 'Admin',
      summary: 'We have added new tractors and harvesters to our fleet for the upcoming season.',
      category: 'Announcement'
    },
    {
      id: 2,
      title: 'Training Program for Farmers',
      date: '2024-01-10',
      author: 'Government Officer',
      summary: 'Free training program on modern farming techniques starting next month.',
      category: 'Training'
    },
    {
      id: 3,
      title: 'Weather Advisory for Farmers',
      date: '2024-01-05',
      author: 'Meteorological Department',
      summary: 'Heavy rainfall expected in the coming weeks. Take necessary precautions.',
      category: 'Weather'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Announcements</h1>
          <p className="text-gray-600">Stay updated with latest news and announcements</p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="card">
              <div className="flex flex-wrap items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{item.summary}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>{item.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;