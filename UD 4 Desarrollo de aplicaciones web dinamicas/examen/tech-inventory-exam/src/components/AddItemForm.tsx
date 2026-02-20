import { useState } from 'react';
import type { InventoryItem } from '../types/index';

interface Props {
    onAdd: (item: Omit<InventoryItem, 'id'>) => void;
}

export function ItemForm({ onAdd }: Props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState<number | ''>('');
    const [isCritical, setIsCritic] = useState<boolean | 'False'>('False');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !category || !quantity) return;

        onAdd({
            name, category, quantity: Number(quantity)
        });

        setName('');
        setCategory('');
        setQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-md-6">
                    <label className='form-label'>Nombre:</label>
                    <input type="text" className="form-control" value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>

                <div className="col-md-6">
                    <label className='form-label'>Tipo:</label>
                    <input type="text" className="form-control" value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required />
                </div>

                <div className="col-md-6">
                    <label className='form-label'>Cantidad:</label>
                    <input type="text" className="form-control" value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required />
                </div>

                <div className="col-md-6">
                    <label className='form-label'>Crítico:</label>
                    <input type="checkbox" className="form-control" value={isCritical.valueOf}
                        onChange={(e) => setIsCritic(Boolean(e.target.value))}
                        required />
                </div>

                <div className="col-12 text-end mt-3">
                    <button type="submit" className="btn btn-success">
                        Guardar Item
                    </button>
                </div>

            </div>
        </form>
    );
}

