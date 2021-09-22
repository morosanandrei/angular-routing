import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
})
export class ChildrenComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onClick(url: string) {
    this.router.navigate([url]);
  }

  onChild(url: string): void {
    this.router.navigate([{ outlets: { name: 'children', path: url } }]);
  }
}
