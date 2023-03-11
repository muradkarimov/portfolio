import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageupComponent } from './pageup.component';

describe('PageupComponent', () => {
  let component: PageupComponent;
  let fixture: ComponentFixture<PageupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
