import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgamebarComponent } from './newgamebar.component';

describe('NewgamebarComponent', () => {
  let component: NewgamebarComponent;
  let fixture: ComponentFixture<NewgamebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgamebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgamebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
