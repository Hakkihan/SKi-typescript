/**
 * Interface for an Object to provide object properties
 */

import { IMAGE_NAMES } from "../Constants";

export interface iObstacleProperties {
    name: IMAGE_NAMES;
    height: number;
    speedMultiplier: number;
}
