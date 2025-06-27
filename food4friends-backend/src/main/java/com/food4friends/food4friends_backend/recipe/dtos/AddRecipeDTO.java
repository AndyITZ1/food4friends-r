package com.food4friends.food4friends_backend.recipe.dtos;

import java.util.List;

public record AddRecipeDTO(String title, String imageUrl, Integer prepTime, Integer cookTime, Integer servings, String notes, List<AddInstructionDTO> instructions) {
}
