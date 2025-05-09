Features added:

1) Jumping mechanic added. 
    As per requirements, the Skier can now jump with the space key. Pressing this elevates the skier's height to 2 units throughout the jump animation.
    After the jump animation completes (or if ended prematurely) the skier's height returns to 0 units. The reason why height units was decided on
    was because this could be extended further (potentially power-ups such as jetpacks or other events which could modify such properties). Objects
    have a fundamental height property (tree has heigh 2, rocks have height 1, etc). The skier clears the object if the height exceeds the object's
    property.
2) Jump ramp object added
    As per requirements, a jumping ramp object was added to the game. This jumping ramp triggers the jump animation if passed over. This jump ramp 
    can be jumped over in order to avoid it.
3) Jumping sound added.
    Alongside the jump, a cartoon-like jumping sound has been added. 
4) Background music added.
    A fitting background theme which lasts approximately 4 minutes has been added, which loops. 
5) Toggle music button added.
    A button (M) to toggle the background-theme has been added
6) Speed-boost object added
    A speed-boosting object has been added which elevates the skier's speed beyond the starting speed. Crashing reverts to the starting speed.
7) Muddy terrain object added
    A speed-slowing muddy terrain object has been added which slows the skier. This can be cleared by interacting with a speed-boost
8) Restart mechanic added
    A restart button has been added. This resets the score.
9) Time-based accumulator score added, along with a menu of instructions
    A time based score accumulator has been added to keep track of the score. Upon death, the score stops accumulating. 
    This involves a canvas wrapper object overlay.
10) Added some unit tests for testing of some functionality
    Some unit tests were added in order to test some new functionality and test for key base functionality. 

Further intentions would be to modify the score accumulator in order to make it 'fancier'. For example, certain objects could increase
the score accumulator, which could be reverted upon crashing. Alternatively, a speed based score accumulator could be used also.
