"use client"
import { useEffect, useState } from "react";

const TierList = () => { 
    const [items, setItems] = useState([]);
    const [newItemName, setNewItemName] = useState('');
    const [newItemTier, setNewItemTier] = useState(''); 

    useEffect(() => {
        axios.get('/api/tierlist').then(response => {
          setItems(response.data);
        });
      }, []);
    
      const addItem = () => {
        axios.post('/api/tierlist', { name: newItemName, tier: newItemTier }).then(response => {
          setItems([...items, response.data]);
          setNewItemName('');
          setNewItemTier('');
        });
};

return (
    <div>
      <h1>Tier List</h1>
      <div>
        {['S', 'A', 'B', 'C', 'D', 'F'].map(tier => (
          <div key={tier}>
            <h2>Tier {tier}</h2>
            <ul>
              {items.filter(item => item.tier === tier).map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Item name"
          value={newItemName}
          onChange={e => setNewItemName(e.target.value)}
        />
        <select value={newItemTier} onChange={e => setNewItemTier(e.target.value)}>
          <option value="">Select tier</option>
          <option value="S">S</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
};

export default TierList;
