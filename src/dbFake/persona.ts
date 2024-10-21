type Persona = {
    documento: number;
    tipo_documento: string;
    nombres: string;
    apellidos: string;
    email_persona: string;
    direccion_persona: string;
    telefono_persona: string;
}

export const personas: Persona[] = [
    {
        documento: 1234567890,
        tipo_documento: 'CC',
        nombres: 'Juan',
        apellidos: 'Pérez',
        email_persona: '',
        direccion_persona: 'Calle 123',
        telefono_persona: '1234567890'
    },
    {
        documento: 9876543210,
        tipo_documento: 'CC',
        nombres: 'María',
        apellidos: 'Gómez',
        email_persona: '',
        direccion_persona: 'Carrera 456',
        telefono_persona: '9876543210'
    },
    {
        documento: 1357924680,
        tipo_documento: 'CC',
        nombres: 'Luis',
        apellidos: 'Hernández',
        email_persona: '',
        direccion_persona: 'Avenida 789',
        telefono_persona: '1357924680'
    },
    {
        documento: 2468013579,
        tipo_documento: 'CC',
        nombres: 'Ana',
        apellidos: 'Martínez',
        email_persona: 'ana.martinex@gmail.com',
        direccion_persona: 'Transversal 246',
        telefono_persona: '2468013579'
    },
    {
        documento: 9876543210,
        tipo_documento: 'CC',
        nombres: 'Carlos',
        apellidos: 'Gómez',
        email_persona: 'carlos.gomez@dominio.com',
        direccion_persona: 'Carrera 456',
        telefono_persona: '9876543210'
    }
]