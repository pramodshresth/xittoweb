import React, { useState,useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ViewMap = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [userLocation, setUserLocation] = useState('loading');

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setUserLocation('success');
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error('User denied the request for Geolocation.');
            setUserLocation('denied');
            break;
          case error.POSITION_UNAVAILABLE:
            console.error('Location information is unavailable.');
            setUserLocation('error');
            break;
          case error.TIMEOUT:
            console.error('The request to get user location timed out.');
            setUserLocation('error');
            break;
          default:
            console.error('An unknown error occurred.');
            setUserLocation('error');
            break;
        }
      }
    );
  };

  const handleRetry = () => {
    setUserLocation('loading');
    getLocation();
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        getLocation();
      } else if (result.state === 'prompt') {
        getLocation();
      } else if (result.state === 'denied') {
        console.error('Geolocation permission denied');
        setUserLocation('denied');
      }

      result.onchange = function () {
        if (result.state === 'granted') {
          getLocation();
        } else if (result.state === 'denied') {
          setUserLocation('denied');
        }
      };
    });
  }, []);

  return (
    <div className='map-container'>
     {userLocation === 'loading' && <p>Loading...</p>}
      {userLocation === 'success' && (
        <p>
          Latitude: {lat}, Longitude: {lng}
        </p>
      )}
      {userLocation === 'denied' && (
        <div>
          <p>Geolocation permission denied. Please enable location services to use this feature.</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
      {userLocation === 'error' && <p>Error getting user location.</p>}
      </div>
  );
};

export default ViewMap;
