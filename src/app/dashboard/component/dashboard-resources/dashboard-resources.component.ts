import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-resources',
  template: `
    <mat-nav-list>

      <a
        mat-list-item
        [routerLink]="link.url"
        *ngFor="let link of resources"
        (click)="onClose()">
        <mat-icon matListIcon>{{ link.icon }}</mat-icon>
        <h3 matLine>{{ link.title }}</h3>
      </a>

      <ng-content></ng-content>

    </mat-nav-list>
  `
})
export class DashboardResourcesComponent implements OnInit {

  @Input() isMenu = false;
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<void>();

  resources: any[] = [
    {
      url: '/dashboard/cliente',
      icon: 'person',
      title: 'Clientes',
    },
    {
      url: '/dashboard/produto',
      icon: 'emoji_objects',
      title: 'Produtos',
    }
  ];

  ngOnInit(): void {
    if (this.isMenu) {
      this.resources.unshift({
        url: '/dashboard',
        icon: 'home',
        title: 'Menu',
      });
    }
  }

  onClose(): void {
    this.close.emit();
  }

}
