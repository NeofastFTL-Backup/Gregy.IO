ServerEvents.recipes(event => {
    event.shaped(Item.of('gtceu:freezer'), [
        "SIS",
        "ILI",
        "III"
    ], {
        I: "minecraft:iron_block",
        L: "#gtceu:circuits/lv",
        S: "minecraft:snow_block"
    }).id('neofastftl:shaped/freezer');
});