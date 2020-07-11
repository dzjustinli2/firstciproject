import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Route[] = [
    {
        path: '',
        component: HeroListComponent
    },
    {
        path: ':id',
        component: HeroDetailComponent
    }
];

export const routedComponents = [HeroListComponent, HeroDetailComponent];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroRoutingModule { }
