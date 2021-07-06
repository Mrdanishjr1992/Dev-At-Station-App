import React from 'react';

export default function TilePalette({
  tileset,
  position,
  size,
  activeTile,
  setActiveTile,
  setBgTile,
  mapOption,
}) {
  const { width, height } = size;
  const tiles = [];
  let id = 0;
  for (let y = 0; y < height; y = y + 32) {
    const row = [];
    for (let x = 0; x < width; x = x + 32) {
      if (
        (!(x <= 64 && y <= 32) &&
          !(x === 32 && y === 64) &&
          !(x === 128 && y === 0) &&
          !(x === 96 && y === 64) &&
          !(x === 352 && y === 224) &&
          !(x >= 480 && x <= 608 && y <= 256)) ||
        (x === 512 && y === 128) ||
        (x === 512 && y === 224)
      ) {
        row.push({
          x,
          y,
          id: id++,
          walkable: true,
        });
      } else {
        row.push({
          x,
          y,
          id: id++,
          walkable: false,
        });
      }
    }
    tiles.push(row);
  }

  function fillBg() {
    setBgTile(activeTile);
  }

  return (
    <div
      className='border-4 border-pink-900'
      style={{
        position: 'absolute',
        zIndex: 100,
        backgroundColor: 'grey',
        top: position.y,
        left: position.x,
      }}>
      <div
        className='bg-blue-800 flex w-full justify-between p-1 align-items-center'
        style={{ display: 'flex' }}>
        <div className='flex flex-col align-center h-full border-2 border-black rounded-lg bg-red-100 '>
          <div
            id='handlebar'
            style={{
              backgroundImage: `url(../images/misc/handlebar.jpg)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosiition: 'center',
              width: '32px',
              height: '32px',
              margin: '2px',
            }}
          />
        </div>
        <div className='flex flex-col align-center h-full border-2 border-black rounded-lg bg-red-100 '>
          <div
            id='palette'
            style={{
              background: `url(${tileset})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `-${activeTile.x}px -${activeTile.y}px`,
              width: '32px',
              height: '32px',
              margin: '1px',
            }}
          />
        </div>
        <div className='flex flex-col align-center h-full border-2 border-black rounded-lg bg-red-100 '>
          <button
            className='btn bg-gray-600 text-white text-bold'
            onClick={() => fillBg()}>
            Fill Bg
          </button>
        </div>
      </div>

      {tiles.map((row, y) => (
        <div key={y} style={{ display: 'flex' }}>
          {row.map((tile, x) => (
            <div
              onClick={() => (
                setActiveTile({ x: x * 32, y: y * 32 }),
                console.log({ x: x * 32, y: y * 32 }, tile.walkable)
              )}
              key={x}
              style={{
                backgroundColor: 'transparent',
                borderTop: '1px solid black',
                borderRight: '1px solid black',
                background: `url(${mapOption})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `-${x * 32}px -${y * 32}px`,
                width: '32px',
                height: '32px',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
