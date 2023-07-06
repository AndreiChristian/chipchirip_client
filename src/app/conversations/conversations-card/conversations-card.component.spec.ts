import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsCardComponent } from './conversations-card.component';

describe('ConversationsCardComponent', () => {
  let component: ConversationsCardComponent;
  let fixture: ComponentFixture<ConversationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
