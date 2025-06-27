package com.food4friends.food4friends_backend.recipe;

import com.food4friends.food4friends_backend.recipe.dtos.InstructionDTO;

public class InstructionMapper {
    public InstructionDTO toDto(Instruction instruction) {
        return new InstructionDTO(
                instruction.getId(),
                instruction.getInstruction(),
                instruction.getNotes(),
                instruction.getRecipe().getId()
        );
    }
}
