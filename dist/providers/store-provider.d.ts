import 'rxjs/Rx';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocalStorageService } from 'angular-2-local-storage';
import { BaseService } from './base-provider';
import { StoreModel } from '../models/storeModel';
import { ProductModel } from '../models/productModel';
import { ScheduleModel } from '../models/scheduleModel';
import { PaymentsModel } from '../models/paymentsModel';
import { DelivStoreModel } from '../models/delivStoreModel';
import { BannerModel } from '../models/bannerModel';
import { DelivZoneModel } from '../models/delivZoneModel';
export declare class StoreService extends BaseService {
    http: Http;
    localStorage: LocalStorageService;
    products: ProductModel[];
    schedules: ScheduleModel[];
    payments: PaymentsModel[];
    stores: StoreModel[];
    delivStore: DelivStoreModel[];
    delivZone: DelivZoneModel[];
    banners: BannerModel[];
    constructor(http: Http, localStorage: LocalStorageService);
    getStore(chainId: any, storeId: any): BehaviorSubject<any>;
    getBanners(chainId: any, storeId: any): BehaviorSubject<any>;
    getBestsellersProductsStore(chainId: any, storeId: any): BehaviorSubject<any>;
    getBestsellersProductsUser(applicationId: any, userId: any, storeId: any): BehaviorSubject<any>;
    getSchedule(chainId: any, storeId: any): BehaviorSubject<any>;
    getPayments(chainId: any, storeId: any): BehaviorSubject<any>;
    getDelivStores(chainId: any, storeId: any): BehaviorSubject<any>;
    getStores(chainId: any): BehaviorSubject<any>;
    getDelivZones(chainId: any, storeId: any): BehaviorSubject<any>;
}
