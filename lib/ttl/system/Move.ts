﻿import interfaces = require('../interfaces');


class MoveSystem extends interfaces.System {

    constructor() {
        super('move');
    }

    process(entityMap: Map<string, interfaces.Entity>): void {

        for (var entityName in entityMap.keys()) {
            var entity = entityMap.get(entityName);
            for (var componentName in entity.components.keys()) {
                var component = entity.components.get(componentName);
                if (component.name != "component_position") continue;
            }
        }

    }
}

export = MoveSystem;