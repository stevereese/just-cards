import { NgModule } from '@angular/core';
import { RankToFacePipe } from './rank-to-face/rank-to-face';
import { SuitToIconPipe } from './suit-to-icon/suit-to-icon';
@NgModule({
	declarations: [RankToFacePipe,
    SuitToIconPipe],
	imports: [],
	exports: [RankToFacePipe,
    SuitToIconPipe]
})
export class PipesModule {}
