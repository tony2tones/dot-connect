import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotBlockComponent } from './dot-block.component';

describe('DotBlockComponent', () => {
  let component: DotBlockComponent;
  let fixture: ComponentFixture<DotBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotBlockComponent]
    });
    fixture = TestBed.createComponent(DotBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
