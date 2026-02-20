import "./App.css";
import type { InventoryItem } from "./types/index";
// import { items } from './hooks/useInventory';
import { useState } from 'react';
import { InventoryCard } from "./components/InventoryCard";
import { ItemForm } from './components/AddItemForm';

function App() {
  // TODO 1: Inicializar estado o usar el custom hook useInventory
  const [items, setItems] = useState<InventoryItem[]>([
    {
    id: "1",
    name: "MacBook Pro",
    category: "Portátil",
    quantity: 5,
    isCritical: true,
  },
  { id: "2", name: 'Monitor Dell 27"', category: "Monitor", quantity: 0 },
  { id: "3", name: "Teclado Mecánico", category: "Periférico", quantity: 12 },
  ]);

  // TODO 2: Crear estado para la notificación temporal
  // const [TempNot, setNot] = useState<

  const handleDelete = (id:string) => {
    const listaActualizada = items.filter((item) => item.id !== id);

    setItems(listaActualizada);
  };

  const handleAdd = (newItemData: Omit<InventoryItem, 'id'>) => {
    const newItem: InventoryItem = {
      ...newItemData,
      id: crypto.randomUUID()
    };

  setItems([newItem, ...items])
  };

  return (
    <div className="app-container">
      <h1>📦 Tech Inventory</h1>

      {/* TODO: Mostrar notificación si existe */}
      <div className="notification">

      </div>

      <div className="layout">
        <aside>
          <h2>Añadir Nuevo Material</h2>
          {/* TODO: Renderizar AddItemForm */}
          <div className="form">
            <ItemForm onAdd={handleAdd} />
          </div>
        </aside>

        <main>
          <h2>Listado de Inventario</h2>
          <div className="grid">
            {/* TODO: Mapear los items y renderizar InventoryCard por cada uno */}
            {items.map((item) => (
              <div key={item.id} className = "card">
                <InventoryCard item={item} onDelete={handleDelete}/>
              </div>))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
