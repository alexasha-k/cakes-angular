import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss']
})
export class IconSvgComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'gift',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-gift.svg')
    );
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-instagram.svg')
    );
    iconRegistry.addSvgIcon(
      'leaf',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-leaf.svg')
    );
    iconRegistry.addSvgIcon(
      'vk',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icon-vk.svg')
    );
  }

  ngOnInit() {
  }

}
