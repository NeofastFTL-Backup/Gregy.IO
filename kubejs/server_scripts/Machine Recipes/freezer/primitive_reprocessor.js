ServerEvents.recipes(event => {
    event.shaped(Item.of('gtceu:primitive_reprocessor'), [
        "IHI",
        "ILI",
        "SSS"
    ], {
        I: "minecraft:iron_block",
        L: "#gtceu:circuits/mv",
        H: "minecraft:netherite_hoe",
        S: "minecraft:dirt"
    }).id('neofastftl:shaped/primitive_reprocessor');
});