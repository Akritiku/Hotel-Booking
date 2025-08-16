import React, { useState } from 'react';
import { Title } from '../../components/Title';

export const ListRoom = () => {
 // Sample room data
 const [rooms, setRooms] = useState([
 {
      id: 1,
      roomType: 'Deluxe Suite',
      pricePerNight: 250,
      amenities: {
        'Free Wifi': true,
        'Free Breakfast': true,
        'Room Service': true,
        'Mountain Access': false,
        'Pool Access': true,
      },
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      roomType: 'Standard Room',
      pricePerNight: 150,
      amenities: {
        'Free Wifi': true,
        'Free Breakfast': true,
        'Room Service': false,
        'Mountain Access': false,
        'Pool Access': false,
      },
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      roomType: 'Family Room',
      pricePerNight: 200,
      amenities: {
        'Free Wifi': true,
        'Free Breakfast': true,
        'Room Service': true,
        'Mountain Access': true,
        'Pool Access': true,
      },
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="p-4">
      <Title 
        align="left"
        font="outfit"
        title="Room List"
        subTitle="View and manage all available rooms in your property"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className={`border rounded-lg overflow-hidden shadow-md cursor-pointer transition-all hover:shadow-lg ${
              selectedRoom?.id === room.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedRoom(room)}
          >
            <div className="relative">
              <img 
                src={room.image} 
                alt={room.roomType}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{room.roomType}</h3>
                  <span className="font-semibold">${room.pricePerNight}/night</span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-medium mb-2">Amenities:</h4>
              <ul className="space-y-1">
                {Object.entries(room.amenities).map(([amenity, available]) => (
                  <li key={amenity} className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      available ? 'bg-green-500' : 'bg-gray-300'
                    }`}></span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold">{selectedRoom.roomType}</h2>
                <button 
                  onClick={() => setSelectedRoom(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <img 
                src={selectedRoom.image} 
                alt={selectedRoom.roomType}
                className="w-full h-64 object-cover rounded-lg my-4"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Details</h3>
                  <p className="mb-2"><span className="font-medium">Price:</span> ${selectedRoom.pricePerNight} per night</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Amenities</h3>
                  <ul className="space-y-2">
                    {Object.entries(selectedRoom.amenities).map(([amenity, available]) => (
                      <li key={amenity} className="flex items-center">
                        <span className={`inline-block w-4 h-4 rounded-full mr-2 ${
                          available ? 'bg-green-500' : 'bg-gray-300'
                        }`}></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

 <div className="mt-6 flex justify-end space-x-3">
 <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
 Edit
 </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};