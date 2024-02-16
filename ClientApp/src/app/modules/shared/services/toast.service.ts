import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  MSToShowToast: number = 1800;
  MSToWaitBetweenFades: number = 250;
  toasts: any[] = [];
  show(text: string, options: any = {}) {
    const toast = { text, ...options, animationState: 'fade-in' };
    this.toasts.push(toast);
  
    setTimeout(() => toast.animationState = 'showing', this.MSToWaitBetweenFades); 
  
    setTimeout(() => {
      toast.animationState = 'fade-out'; 
      setTimeout(() => this.remove(toast), this.MSToWaitBetweenFades);
    }, this.MSToShowToast);
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
