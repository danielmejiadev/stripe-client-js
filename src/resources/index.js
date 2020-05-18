// Resources
import { Products } from './products';
import { Plans } from './plans';
import { Customers } from './customers';
import { Suscriptions } from './suscriptions';
import { PaymentMethods } from './paymentMethods';
import { Invoices } from './invoices';

/**
 * The exported resources url of the stripe.
 */
const resources = {
  products: Products,
  plans: Plans,
  customers: Customers,
  suscriptions: Suscriptions,
  paymentMethods: PaymentMethods,
  invoices: Invoices,
};

export default resources;
