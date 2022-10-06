import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit(): void {
  }

  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
  public statefields: Object = {text:'StateName',value:'StateId'};
  public stateData: Object[]=[
    {
      StateName:'name',stateId:'12'
    },
    {
      StateName:'name',stateId:'12'
    },
  ];

}
