import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss']
})
export class IconSvgComponent implements OnInit {

  @Input() iconName: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'gift',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-gift.svg')
    );
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-insta.svg')
    );
    iconRegistry.addSvgIcon(
      'leaf',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-leaf.svg')
    );
    iconRegistry.addSvgIcon(
      'vk',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-vk.svg')
    );
    iconRegistry.addSvgIcon(
      'icon-arrow-left',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-arrow-left.svg')
    );
    iconRegistry.addSvgIcon(
      'icon-arrow-right',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-arrow-right.svg')
    );
    iconRegistry.addSvgIcon(
      'icon-check-mark',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-check-mark.svg')
    );
  }

  ngOnInit() {
  }

}
