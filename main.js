/**
 * We have any kind of ducks
 * Each kind have some own properties and methods
 * These properties and methods can be the same in some kind of ducks
 */

const walk = ({ name }) => ({
    walk: () => console.log(`${name} can walk!`)
})

const eat = ({ name }) => ({
    eat: () => console.log(`${name} can eat!`)
})

const fly  = ({ name }) => ({
    fly: () => console.log(`${name} can fly!`)
})

const quack = ({ name }) => ({
    quack: () => console.log(`${name} can quack!`)
})

/**
 * Rubber ducks can quack
 */
const rubberDuck = (name) => ({
    name,
    ...quack({ name })
});


/**
 * Real ducks can walk, eat, quack and fly
 */
const realDuck = (name, gender) => ({
    name,
    gender,
    ...walk({ name }),
    ...eat({ name }),
    ...fly({ name }),
    ...quack({ name })
})
const daffy = realDuck('Daffy', 'Male');
daffy.walk();
