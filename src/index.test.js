import {expect} from 'chai'
import warcraftNames from '.'

describe('warcraft-names', () => {
  it('should have a list of all available names', () => {
    expect(warcraftNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(warcraftNames.random()).to.satisfy(isIncludedIn(warcraftNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
