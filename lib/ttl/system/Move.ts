﻿import interfaces = require('../interfaces');
import globals = require('../globals');
import PositionComponent = require('../component/Position');
import MoveAction = require('../action/Move');


class MoveSystem extends interfaces.System {

    constructor() {
        super('move');
    }

    process(entityMap: Map<string, interfaces.Entity>): void {

        for (var entityName in entityMap.keys()) {
            var entity = entityMap.get(entityName);

            for (var idx in entity.actionQueue) {
                var action = entity.actionQueue[idx];
                if (action.name != 'move_action') continue;
                if (action.execute()) {
                    globals.globalDeltaLogger.enqueue(
                        globals.globalDeltaFactory.createMoveDelta(entity, <MoveAction>action));
                }
            }
        }

    }
}

export = MoveSystem;