/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createCityDtoSchema = z.object({
    countryId: z.string().uuid(),
    name: z.string().length(128),
    latitud: z.number(),
    longitud: z.number()
});

export type CreateCityDto = z.infer<typeof createCityDtoSchema>;
