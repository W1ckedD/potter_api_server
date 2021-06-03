const db = require('./db');

// Models
const BirthPlace = require('../models/birthPlace');
const BloodType = require('../models/bloodType');
const Character = require('../models/character');
const Gender = require('../models/gender');
const House = require('../models/house');
const Loyalty = require('../models/loyalty');
const MaritialStatus = require('../models/maritialStatus');
const Nationality = require('../models/nationality');
const Quote = require('../models/quote');
const Species = require('../models/species');
const Spell = require('../models/birthPlace');
const SpellType = require('../models/birthPlace');
const Wand = require('../models/wand');


module.exports = async () => {
  try {
    House.hasMany(Character);
    Character.belongsTo(House);

    BloodType.hasMany(Character);
    Character.belongsTo(BloodType);

    Species.hasMany(Character);
    Character.belongsTo(Species);

    Gender.hasMany(Character);
    Character.belongsTo(Gender);

    Loyalty.belongsToMany(Character, { through: 'CharacterLoyalty' });
    Character.belongsToMany(Loyalty, { through: 'CharacterLoyalty' });

    MaritialStatus.hasMany(Character);
    Character.belongsTo(MaritialStatus);

    Nationality.hasMany(Character);
    Character.belongsTo(Nationality);

    BirthPlace.hasMany(Character);
    Character.belongsTo(BirthPlace);

    Wand.belongsToMany(Character, { through: 'CharacterWand' });
    Character.belongsToMany(Wand, { through: 'CharacterWand' });

    Character.hasMany(Quote);
    Quote.belongsTo(Character);

    SpellType.hasMany(Spell);
    Spell.belongsTo(SpellType);

    const conn = await db.sync({ force:false });
    console.log(`Connected to PG: ${conn.getDatabaseName()}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}