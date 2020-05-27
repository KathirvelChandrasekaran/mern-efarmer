const mongoose = require('mongoose');
const plantSchema = mongoose.Schema({
    name: {
        type: String
    },
    also: {
        type: String
    },
    alternateName: {
        type: String
    },
    sowInstruction: {
        type: String
    },
    spaceInstruction: {
        type: String
    },
    harvestInstruction: {
        type: String
    },
    compatiblePlants: {
        type: String
    },
    avoidInstructions: {
        type: String
    },
    culinaryHints: {
        type: String
    },
    culinaryPreservation: {
        type: String
    },
    image: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('Plants', plantSchema);
