import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBannerComponent } from './sidebar-banner.component';

describe('SidebarBannerComponent', () => {
  let component: SidebarBannerComponent;
  let fixture: ComponentFixture<SidebarBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
