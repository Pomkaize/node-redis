export const FIRST_KEY_INDEX = 1;

export function transformArguments(key: string): Array<string> {
    return ['HVALS', key];
}

export declare function transformReply(): Array<string>;
