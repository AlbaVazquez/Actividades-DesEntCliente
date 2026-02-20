// import React from "react";
import type { InventoryItem } from '../types/index';


type Props = {
  item: InventoryItem;
  onDelete: (id: string) => void;};

// const InventoryCardCrit = (props: Props) => {
//     return <span className="badge critical">⚠️ Crítico</span>;
// };

export function InventoryCard({ item, onDelete}: Props) {

  return (
  <div className={'card'}>
  <h2 className="text-xl font-bold mb-2">Nombre: {item.name}</h2>
  <p className="mb-1">Tipo: {item.category}</p>
  <p className="mb-1">Cantidad: {item.quantity}</p>
  <p className="mb-1">Crítico: {item.isCritical}</p>

  <button onClick={() => onDelete(item.id!)} className="delete-btn">
    Borrar
  </button>

</div>);}


