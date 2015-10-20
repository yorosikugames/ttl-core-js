var Actor = require("./Actor.ts");
var WorldSpawn = require("./WorldSpawn.ts");
var Spawner = (function () {
    function Spawner() {
        this.setWorld = Actor.prototype.setWorld;
        this.getIx = Actor.prototype.getIx;
        this.getIy = Actor.prototype.getIy;
        this.setIx = Actor.prototype.setIx;
        this.setIy = Actor.prototype.setIy;
        this.getSpawnId = Actor.prototype.getSpawnId;
        this.world = undefined;
        this.team = undefined;
        this.hp = 100;
        this.age = 0;
        this.ix = undefined;
        this.iy = undefined;
    }
    Spawner.prototype.setPrefab = function () {
    };
    Spawner.prototype.getEmptyCell = function () {
        if (this.world.getCell(this.ix + 1, this.iy + 0).isEmpty()) {
            return {
                ix: this.ix + 1,
                iy: this.iy + 0,
            };
        }
        else if (this.world.getCell(this.ix + 0, this.iy + 1).isEmpty()) {
            return {
                ix: this.ix + 0,
                iy: this.iy + 1,
            };
        }
        else if (this.world.getCell(this.ix - 1, this.iy + 0).isEmpty()) {
            return {
                ix: this.ix - 1,
                iy: this.iy + 0,
            };
        }
        else if (this.world.getCell(this.ix + 0, this.iy - 1).isEmpty()) {
            return {
                ix: this.ix + 0,
                iy: this.iy - 1,
            };
        }
        return null;
    };
    Spawner.prototype.nextStep = function (actor) {
        var emptyCell = this.getEmptyCell();
        if (emptyCell) {
            var sa = new WorldSpawn(new Actor(), emptyCell.ix, emptyCell.iy);
            this.world.appendIntent(sa);
        }
    };
    Spawner.prototype.execute = function (world) {
    };
    Spawner.prototype.canSpawn = function () {
        return this.getEmptyCell() !== null;
    };
    return Spawner;
})();
module.exports = Spawner;
//# sourceMappingURL=Spawner.js.map