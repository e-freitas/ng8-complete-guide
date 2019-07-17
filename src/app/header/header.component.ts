import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() onSelectFeatureEvent = new EventEmitter<string>();

    public onSelectFeature(feature: string){
        this.onSelectFeatureEvent.emit(feature);
    }
}