import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private cache = new Map<string, BehaviorSubject<any>>();

  constructor() {}

  set<T>(key: string, value: T): void {
    if (this.cache.has(key)) {
      this.cache.get(key)?.next(value);
    } else {
      this.cache.set(key, new BehaviorSubject<T>(value));
    }
  }

  get<T>(key: string): Observable<T> | undefined {
    return this.cache.get(key)?.asObservable();
  }

  clear(key: string): void {
    if (this.cache.has(key)) {
      this.cache.get(key)?.complete();
      this.cache.delete(key);
    }
  }

  clearAll(): void {
    this.cache.forEach((subject) => subject.complete());
    this.cache.clear();
  }
}
