ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  greg
    .freezer("blue_ice")
    .notConsumable("minecraft:snowball")
    .inputFluids("water 1000")
    .itemOutputs(
      "16x minecraft:blue_ice"
    )
    .duration(20)
    .EUt(5)
    .circuit(1);
});
