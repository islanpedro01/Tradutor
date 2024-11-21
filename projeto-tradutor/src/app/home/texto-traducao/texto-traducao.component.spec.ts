import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoTraducaoComponent } from './texto-traducao.component';

describe('TextoTraducaoComponent', () => {
  let component: TextoTraducaoComponent;
  let fixture: ComponentFixture<TextoTraducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoTraducaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoTraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
