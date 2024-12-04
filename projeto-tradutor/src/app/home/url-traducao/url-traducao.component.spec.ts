import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTraducaoComponent } from './url-traducao.component';

describe('UrlTraducaoComponent', () => {
  let component: UrlTraducaoComponent;
  let fixture: ComponentFixture<UrlTraducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlTraducaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlTraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
