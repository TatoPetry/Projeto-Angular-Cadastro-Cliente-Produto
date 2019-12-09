import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-window',
  templateUrl: './cliente-window.component.html',
  styleUrls: ['./cliente-window.component.scss']
})
export class ClienteWindowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(console.log);
  }

}
