import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// self defined components
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { TwainComponent } from './twain/twain.component';
import { WelcomeComponent } from './welcome/welcome.component';

// self defined services
import { UserService } from './model/user.service';
import { HeroService } from './model/hero.service';
import { TwainService } from './twain/twain.service';

// self defined modules
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

// in memory database service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        
        // self defined component
        BannerComponent,
        AboutComponent,
        TwainComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        SharedModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService,
            {
                dataEncapsulation: false
            }
        )
    ],
    providers: [
        // self defined services
        UserService,
        HeroService,
        TwainService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
