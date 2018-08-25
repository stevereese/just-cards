import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { ChipComponent } from './chip/chip';
import { LetItRideChipAreaComponent } from './let-it-ride-chip-area/let-it-ride-chip-area';
@NgModule({
	declarations: [CardComponent,
    ChipComponent,
    LetItRideChipAreaComponent],
	imports: [],
	exports: [CardComponent,
    ChipComponent,
    LetItRideChipAreaComponent]
})
export class ComponentsModule {}
