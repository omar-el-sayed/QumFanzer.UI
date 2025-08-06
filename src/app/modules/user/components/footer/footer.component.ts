import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  onStartLearning(): void {
    // Handle start learning action
    console.log('Start learning clicked');
    // Add your navigation or modal logic here
  }

  onWatchDemo(): void {
    // Handle watch demo action
    console.log('Watch demo clicked');
    // Add your video modal or navigation logic here
  }
}
