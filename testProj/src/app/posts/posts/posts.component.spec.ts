import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {EMPTY, of} from "rxjs";

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach( () => {
    service = new PostsService(null)
    component = new PostsComponent(service)
  })


  it('should update posts length after Ng On Init', () => {
    const spy = spyOn(service, 'fetch').and.callFake( () => {
      return of([1,2,3])
    })

    expect(component.posts.length).toBe(3)
  })

  it('should add new post', () => {
    const spy = spyOn(service, 'create').and.returnValue(EMPTY)

    component.add('test')

    expect(spy).toHaveBeenCalled()
    expect(component.posts.length).toBe(1)
  })

})
