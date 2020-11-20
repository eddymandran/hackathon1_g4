import React, { useState, useEffect } from 'react';
import castles from '../data/castles.json';
import '../style/Filter.css';

const Filter = () => {
  const [castle, setCastle] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className='filter'>
      <h3>Richness of the castle</h3>
      <p>
        <select className='selectRichness'>
          <option value='level1'>💰</option>
          <option value='level2'>💰💰</option>
          <option value='level3'>💰💰💰</option>
          <option value='level4'>💰💰💰💰</option>
          <option value='level5'>💰💰💰💰💰</option>
        </select>
      </p>
    </div>
  );
};
export default Filter;
