import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SNetworkComponent } from './s-network.component';

describe('SNetworkComponent', () => {
  let component: SNetworkComponent;
  let fixture: ComponentFixture<SNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
