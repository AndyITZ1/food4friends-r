package com.food4friends.food4friends_backend.recipe.dtos;

public record InstructionDTO(Long id, String instruction, String notes, Long recipeId) {
}
