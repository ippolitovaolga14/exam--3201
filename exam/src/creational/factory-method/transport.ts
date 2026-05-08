// Спільний інтерфейс для всіх продуктів
export interface Transport {
    deliver(): string;
}

// Конкретна реалізація — Вантажівка
export class Truck implements Transport {
    public deliver(): string {
        return "Доставка вантажівкою по дорозі";
    }
}

// Конкретна реалізація — Корабель
export class Ship implements Transport {
    public deliver(): string {
        return "Доставка судном через море";
    }
}
