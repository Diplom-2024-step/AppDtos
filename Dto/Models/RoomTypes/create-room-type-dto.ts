/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createRoomTypeDtoSchema = z.object({
    name: z.string().length(64)
});

export type CreateRoomTypeDto = z.infer<typeof createRoomTypeDtoSchema>;
