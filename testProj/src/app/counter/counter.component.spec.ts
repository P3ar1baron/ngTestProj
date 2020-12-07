import {CounterComponent} from './counter.component'

describe('CounterComponent', () => {

  it('should increment counter by 1', () => {
    const component = new CounterComponent()
    component.increment()
    expect(component.counter).toBe(1)
  })

  it('should decrement counter by 1', () => {
    const component = new CounterComponent()
    component.decrement()
    expect(component.counter).toBe(-1)
  })

})
