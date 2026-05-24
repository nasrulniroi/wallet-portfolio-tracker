export function formatNumber(n: number) { return new Intl.NumberFormat('en-US').format(n) }
export function formatUSD(n: number) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n) }
export function cn(...classes: (string | undefined | false)[]) { return classes.filter(Boolean).join(' ') }
