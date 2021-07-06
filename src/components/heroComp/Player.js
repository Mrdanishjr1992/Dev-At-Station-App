import React from 'react';
import Actor from './Actor';
import useKeyPress from '../../hooks/useKeyPress';
import useWalk from '../../hooks/useWalk';

export default function Player({ skin }) {
  const { dir, step, walk, position } = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    e.preventDefault();
    let tile = document.elementFromPoint(position.x, position.y);
    console.log(tile.title);
    walk(e.key.replace('Arrow', '').toLowerCase());
  });

  return (
    <Actor
      sprite={`../images/characters/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
}
