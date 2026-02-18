import type { JobApplication } from '../types';

interface Props {
    job: JobApplication;
    onDelete: (id: string) => void; // Una función para borrar
}

export function JobCard({ job, onDelete }: Props) {

    // Una función simple para dar color según el estado
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Oferta': return 'green';
            case 'Rechazado': return 'red';
            case 'Entrevista': return 'orange';
            default: return 'gray';
        }
    };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-header d-flex justify-content-between align-items-center bg-light">
                <h5 className="m-0">{job.company}</h5>

                <span className="badge rounded-pill" style={{ backgroundColor: getStatusColor(job.status), color: 'white' }}>
                    {job.status}
                </span>
            </div>

            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-primary">{job.position}</h6>
                <p className="card-text">
                    <strong>Salario:</strong> {job.salary}€
                </p>

                <button onClick={() => onDelete(job.id!)} className="btn btn-danger w-100 mt-2">
                    🗑️ Borrar
                </button>
            </div>
        </div>
    );
}