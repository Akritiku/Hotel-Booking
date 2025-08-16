import { useState } from 'react';
import { Title } from '../../components/Title'; // Ensure this path is correct

export const AddRoom = () => {
    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: 0,
        amenities: {
            'Free Wifi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain Access': false,
            'Pool Access': false,
        }
    });

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAmenitiesChange = (e) => {
        const { name, checked } = e.target;
        setInputs((prev) => ({
            ...prev,
            amenities: {
                ...prev.amenities,
                [name]: checked
            }
        }));
    };

    const handleImageSelect = (image) => {
        setSelectedImageIndex(image.id);
        setInputs((prev) => ({
            ...prev,
            pricePerNight: image.price,
            roomType: image.alt // Optionally update the room type field as well
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    const roomImages = [
        { id: 1, src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Deluxe Suite', price: 250 },
        { id: 2, src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Standard Room', price: 120 },
        { id: 3, src: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Family Room', price: 180 },
        { id: 4, src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Penthouse Suite', price: 500 },
        { id: 5, src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Ocean View', price: 300 },
        { id: 6, src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Garden View', price: 150 },
        { id: 7, src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Business Suite', price: 280 },
        { id: 8, src: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Economy Room', price: 90 },
    ];

    return (
        <form onSubmit={handleSubmit} className="p-4 flex">
            <div className="flex-1">
                <Title 
                    align='left' 
                    font='outfit' 
                    title='Add Room' 
                    subTitle='Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience.'
                />

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="roomType">Room Type</label>
                    <input 
                        type="text" 
                        id="roomType" 
                        name="roomType" 
                        value={inputs.roomType} 
                        onChange={handleInputChange} 
                        className="border border-gray-300 rounded p-2 w-full" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="pricePerNight">Price Per Night</label>
                    <input 
                        type="number" 
                        id="pricePerNight" 
                        name="pricePerNight" 
                        value={inputs.pricePerNight} 
                        onChange={handleInputChange} 
                        className="border border-gray-300 rounded p-2 w-full" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <h3 className="font-medium mb-2">Amenities</h3>
                    {Object.keys(inputs.amenities).map((amenity) => (
                        <div key={amenity} className="flex items-center mb-2">
                            <input 
                                type="checkbox" 
                                id={amenity} 
                                name={amenity} 
                                checked={inputs.amenities[amenity]} 
                                onChange={handleAmenitiesChange} 
                                className="mr-2" 
                            />
                            <label htmlFor={amenity}>{amenity}</label>
                        </div>
                    ))}
                </div>

                {/* Smaller Add Room button */}
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white rounded px-3 py-1 text-sm hover:bg-blue-600 transition-colors w-auto"
                >
                    Add Room
                </button>
            </div>

            {/* Right side container */}
            <div className="ml-4 w-1/3 flex flex-col">
                <h3 className="font-medium mb-2">Room Images</h3>
                {/* Display images in a grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {roomImages.map((image) => (
                        <img 
                            key={image.id} 
                            src={image.src} 
                            alt={image.alt} 
                            className={`w-full h-24 object-cover cursor-pointer ${selectedImageIndex === image.id ? 'border-2 border-blue-500' : ''}`} 
                            onClick={() => handleImageSelect(image)} 
                        />
                    ))}
                </div>

                {/* Selected details section */}
                {selectedImageIndex !== null && (
                    <div className="mb-4 p-4 bg-gray-100 rounded">
                        <h4 className="font-medium mb-2">Selected Room Details:</h4>
                        <p>Room Type: {inputs.roomType}</p>
                        <p>Price Per Night: ${inputs.pricePerNight}</p>
                        {/* <p>Selected Image: {roomImages.find(img => img.id === selectedImageIndex)?.alt}</p> */}
                    </div>
                )}
            </div>
        </form>
    );
}