import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  myResult: string = ""


  isClicked = false;

  onMenuClicked=()=>{
    if(this.isClicked == false){
      this.isClicked = true;
    } else if(this.isClicked == true) {
      this.isClicked = false;
    }
  }

  @HostListener('document:scroll', ['$event'])

  public onViewportScroll() {
    if (window.scrollY > 50 || this.isClicked) {
      this.myResult = "bg-dark navbar-sticky"
  } else {
    this.myResult = ""
  }
    return this.myResult
  }
}
