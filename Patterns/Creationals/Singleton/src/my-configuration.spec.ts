import MyConfiguration from './my-configuration'

import { expect } from 'chai'
import 'mocha'

let config = MyConfiguration.getInstance()

describe('My Configuration Class - Tests', () => {

  it('object shold be not null', () => {
    expect(MyConfiguration.getInstance() !== null).to.equal(true)
  })

  it('objects should be equals', () => {
    let config1 = MyConfiguration.getInstance(),
        config2 = MyConfiguration.getInstance()

    expect(config1 === config2).to.equal(true)
  })

  it('environment property should be development', () => {
    expect(config.environment === 'development').to.equal(true)
  })
})