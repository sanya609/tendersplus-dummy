import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./component/tender-upgrade/tender-upgrade.component')
            .then(m => m.TenderUpgradeComponent)
    },
    {
        path: 'active-tender',
        loadComponent: () => import('./component/angular-active-tender-page/active-tender.component')
            .then(m => m.ActiveTenderComponent)
    },
    {
        path: 'result-detail',
        loadComponent: () => import('./component/result-detail-page/result-detail-page.component')
            .then(m => m.ResultDetailPageComponent)
    },
    {
        path: 'result',
        loadComponent: () => import('./component/result-detail-page/result-detail-page.component')
            .then(m => m.ResultDetailPageComponent)
    },
];
