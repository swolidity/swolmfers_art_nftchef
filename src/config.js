"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

/*********************
 * General Generator Options
 ***********************/

const description = "get swol mfer";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's

/**
 * Set your tokenID index start number.
 * ⚠️ Be sure it matches your smart contract!
 */
const startIndex = 0;

const format = {
  width: 600,
  height: 600,
  smoothing: true, // set to false when up-scaling pixel art.
};

const background = {
  generate: true,
  brightness: "80%",
};

const layerConfigurations = [
  {
    growEditionSizeTo: 2500,
    namePrefix: "swol mfers",
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "Veins" },
      { name: "P.E.D-Lyte" },
      { name: "Ear" },
      { name: "Brains" },
      { name: "Mouth" },
      { name: "Smoke" },
      { name: "Brows" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Nipple" },
      { name: "Hat" },
      { name: "Eyes" },
      { name: "Wraps" },
      { name: "Slingshot" },
      { name: "Chain" },
      { name: "Drink" },
    ],
  },
  {
    growEditionSizeTo: 5000,
    namePrefix: "swol mfers",
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "Veins" },
      { name: "P.E.D-Lyte" },
      { name: "Brains" },
      { name: "Mouth" },
      { name: "Smoke" },
      { name: "Brows" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Headphones" },
      { name: "Nipple" },
      { name: "Hat" },
      { name: "Eyes" },
      { name: "Wraps" },
      { name: "Slingshot" },
      { name: "Chain" },
      { name: "Drink" },
    ],
  },
  {
    growEditionSizeTo: 6969,
    namePrefix: "swol mfers",
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "P.E.D-Lyte" },
      { name: "Ear" },
      { name: "Brains" },
      { name: "Mouth" },
      { name: "Smoke" },
      { name: "Brows" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Hat" },
      { name: "Eyes" },
      { name: "Paump Cover" },
      { name: "Chain" },
      { name: "Drink" },
    ],
  },
];

/**
 * Set to true for when using multiple layersOrder configuration
 * and you would like to shuffle all the artwork together
 */
const shuffleLayerConfigurations = true;

const debugLogs = true;

/*********************
 * Advanced Generator Options
 ***********************/

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "None";

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  //   Red: ["Dark Long"],
  //   // directory incompatible with directory example
  //   White: ["rare-Pink-Pompadour"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
  Mark_Bell_Moon: ["Alien_Swol", "Alien_Eyes"],
  Alien_Swol: ["Alien_Eyes"],
  Zombie_Swol: ["Red_Eyes", "Zombie_Mouth"],
};

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  // {
  // trait_type: "Bottom lid",
  //   value: ` Bottom lid # ${Math.random() * 100}`,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

// Outputs an Keccack256 hash for the image. Required for provenance hash
const hashImages = true;

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_type
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 10,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  hashImages,
  incompatible,
  layerConfigurations,
  layersDir,
  outputJPEG,
  preview,
  preview_gif,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
