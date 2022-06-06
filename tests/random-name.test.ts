import { randomName } from "../lib/cjs/random-name.js"

test('randomName function', () => {
  expect(['Dwight Schrute', 'Michael Scott', 'Pam Beesly', 'Jim Halpert', 'Jane']).toContain(randomName())
})