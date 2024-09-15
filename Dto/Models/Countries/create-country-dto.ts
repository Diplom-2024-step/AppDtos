/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createCountryDtoSchema = z.object({
    name: z.string().length(128),
    icon: z.string().length(2048)
});

export type CreateCountryDto = z.infer<typeof createCountryDtoSchema>;
