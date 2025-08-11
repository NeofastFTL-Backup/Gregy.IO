GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_reprocessor', 'simple')
        .tiers(GTValues.MV)
        .definition((tier, builder) => {
            builder
            .recipeType('primitive_reprocessor')
            .workableCasingModel( "minecraft:block/moss_block", "minecraft:block/oak_log")
        }
    );
});