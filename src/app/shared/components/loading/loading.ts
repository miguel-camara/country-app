import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
  <div class="flex justify-center items-center w-full h-full">
    <span class="loading loading-ring loading-xl"></span>
  </div>
  `
})

export class LoadingComponent { }
