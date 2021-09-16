import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent{
    constructor(private router: Router) {}

    onClick(url: string): void {
        this.router.navigate([url]);
    }
}