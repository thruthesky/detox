export interface Alarm {
    ID?: string;
    content: string;
    enabled?: '' | 'Y';
    // friday: '' | 'Y';
    hour?: string;
    minute?: string;
    // monday: '' | 'Y';
    stamp_create?: string;
    // saturday: '' | 'Y';
    // sunday: '' | 'Y';
    // thursday: '' | 'Y';
    title: string;
    // tuesday: '' | 'Y';
    user_ID?: string;
    // wednesday: '' | 'Y';s
}


export type TabName = 'meditation' | 'yoga' | 'stretching' | 'core';

