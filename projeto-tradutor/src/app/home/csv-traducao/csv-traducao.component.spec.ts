import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvTraducaoComponent } from './csv-traducao.component';

describe('CsvTraducaoComponent', () => {
  let component: CsvTraducaoComponent;
  let fixture: ComponentFixture<CsvTraducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvTraducaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvTraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
