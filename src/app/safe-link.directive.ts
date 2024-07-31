import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('Directive is working');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave this page');

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + "?from=myApp"
      return;
    }

    event.preventDefault();
  }
}
