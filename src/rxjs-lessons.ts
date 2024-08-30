import { debounceTime, distinctUntilChanged, fromEvent, map, Observable } from "rxjs";

// const search$ = new Observable<Event>(observer =>{
//    const search = document.getElementById('poisk')
//    if(!search){
//     observer.error('element not exist')
//    }
//    search?.addEventListener('input', event =>{
//     observer.next(event)
//    })
// });
const search$: Observable<Event> = fromEvent(
    document.getElementById('poisk') as HTMLElement,
    'input'
)

search$.pipe(
    map(event =>{
        return (event.target as HTMLInputElement).value
    }),
    debounceTime(500),
    distinctUntilChanged()
).subscribe({
    next: value =>{
        console.log(value);
    },
    error: err => console.log(err)
});