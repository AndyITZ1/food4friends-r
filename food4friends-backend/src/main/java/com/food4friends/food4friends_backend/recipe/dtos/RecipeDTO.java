package com.food4friends.food4friends_backend.recipe.dtos;

import java.util.List;

public record RecipeDTO(Long id, String title, String imageUrl, Integer prepTime, Integer cookTime, Integer servings, String notes, List<InstructionDTO> instructions) {
}
