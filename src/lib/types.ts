export interface DataPoint { timestamp: string; value: number; }
export interface ApiResponse<T> { data: T; error?: string; timestamp: number; }
