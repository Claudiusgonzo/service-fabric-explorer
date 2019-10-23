import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EssentialsComponent } from './essentials/essentials.component';
import { DetailsComponent } from './details/details.component';
import { BaseComponent } from './base/base.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ClustermapComponent } from './clustermap/clustermap.component';
import { ImagestoreComponent } from './imagestore/imagestore.component';
import { ManifestComponent } from './manifest/manifest.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [{
  path: '', component: BaseComponent, children: [
    { path: '', component: EssentialsComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'metrics', component: MetricsComponent },
    { path: 'clustermap', component: ClustermapComponent },
    { path: 'imagestore', component: ImagestoreComponent },
    { path: 'manifest', component: ManifestComponent },
    { path: 'events', component: EventsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule { }