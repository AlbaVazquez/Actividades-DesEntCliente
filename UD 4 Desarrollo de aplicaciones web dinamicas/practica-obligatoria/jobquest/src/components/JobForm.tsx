// src/components/JobForm.tsx
import { useState } from 'react';
import type { JobApplication, ApplicationStatus } from '../types';

interface Props {
    // Esta función se la pasaremos desde el padre (App)
    // Recibe los datos del nuevo trabajo para guardarlos
    onAdd: (job: Omit<JobApplication, 'id' | 'createdAt'>) => void;
}

export function JobForm({ onAdd }: Props) {
    // --- ESTADOS DEL FORMULARIO ---
    // Guardamos cada input en una variable
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState<number | ''>(''); // Puede estar vacío al inicio
    const [status, setStatus] = useState<ApplicationStatus>('Enviado');

    // --- FUNCIÓN AL ENVIAR ---
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // IMPORTANTE: Evita que la página se recargue (típico de examen)

        // Validamos que haya datos básicos
        if (!company || !position || !salary) return;

        // Llamamos a la función del padre con los datos nuevos
        onAdd({
            company,
            position,
            salary: Number(salary), // Aseguramos que sea número
            status
        });

        // Limpiamos el formulario después de enviar
        setCompany('');
        setPosition('');
        setSalary('');
        setStatus('Enviado');
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header bg-primary text-white">
                <h5 className="m-0">➕ Añadir Nueva Candidatura</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">

                        {/* Campo: Empresa */}
                        <div className="col-md-6">
                            <label className="form-label">Empresa</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ej: Google"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo: Puesto */}
                        <div className="col-md-6">
                            <label className="form-label">Puesto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ej: Frontend Dev"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo: Salario */}
                        <div className="col-md-6">
                            <label className="form-label">Salario Anual (€)</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Ej: 25000"
                                value={salary}
                                onChange={(e) => setSalary(Number(e.target.value))}
                                required
                            />
                        </div>

                        {/* Campo: Estado (Select) */}
                        <div className="col-md-6">
                            <label className="form-label">Estado</label>
                            <select
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
                            >
                                <option value="Enviado">Enviado 📩</option>
                                <option value="Entrevista">Entrevista 🤝</option>
                                <option value="Oferta">Oferta 🎉</option>
                                <option value="Rechazado">Rechazado ❌</option>
                            </select>
                        </div>

                        {/* Botón Guardar */}
                        <div className="col-12 text-end mt-3">
                            <button type="submit" className="btn btn-success">
                                Guardar Candidatura
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}