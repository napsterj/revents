import { delay } from '../common/utils/util';
import {sampleData} from './sampleData';

export function FetchSampleData() {
    return delay(1000).then(() => {
        return Promise.resolve(sampleData);
    });     
}