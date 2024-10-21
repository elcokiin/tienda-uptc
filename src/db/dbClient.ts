import { personas } from '../dbFake/persona.js'

type Cliente = {
    documento: number;
    tipo_documento: string;
    nombres: string;
    apellidos: string;
    email_persona: string;
    direccion_persona: string;
    telefono_persona: string;
}

export function getClients(): Cliente[] {
    return personas;
}

export function getClient(documento: number): Cliente | undefined {
    return personas.find(persona => persona.documento === documento);
}