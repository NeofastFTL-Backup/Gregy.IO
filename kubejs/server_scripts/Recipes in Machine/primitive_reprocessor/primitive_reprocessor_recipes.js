ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  greg
    .primitive_reprocessor("dirt_seeds")
    .inputItems("mysticalagriculture:dirt_seeds")
    .inputFluids("water 1000")
    .chancedOutput('mysticalagriculture:dirt_essence', 6500, 500)
    .duration(200)
    .EUt(40)
    .circuit(1);
});
