import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/heroComp/Player';
import RenderMap from '../components/mapComp/RenderMap';
import GameInstructions from '../components/miscComp/GameInstructions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import starterMap from '../components/miscComp/starterMap';
import GamePageNav from '../components/navbars/GamePageNav';

export default function GamePage() {
  const slug = useParams();
  const skins = [
    { value: 'char1', name: 'Sennad' },
    { value: 'char2', name: 'Danish' },
    { value: 'char3', name: 'WhoButJG' },
    { value: 'char4', name: 'Ibrahim' },
  ];
  const [skin, setSkin] = useState('char3');
  const [mapObj, setMapObj] = useState(null);
  const [mapId, setMapId] = useState('');
  const [maps, setMaps] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (slug.id)
      fetch(`https://retro-game-maker.herokuapp.com/map/${slug.id}/all`)
        .then((res) => res.json())
        .then((data) => setMaps(data));
  }, [slug, mapId]);

  useEffect(() => {
    if (mapId)
      fetch(`https://retro-game-maker.herokuapp.com/map/${mapId}/show`)
        .then((res) => res.json())
        .then((data) => setMapObj(data));
    if (!mapId) setMapObj(starterMap);
  }, [mapId]);

  function deleteMap() {
    fetch(`https://retro-game-maker.herokuapp.com/map/${mapId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => setMapId(''));
  }
  function logout() {
    localStorage.removeItem('token');
  }
  return (
    <div className='flex flex-col '>
      <GamePageNav logout={logout} token={token} />
      <div className='h-full flex w-full justify-between  mb-1 p-2 '>
        {token && (
          <>
            <div className='w-2/6 h-full m-3'>
              <Dropdown
                options={skins.map((option) => {
                  return {
                    value: option.value,
                    label: option.name,
                  };
                })}
                onChange={(option) => setSkin(option.value)}
                placeholder={'Select a Character!'}
              />
            </div>
            <div className='w-4/12 h-full m-3'>
              <Dropdown
                options={maps.map((option) => {
                  return {
                    value: option._id,
                    label: `Map : ${option._id}`,
                  };
                })}
                onChange={(option) => setMapId(option.value)}
                placeholder={'Select a Map!'}
              />
              <div className='p-2 flex flex-row-reverse w-full justify-between align-items-center'>
                <button
                  className='btn  right-0 bg-red-800 font-bold border-black border-1 text-yellow-400 rounded-xl shadow-lg'
                  onClick={() => deleteMap()}>
                  delete
                </button>
                <p className='text-white text-md'>
                  Delete Current Map ( On View Port )
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <h1 className='flex-grow text-yellow-500 font-bold text-4xl text-center m-4'>
        PlayGame
      </h1>
      <div className='camera'>
        {mapObj && <RenderMap mapObj={mapObj} />}
        <Player skin={skin} />
      </div>
      <GameInstructions />
    </div>
  );
}
