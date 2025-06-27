package com.food4friends.food4friends_backend.recipe;

import com.food4friends.food4friends_backend.recipe.dtos.InstructionDTO;
import com.food4friends.food4friends_backend.recipe.dtos.RecipeDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class RecipeMapper {

    private final InstructionMapper instructionMapper;

    public RecipeMapper(InstructionMapper instructionMapper) {
        this.instructionMapper = instructionMapper;
    }

    public RecipeDTO toDto(Recipe recipe) {
        List<InstructionDTO> instructionDTOS = new ArrayList<>();
        for (Instruction i: recipe.getInstructions()) {
            instructionDTOS.add(instructionMapper.toDto(i));
        }

        return new RecipeDTO(
                recipe.getId(),
                recipe.getTitle(),
                recipe.getImageUrl(),
                recipe.getPrepTime(),
                recipe.getCookTime(),
                recipe.getServings(),
                recipe.getNotes(),
                instructionDTOS
        );
    }
}
