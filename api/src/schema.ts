export * from './generated/api';

export interface UpdateOrderRowVariables {
  id: string;
  quantity?: number;
}

export interface AddProductToOrderVariables {
  orderId: string;
  productId: string;
  quantity?: number;
}

export interface AddDiscountCodeToOrderVariables {
  orderId: string;
  code: string;
}
