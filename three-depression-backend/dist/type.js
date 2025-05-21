"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepressionLevel = exports.Relationship = void 0;
var Relationship;
(function (Relationship) {
    Relationship["Parent"] = "parent";
    Relationship["Sibling"] = "sibling";
    Relationship["Relative"] = "relative";
    Relationship["GoodFriend"] = "good_friend";
    Relationship["NormalFriend"] = "normal_friend";
    Relationship["Known"] = "known";
    Relationship["Stranger"] = "stranger";
})(Relationship || (exports.Relationship = Relationship = {}));
var DepressionLevel;
(function (DepressionLevel) {
    DepressionLevel["Mild"] = "mild";
    DepressionLevel["Moderate"] = "moderate";
    DepressionLevel["Severe"] = "severe";
    DepressionLevel["Unknown"] = "unknown";
})(DepressionLevel || (exports.DepressionLevel = DepressionLevel = {}));
