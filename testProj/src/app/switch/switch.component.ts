import {Component, forwardRef, OnInit, Provider} from '@angular/core'
import {NG_VALUE_ACCESSOR} from '@angular/forms'


const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef((() => SwitchComponent)),
  multi: true
}
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  state = 'off'

  constructor() { }

  ngOnInit(): void {
  }

  setState(state: string) {
    this.state = state
  }

}
