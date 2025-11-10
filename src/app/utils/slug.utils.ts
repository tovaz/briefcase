/**
 * Utilidades para manejo de slugs y encriptación de IDs
 */

/**
 * Crea un slug URL-friendly a partir de un título e ID
 * @param title - Título del post
 * @param id - ID numérico del post
 * @returns Slug en formato: titulo-slug-uuid
 */
export function createSlug(title: string, id: number): string {
  // Convertir título a slug (URL-friendly)
  const titleSlug = title
    .toLowerCase()
    .normalize('NFD') // Normalizar caracteres especiales
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/[^a-z0-9\s-]/g, '') // Eliminar caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-'); // Eliminar guiones múltiples

  // Generar UUID del ID
  const encryptedId = encryptId(id);

  // Combinar: titulo-slug-uuid
  return `${titleSlug}-${encryptedId}`;
}

/**
 * Encripta un ID numérico en formato UUID
 * @param id - ID numérico a encriptar
 * @returns String en formato UUID con el ID en los primeros 8 caracteres hex
 */
export function encryptId(id: number): string {
  // Convertir ID a hexadecimal y rellenar con ceros
  const hex = id.toString(16).padStart(8, '0');

  // Generar datos aleatorios para el resto del UUID
  const random1 = Math.random().toString(16).substring(2, 6);
  const random2 = Math.random().toString(16).substring(2, 6);
  const random3 = Math.random().toString(16).substring(2, 14);

  // Formato UUID: xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx
  // Donde los primeros 8 caracteres contienen el ID
  return `${hex}-${random1}-${random2}-${random3}`;
}

/**
 * Desencripta un ID desde un formato UUID
 * @param encryptedId - String UUID que contiene el ID encriptado
 * @returns ID numérico original
 */
export function decryptId(encryptedId: string): number {
  try {
    // Extraer los primeros 8 caracteres (antes del primer guión)
    const hexId = encryptedId.split('-')[0];
    return parseInt(hexId, 16);
  } catch (error) {
    console.error('Error decrypting ID:', error);
    return 0;
  }
}

/**
 * Extrae el ID numérico de un slug completo
 * @param slug - Slug completo en formato: titulo-00000005-a3f2-b8c4-9d1e4f6a2b3c
 * @returns ID numérico extraído del UUID
 */
export function extractIdFromSlug(slug: string): number {
  try {
    // El slug tiene formato: titulo-de-post-00000005-a3f2-b8c4-9d1e4f6a2b3c
    // Necesitamos extraer la parte UUID y tomar los primeros 8 caracteres hex

    // Encontrar el patrón UUID (8 hex + guiones)
    // Buscar el último conjunto de 8 caracteres hexadecimales seguidos de guiones
    const uuidPattern = /([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]+)/;
    const match = slug.match(uuidPattern);

    if (match && match[1]) {
      return parseInt(match[1], 16);
    }

    // Fallback: intentar extraer desde el final
    const parts = slug.split('-');
    if (parts.length >= 4) {
      // Buscar la parte que parece un hex de 8 caracteres
      for (let i = parts.length - 1; i >= 0; i--) {
        if (parts[i].length === 8 && /^[0-9a-f]{8}$/.test(parts[i])) {
          return parseInt(parts[i], 16);
        }
      }
    }

    return 0;
  } catch (error) {
    console.error('Error extracting ID from slug:', error);
    return 0;
  }
}
