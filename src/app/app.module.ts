import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FixturesLayoutComponent } from './fixtures-layout/fixtures-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MatchLayoutComponent } from './match-layout/match-layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ScorecardComponent } from './cards/scorecard/scorecard.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material';
import { HeadtoheadComponent } from './cards/headtohead/headtohead.component';
import { FactsCardComponent } from './cards/facts-card/facts-card.component';

const appRoutes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuardService],
    // resolve: { any: CommonDataResolverService },
    component: FixturesLayoutComponent,
    // children: [
    // ]
  },
  { path: 'fixture', pathMatch: 'full', component: MatchLayoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FixturesLayoutComponent,
    MatchLayoutComponent,
    ScorecardComponent,
    HeadtoheadComponent,
    FactsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
