import { SnapshotAction } from "@angular/fire/compat/database";
import { map, Observable } from "rxjs";

export const mapKeyIntoPayload = (obs : Observable<any>): Observable<any> => {
    return obs.pipe(
        map(changes => {
            return changes.map((c : SnapshotAction<any>) => {
                return {key : c.payload.key, ...c.payload.val()}
            })
        })
    )
}