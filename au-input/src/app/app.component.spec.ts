import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { InputRefDirective } from './lib/common/InputRefDirective';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

    let component = AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let el: DebugElement;
    let emailField: DebugElement;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AuFaInputComponent,
                InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));

        fixture.detectChanges();
        
    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should create a font awesome email input',  async(() => {
        expect(emailField).toBeTruthy();
    }));

    it('should create correct icons -> i.icon.fa.fa-envelope classes',  async(() => {
        expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should projected correct input inside au-fa-input component',  async(() => {
        expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
    }));


});
